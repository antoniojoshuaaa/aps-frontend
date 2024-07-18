import { error } from '@sveltejs/kit';
import { BACKEND_URL } from  "$env/static/private"

export async function load({ url, fetch }) {
    const limit = Number(url.searchParams.get('limit')) || 10;
    const page = Number(url.searchParams.get('page')) || 1;
    const value = url.searchParams.get('value') || '';

    async function getProfiles(limit = 10) {
        if (limit > 100) {
            throw error(400, "Bad Request")
        }
        let uri = ''
        if (value == '') {
            uri = BACKEND_URL + `/publications/?limit=${limit}&page=${page}`
        } else {
            uri = BACKEND_URL + `/publications/?limit=${limit}&page=${page}&search_query=${value}`
        }

        const res = await fetch(uri);
        if (res.status != 200) {
            return error(res.status, res.statusText)
        }
        const data = await res.json();
        let totalPages = data['search-results']['opensearch:totalResults'] || 0
        return {
            publications: data['search-results']['entry'],
            total: totalPages,
            page: page,
            queryValue: value,
        };
    }
    return getProfiles(limit)
}