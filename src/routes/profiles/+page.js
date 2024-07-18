import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
    const limit = Number(url.searchParams.get('limit')) || 20;
    const page = Number(url.searchParams.get('page')) || 1;
    const value = url.searchParams.get('value') || '';

    if (limit > 100) {
        throw error(400, "Bad Request")
    }
    let uri = ''
    if (value == '') {
        uri = `http://localhost:8000/staffs/?limit=${limit}&page=${page}`
    } else {
        uri = `http://localhost:8000/staffs/?searchQuery=${value}&limit=${limit}&page=${page}`
    }

    const res = await fetch(uri);
    if (res.status != 200) {
        return error(res.status, res.statusText)
    }
    const data = await res.json();
    return {
        profiles: data.results,
        total: data.count,
        page: page,
        queryValue: value,
    };
}