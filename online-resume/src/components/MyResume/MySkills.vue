<template>
    <div class="flex flex-wrap gap-8 justify-center">
        <div v-for="skill in skills"
            class="hover:h-[110px] hover:w-[110px] transition-all h-[100px] w-[100px] border border-2 border-dashed border-black/40 rounded-full flex items-center justify-center">
            {{ skill.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MySkills',
    data() {
        return {
            skills: [
                {
                    name: 'Vue'
                },
                {
                    name: 'React'
                },
                {
                    name: 'Vite'
                },
                {
                    name: 'HTML'
                },
                {
                    name: 'Vue'
                },
                {
                    name: 'React'
                },
                {
                    name: 'Vite'
                },
                {
                    name: 'HTML'
                },
                {
                    name: 'Vue'
                },
                {
                    name: 'React'
                },
                {
                    name: 'Vite'
                },
                {
                    name: 'HTML'
                }
            ]
        }
    }
}
</script>