import { BACKEND_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

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
            uri = BACKEND_URL + `/projects/?limit=${limit}&page=${page}`
        } else {
            uri = BACKEND_URL + `/projects/?limit=${limit}&page=${page}&search_query=${value}`
        }

        const res = await fetch(uri);
        const data = await res.json();
        let total = 0
        if (data) {
            console.log(data)
            total = data.results.length
            return {
                projects: data,
                total: total,
                page: page,
                queryValue: value,
            };
        }
        return {
            projects: [],
            total: total,
            page: page,
            queryValue: value,
        } 
    }
    return getProfiles(limit)
}