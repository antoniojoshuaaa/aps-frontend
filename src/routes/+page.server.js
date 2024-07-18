import { error } from '@sveltejs/kit';
import { BACKEND_URL } from  "$env/static/private"

export async function load({ fetch }) {

    let yearlyCountURI = BACKEND_URL + "publications/count/yearly/"
    const yearlyCountResponse = await fetch(yearlyCountURI);
    const yearlyCountData = await yearlyCountResponse.json();

    let recentPublicationsURI = BACKEND_URL + "publications/?limit=5&page=1"
    const recentPublicationsRes = await fetch(recentPublicationsURI);
    const recentPublicationsData = await recentPublicationsRes.json();

    let recentProjectsURI = BACKEND_URL + "projects/?limit=5&page=1"
    const recentProjectsRes = await fetch(recentProjectsURI);
    const recentProjectsData = await recentProjectsRes.json();

    return {
        yearlyCount: yearlyCountData,
        recentPublications: recentPublicationsData,
        recentProjects: recentProjectsData,
    };
}