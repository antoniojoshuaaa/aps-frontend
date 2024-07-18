<script>
    export let output
    let startDate = new Date(output["project_start_date"])
    let endDate = new Date(output["project_end_date"])
    let formattedStartDate = startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',  // Use 'long' to print the full month name
        day: 'numeric'
    });
    let formattedEndDate = endDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',  // Use 'long' to print the full month name
        day: 'numeric'
    });
    const sponsorGrant = output['grant_name'] != 'nan' ? output['grant_name'] || output['sponsor']['sponsor_name'] : output['sponsor']['sponsor_name']
</script>

<div class="w-full max-w-[80rem] mx-auto my-4 p-5 shadow-md">
    <a href="/projects/{output['project_code']}" class="font-semibold text-xl link-hover">{output['project_title']}</a>
    <div class="italic">
        <p>Sponsor/Grant: {sponsorGrant}</p>
        <p>{formattedStartDate} - {formattedEndDate}</p>
    </div>
</div>