import { BACKEND_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const {project_code} = params

    let uri = BACKEND_URL + `projects/project_code/${project_code}/`
    const res = await fetch(uri);
    if (res.status != 200) {
        return error(res.status, res.statusText)
    }
    const data = await res.json();
    return {
        project: data,
    };
}