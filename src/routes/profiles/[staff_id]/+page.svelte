<script>
	import IconWeb from '~icons/mdi/web';
	import ProjectSearchCard from '$lib/components/ProjectSearchCard.svelte';
	import PublicationSearchCard from '$lib/components/PublicationSearchCard.svelte';
	import { Chart, Svg, Axis, Bars, Tooltip, TooltipItem } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import { max } from 'd3-array';
	export let data;
	const maxCount = max(data.yearlyCount, d => +d.count) || 0;
</script>

<!-- profile banner -->
<div class="w-full h-fit relative overflow-hidden flex place-items-center shadow-md">
	<div class="font-sans tracking-widest mx-auto max-w-6xl w-full h-full text-center flex">
		<div class="m-10 border-2">
			<img src={data.image} alt="" class="object-cover object-top w-60 h-80" />
		</div>
		<div class="my-10 text-left flex grow">
			<div class="grow">
				<h1 class="text-3xl font-semibold">{data.staffName}</h1>
				<a href="mailto:{data.email}">{data.email}</a>
				<p>{data.title}</p>
				<p>{data.department}</p>
				<p>{data.school}</p>
			</div>
			<div class="text-sm mt-auto mx-10 gap-x-5">
				{#if data.link}
					<a href={data.link} class="flex w-fit h-fit">
						<IconWeb class="my-auto mr-1" />View Scopus
					</a>
				{/if}
				{#if data.wos}
					<a href="#" class="flex w-fit h-fit"><IconWeb class="my-auto mr-1" />View WoS</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- body -->
<div class="w-full">
	<div class="max-w-6xl w-full mx-auto px-10">
		<div class="mb-10">
			<h1 class="overview-heading">Biography</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ut aliquam consequatur
				eligendi molestiae doloremque beatae recusandae enim expedita? Laboriosam veniam delectus
				aut harum, iste cupiditate placeat nostrum adipisci aspernatur. Lorem ipsum dolor, sit amet
				consectetur adipisicing elit. Tempora quis esse corrupti dolor fuga accusantium sit illum
				veritatis odit est autem, natus vel minus ab saepe nostrum nemo perferendis eius! Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Rerum quas nostrum magni vero molestias
				blanditiis obcaecati. Iure repudiandae error magnam voluptas culpa esse, minus reprehenderit
				hic necessitatibus iusto nisi. Voluptatibus.
			</p>
		</div>
		{#if data.publications}
		<h1 class="overview-heading">Output Statistics</h1>
		<div class="h-[28rem] w-[64rem] mx-auto my-5 grid place-items-center">
			<div class="h-full p-4 border rounded w-full">
				<Chart
					data={data.yearlyCount}
					x="year"
					xScale={scaleBand().padding(0.4)}
					y="count"
					yDomain={[0, maxCount]}
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
		<div class="mb-10">
			<h1 class="overview-heading">Recent Scopus Outputs</h1>
			{#each data.publications.slice(0, 5) as output, i}
				<PublicationSearchCard output={output}/>
			{/each}
		</div>
		{/if}
		{#if data.projects}
		<div class="mb-10">
			<h1 class="overview-heading">Projects</h1>
			{#each data.projects as project}
				<ProjectSearchCard output={project} />
			{/each}
		</div>
		{/if}
		
	</div>
</div>
