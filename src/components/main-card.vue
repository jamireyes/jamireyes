<template>
    <div class="bg-white w-full lg:w-3/4 h-auto m-2 rounded-lg p-10 shadow-lg">
        <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-2/3">
                <personal-info />
                <educational-bg />
            </div>
            <div class="w-full lg:w-1/2">
                <projects />
            </div>
        </div>
        <div class="w-full">
            <skills />
        </div>
    </div>
</template>

<script>
export default {
    name: "main-card",
};
</script>
