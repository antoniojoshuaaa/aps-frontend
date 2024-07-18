<script>
    export let output
    let authors = []
    if (output.author != undefined) {
        if (output.author.length > 3) {
        authors = output.author.slice(0, 3)
        } else {
            authors = output.author
        }
    }
</script>

<div class="w-full max-w-[80rem] mx-auto my-4 p-5 shadow-md">
    <a href="/publications/{output['dc:identifier'].replace("SCOPUS_ID:", "")}" class="font-semibold text-xl link-hover">{output['dc:title']}</a>
    <div class="italic">
        <p>
            {#each output.author.slice(0, 3) as author, index}
            {author.authname}{#if index < 2},&nbsp{/if}
            {/each}
            {#if output.author.length > 3}
                et al.
            {/if}
        </p>
        <p>Keywords: {output['authkeywords']}</p>
        <p>{output['prism:aggregationType']} {output['subtypeDescription']}, {output['prism:coverDisplayDate']}</p>
    </div>
</div>