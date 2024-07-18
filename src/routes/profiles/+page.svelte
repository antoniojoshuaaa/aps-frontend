<script>
	import ProfileSearchCard from '$lib/components/ProfileSearchCard.svelte';
	import IconSearch from '~icons/mdi/search';
    import {goto} from "$app/navigation";
	export let data

	let pageSize = 20;
    let totalItems = 0
    let totalPages = 0
    let value = ""
    if (data) {
        value = data.queryValue;
        totalItems = Number(data.total);
        totalPages = Math.ceil(totalItems / pageSize);

    }
	
    if (totalPages == undefined) {
        totalPages = 0;
    }
    const previousPage = () => {
        data.page--;
        let uri = `/profiles?limit=${pageSize}&page=${data.page}`
        if (value != '') {
            uri += `&value=${value}`;
        }
        goto(uri);
    }
    const nextPage = () => {
        data.page++;
        let uri = `/profiles?limit=${pageSize}&page=${data.page}`
        if (value != '') {
            uri += `&value=${value}`;
        }
        goto(uri);
    }
	const search = () => {
        data.page = 1
        let uri = `/profiles?limit=${pageSize}&page=${data.page}`
        if (value != '') {
            uri += `&value=${value}`;
        }
        goto(uri);
    }
</script>


<div class="w-full flex">
	<div class="font-sans text-md text-wrap flex mx-auto my-5">
		<input
			bind:value={value}
			type="text"
			placeholder="Search..."
			class="rounded-l-md w-[35rem] border-stone-300 border-2 px-3"
		/>
		<button class="bg-blue-900 h-fit rounded-r-md p-3" on:click={search}>
			<IconSearch class="text-white" />
		</button>
	</div>
</div>

<div class="grid grid-cols-2 max-w-[85rem] mx-auto">
    {#each data.profiles as profile}
    {#if 'error' in profile}
        <div class="w-full flex"><p class="mx-auto">No Results Found</p></div>
    {:else}
        <ProfileSearchCard profile={profile}/>
    {/if}
    {/each}
</div>


<div class="w-full flex">
    <div class="join grid grid-flow-col mx-auto my-5">
        <button class="join-item btn btn-outline" on:click={previousPage} disabled={data.page == 1}>Previous page</button>
        <button class="join-item btn btn-outline" on:click={nextPage} disabled={data.page == totalPages || totalItems == 0}>Next page</button>
    </div>
</div>