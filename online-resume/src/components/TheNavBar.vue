<template>
    <nav class="p-2 sticky top-2 left-2 z-10">
        <div class="flex bg-black/10 rounded-xl font-serif border-black/20 border backdrop-blur-lg">
            <div>
            </div>
            <div class="px-8 py-2 font-semibold border-r-black/20 border-r flex items-center justify-center">
                <img class="h-6 grayscale" :src="ICONS.guyIcon" />
                <span class="ml-2 hidden md:block">Nicholas Yeo</span>
            </div>
            <RouterLink to="/resume">
                <button class="border-r-black/20 transition-all hover:bg-black/10 border-r px-4 h-full py-2">
                    About Me
                </button>
            </RouterLink>
            <RouterLink to="/work">
                <button class="border-r-black/20 transition-all hover:bg-black/10 border-r px-4 h-full py-2">My Work</button>
            </RouterLink>
            <div class="flex items-center px-4 ml-auto gap-4">
                <a :href="linkedin" target="_blank">
                    <img width="20px" class="grayscale-85 opacity-80 hover:opacity-100" :src="ICONS.linkedInIcon" />
                </a>
                <a :href="github" target="_blank">
                    <img width="20px" class="grayscale-85 opacity-80 hover:opacity-100" :src="ICONS.githubIcon" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import ICONS from "../assets/icons/icons"

export default {
    data() {
        return {
            ICONS,
            linkedin: 'https://www.linkedin.com/in/nicholas-yeo-03038623a/',
            github: 'https://github.com/potatolas/portfolio-1/tree/main'
        }
    }
}
</script>