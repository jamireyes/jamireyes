<template>
    <div class="bg-white w-1/4 h-auto m-2 rounded-lg p-10 shadow-lg">
        <div class="flex flex-col justify-center items-center">
            <img class="rounded-full w-32 h-32 flex items-center justify-center" src="../assets/img/profile-pic.jpg" alt="profile-pic">
            <h1 class="pt-8 text-2xl font-semibold"><span class="font-medium">Jami</span> Reyes</h1>
            <div class="bg-gray-400 text-gray-700 font-medium text-xs rounded-full p-2 px-3 my-5">
                Web Developer
            </div>
        </div>
        <div class="flex flex-col mx-5">
            <div class="flex flex-row items-center mb-3">
                <span class="text-gray-700 mr-2 w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                </span>
                <p class="text-xs">jamireyes1802@gmail.com</p>
            </div>
            <div class="flex flex-row items-center mb-3">
                <span class="text-gray-700 mr-2 w-4 h-4">
                    <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <p class="text-xs">+63 917 135 8009</p>
            </div>
            <div class="flex flex-row items-start mb-3">
                <span class="text-gray-700 mr-2 w-10 h-10">
                    <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <p class="text-xs">Vittoria Subdivision, Kagudoy, Basak, Lapu-Lapu City, 6015 (PH)</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "side-card"
}
</script>