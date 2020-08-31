<template>
  <div id="app" class="bg-gradient flex justify-center items-start lg:items-center w-full h-screen">
    <div class="w-full flex flex-col lg:flex-row container p-5">
        <side-card />
        <main-card />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    #app {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .bg-gradient {
        background: #1FA2FF;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-size: cover;
    }
</style>
