<template>
    <nav class="p-2 sticky top-2 left-2 z-10">
        <div class="flex bg-black/10 rounded-xl font-serif border-black/20 border backdrop-blur-lg">
            <div class="px-8 py-2 font-semibold border-r-black/20 border-r">Nicholas Yeo</div>
            <RouterLink to="/resume">
                <button class="border-r-black/20 transition-all hover:bg-black/10 border-r px-4 h-full">About Me</button>
            </RouterLink>
            <RouterLink to="/work">
                <button class="border-r-black/20 transition-all hover:bg-black/10 border-r px-4 h-full">My Work</button>
            </RouterLink>
        </div>
    </nav>
</template>