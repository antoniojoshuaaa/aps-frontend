<script>
    export let department_name
    export let topics
    export let summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error doloribus suscipit fugiat accusamus ut voluptate reprehenderit deleniti illum, molestias placeat harum consequuntur dolor ipsa aliquam perferendis iste debitis voluptatem nihil!"
    export let popularResearches
    export let recentResearches
</script>

<div class="max-w-7xl relative mx-auto text-lg text-stone-700 tracking-wide pt-10">
    <h1 class="w-full text-3xl mb-6">{department_name}</h1>
    <div class="flex">
        <div class="w-[50rem]">
            {#each topics as topic}
                <a href={topic.link} class="link-hover">{topic.name}</a>
            {/each}
        </div>
        <div>
            <!-- summary -->
            <div class="mb-3">
                <p>{summary}</p>
            </div>
            <!-- researches -->
            <div class="grid grid-cols-2 w-full">
                <!-- popular research -->
                <div class="w-[90%]">
                    <h1 class="w-full text-2xl">Popular Publications</h1>
                    {#each popularResearches as research}
                         <!-- content here -->
                        <a href={research.link} class="link-hover"><p class="truncate hover:underline">{research.title}</p></a>
                    {/each}
                </div>
                <div class="w-[90%]">
                    <h1 class="w-full text-2xl">Recent Publications</h1>
                    {#each recentResearches as research}
                        <a href={research.link} class="link-hover"><p class="truncate hover:underline">{research.title}</p></a>
                    {/each}
                </div>
                <div class="col-span-2 text-right mr-10">
                    <button class="bg-blue-900 text-stone-100 rounded-sm px-2 py-1 mt-3 hover:bg-orange-500">See more</button>
                </div>
            </div>
        </div>
    </div>
</div>