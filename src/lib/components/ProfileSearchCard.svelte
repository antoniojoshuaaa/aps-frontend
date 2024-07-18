<script>
    export let profile
</script>

<div class="w-full my-4 flex p-5 mx-auto max-w-[40rem] shadow-md">
    <div class="">
        <img src={profile.image}  alt="profile" class="object-cover object-top w-[4rem] h-[4rem] rounded-full">
    </div>
    <div class="ml-5">
        <a href="/profiles/{profile.staff_id}" class="text-lg link-hover font-semibold">{profile.staff_name}</a>
        <p class="italic text-sm">{profile.title}, {profile.department}</p>
    </div>
</div>