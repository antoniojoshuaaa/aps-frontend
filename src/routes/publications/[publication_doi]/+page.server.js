import { error } from '@sveltejs/kit';
import { BACKEND_URL } from  "$env/static/private"

export async function load({ fetch, params }) {
    const {publication_doi} = params

    let uri = BACKEND_URL + `/publications/scopus_id?scopus_id=${publication_doi}`
    const res = await fetch(uri);
    if (res.status != 200) {
        return error(res.status, res.statusText)
    }
    const data = await res.json();
    return {
        publicationData: data['abstracts-retrieval-response']['coredata'],
        authKeywords: data['abstracts-retrieval-response']['authkeywords'] ? data['abstracts-retrieval-response']['authkeywords']['author-keyword'] || undefined : undefined,
        authors: data['abstracts-retrieval-response']['authors']['author'],
    };
}