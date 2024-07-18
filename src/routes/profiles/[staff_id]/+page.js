import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const {staff_id} = params

    const uri = `http://localhost:8000/staffs/profile/${staff_id}/`
    const res = await fetch(uri);

    const yearlyCountURI = `http://localhost:8000/publications/count/yearly/?filter_by=staff_id&value=${staff_id}`
    const yearlyCountResponse = await fetch(yearlyCountURI);
    
    const data = await res.json();
    const yearlyCountData = await yearlyCountResponse.json();
    console.log(yearlyCountData)
    return {
        staffId: data['staff_id'],
        staffName: data['staff_name'],
        email: data['email'],
        title: data['title'],
        image: data['image'],
        department: data['department'],
        school: data['school'],
        link: data['scopus_profile_link'],
        publications: data['scopus_publications'] ? data['scopus_publications']['search-results']['entry'] || undefined : undefined,
        projects: data['projects'] || undefined,
        yearlyCount: yearlyCountData,
    };
}