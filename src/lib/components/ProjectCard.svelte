<script>
	import { onMount } from "svelte";
    export let project;

    let reconstructedCollaborators = ''
    onMount(() => {
        const splitCollaborators = project['collaborators'].split(';')
        const slicedSplitCollaborators = splitCollaborators.slice(0, 3)
        if (project['collaborators'] == 'nan') {
            reconstructedCollaborators = ''
        } else {
            reconstructedCollaborators = slicedSplitCollaborators.join(' | ')
            if (splitCollaborators.length > 3) {
                reconstructedCollaborators += " | ..."
            }
        }
    })
    let projectId = project['project_code'].replaceAll("/", "-")
</script>

<div class="shadow-sm">
    <a href="/projects/{projectId}" class="font-semibold text-lg link-hover" target="_blank">{project['project_title']}</a>
    <div class="italic">
        <p>{#if project['grant_name'] != 'nan'}{project['grant_name']}{/if}</p>
        {#if reconstructedCollaborators}
            <p>Collaborators: {reconstructedCollaborators}</p>
        {/if}
        <p></p>
    </div>
    
</div>