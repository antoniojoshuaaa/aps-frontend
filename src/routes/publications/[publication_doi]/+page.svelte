<script>
    export let data;
    const authKeywords = ['authKeywords'].map((keyword) => keyword['$']).join(' | ');
    const authors = data['authors'].map((author) => author['ce:surname'] + " " + author['ce:given-name']).join(', ');
</script>

<div class="shadow-md px-16 py-10">
    <h1 class="text-3xl font-semibold">
        {data['publicationData']['dc:title']}
    </h1>
    <p class="p-1">{authors}</p>
</div>

<div class="w-full">
    <div class="grid grid-cols-7 mx-auto max-w-[80rem]">
        <div class="m-5 border-r-2 col-span-2">
            {#if data['publicationData']['subtypeDescription']}
                <h2 class="publication-sidebar-header">Document type</h2>
                <p>{data['publicationData']['subtypeDescription']}</p>
            {/if}
            {#if data['publicationData']['prism:publicationName']}
                <h2 class="publication-sidebar-header">Publication Name</h2>
                <p>{data['publicationData']['prism:publicationName']}</p>
            {/if}
            {#if data['publicationData']['prism:coverDate']}
                <h2 class="publication-sidebar-header">Date Published</h2>
                <p>{data['publicationData']['prism:coverDate']}</p>
            {/if}
            {#if data['publicationData']['prism:pageRange']}
                <h2 class="publication-sidebar-header">Page Range</h2>
                <p>{data['publicationData']['prism:pageRange']}</p>
            {/if}
            {#if data['publicationData']['prism:volume']}
                <h2 class="publication-sidebar-header">Volume</h2>
                <p>{data['publicationData']['prism:volume']}</p>
            {/if}
            {#if data['publicationData']['prism:issn']}
                <h2 class="publication-sidebar-header">ISSN</h2>
                <p>{data['publicationData']['prism:issn']}</p>
            {/if}
            {#if data['publicationData']['prism:isbn']}
                <h2 class="publication-sidebar-header">ISBN</h2>
                <p>{data['publicationData']['prism:isbn']}</p>
            {/if}
            {#if data['publicationData']['prism:doi']}
                <h2 class="publication-sidebar-header">DOI</h2>
                <p>{data['publicationData']['prism:doi']}</p>
            {/if}
            {#if data['publicationData']['citedby-count']}
                <h2 class="publication-sidebar-header">Cited by</h2>
                <p>{data['publicationData']['citedby-count']}</p>
            {/if}
                <h2 class="publication-sidebar-header">Open Access</h2>
            {#if data['publicationData']['openaccessFlag'] == "false"}
                <p>No</p>
            {:else}
                <p>Yes</p>
            {/if}
        </div>
        <div class="m-5 col-span-5">
            <div>
                <h1 class="text-2xl font-semibold">Abstract</h1>
                <p>{data['publicationData']['dc:description']}</p>    
            </div>
            {#if authKeywords}
            <div class="mt-10">
                <h1 class="text-2xl font-semibold">Author Keywords</h1>
                <p>{authKeywords}</p>
            </div>
            {/if}
            
        </div>
    </div>
    
</div>
