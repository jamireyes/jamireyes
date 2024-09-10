<template>
    <div>
        <div class="flex flex-row items-center">
            <span class="w-5 h-5 mr-2">
                <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                >
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                </svg>
            </span>
            <h1 class="font-semibold text-lg lg:text-xl">
                Skills & Technologies
            </h1>
        </div>
        <hr class="border-2 border-blue-400 w-20 my-2" />
        <div class="flex flex-wrap">
            <div
                v-for="skill in skills"
                :key="skill"
                class="bg-blue-400 hover:bg-blue-600 cursor-pointer text-white font-medium text-xs rounded-full p-1 px-3 my-1 mr-2"
            >
                {{ skill }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "skills",
    data() {
        return {
            skills: [
                "C Programming",
                "HTML / CSS",
                "Javascript",
                "jQuery",
                "Cheerio JS",
                "AJAX",
                "Vue JS",
                "Bootstrap",
                "Tailwind CSS",
                "Laravel",
                "PHP",
                "MySQL",
                "SQLite",
                "VSCode",
                "NPM",
                "Composer",
                "Github",
                "Laragon",
                "Xampp",
                "Figma",
                "Jira",
                "Confluence",
                "Digital Ocean",
                "Laravel Forge",
                "Vercel",
                "Ploi.io",
                "Hostinger",
                "Namecheap",
            ],
        };
    },
};
</script>
