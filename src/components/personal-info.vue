<template>
    <div class="flex flex-col mb-5">
        <div class="flex flex-row items-center">
            <span class="w-5 h-5 mr-2">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </span>
            <h1 class="font-semibold text-lg lg:text-xl">Personal Information</h1>
        </div>
        <hr class="border-2 border-blue-400 w-20 my-2">
        <div class="flex flex-row mt-1">
            <div class="w-1/3">
                <p class="font-medium text-xs md:text-sm">Date of Birth</p>
                <p class="font-medium text-xs md:text-sm">Place of Birth</p>
                <p class="font-medium text-xs md:text-sm">Citizenship</p>
                <p class="font-medium text-xs md:text-sm">Gender</p>
            </div>
            <div class="w-2/3">
                <p class="text-xs md:text-sm">February 18, 1997</p>
                <p class="text-xs md:text-sm">Lae, Papua New Guinea</p>
                <p class="text-xs md:text-sm">Filipino</p>
                <p class="text-xs md:text-sm">Male</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "personal-info"
}
</script>