<script>
	import { goto } from '$app/navigation';
    export let data;
    console.log(data)
    const collaborators = data['project']['collaborators'].replaceAll('; ', ' | ') || ''
    const staffName = toTitleCase(data['project']['staff']['staff_name'])
    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
    }
    const navToProfilePage = () => goto(`/profiles/${data['project']['staff']['staff_id']}`)
</script>

<div class="shadow-md px-16 py-10">
    <h1 class="text-3xl font-semibold">
        {data['project']['project_title']}
    </h1>
    <p>By: <a on:click={navToProfilePage} class="link-hover text-nowrap">{staffName}</a></p>
    <p>Collaborators: {collaborators}</p>
</div>

<div class="w-full">
    <div class="grid grid-cols-7 mx-auto max-w-[80rem]">
        <div class="m-5 col-span-2">
            {#if data['project']['amount_awarded']}
                <h2 class="publication-sidebar-header">Funding</h2>
                <p>RM {data['project']['amount_awarded']}</p>
            {/if}
            {#if data['project']['grant_name'] != 'nan'}
                <h2 class="publication-sidebar-header">Grant Name</h2>
                <p>{data['project']['grant_name']}</p>
            {/if}
            {#if data['project']['sponsor']['sponsor_name'] != 'nan'}
                <h2 class="publication-sidebar-header">Sponsor Name</h2>
                <p>{data['project']['sponsor']['sponsor_name']}</p>
            {/if}
            {#if data['project']['project_start_date']}
                <h2 class="publication-sidebar-header">Start Date</h2>
                <p>{data['project']['project_start_date']}</p>
            {/if}
            {#if data['project']['project_end_date']}
                <h2 class="publication-sidebar-header">End Date</h2>
                <p>{data['project']['project_end_date']}</p>
            {/if}
        </div>
    </div>
</div>
