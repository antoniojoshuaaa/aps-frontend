<script>
	import ProjectSearchCard from '$lib/components/ProjectSearchCard.svelte';
	import PublicationSearchCard from '$lib/components/PublicationSearchCard.svelte';
	import { scaleBand } from 'd3-scale';
    import { Chart, Svg, Axis, Bars, Tooltip, TooltipItem, Highlight } from 'layerchart';
    export let data;
</script>

<!-- hero -->
<div class="w-full h-56 relative overflow-hidden flex place-items-center">
    <img src="/sunway-university-001.webp" alt="hero" class="object-cover brightness-75 ">
</div>

<!-- body -->
<div class="max-w-[80rem] mx-auto my-10">
    
    
    <div class="mb-20">
        <h1 class="w-fit text-3xl mb-6 mx-auto">Recent Publications</h1>
        {#each data['recentPublications']['search-results']['entry'] as publication}
        <PublicationSearchCard output={publication}/>
        {/each}
    </div>
    <div class="mb-20">
        <h1 class="w-fit text-3xl mb-6 mx-auto">Publications Over The Years</h1>
        <div class="h-[28rem] w-[64rem] mx-auto my-5 grid place-items-center">
            <div class="h-full p-4 border rounded w-full">
                <Chart
                    data={data.yearlyCount}
                    x="year"
                    xScale={scaleBand().padding(0.4)}
                    y="count"
                    yDomain={[0, 1500]}
                    yNice={4}
                    padding={{ left: 16, bottom: 24 }}
                    tooltip={{ mode: "band" }}>
                    <Svg>
                        <Axis placement="left" grid rule />
                        <Axis
                            placement="bottom"
                            rule
                        />
                        <Bars radius={4} class="fill-primary group-hover:fill-gray-300 transition-colors" />
                    </Svg>
                    <Tooltip header={(data) => data.year} let:data >
                        <TooltipItem label="count" value={data.count} />
                    </Tooltip>
                </Chart>
            </div>
        </div>
    </div>
    <div class="mb-20">
        <h1 class="w-fit text-3xl mb-6 mx-auto">Recent Projects</h1>
        <p></p>
        {#each data['recentProjects']['results'] as project}
            <ProjectSearchCard output={project}/>
        {/each}
    </div>
    
</div>