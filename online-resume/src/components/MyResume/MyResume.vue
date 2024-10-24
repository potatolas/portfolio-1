<template>
    <div class="flex flex-col gap-4">
        <div
            class="m-4 p-6 flex flex-col border-4 border-black/20 hover:border-black/40 transition-all border-dashed">
            <div class="p-4">
                <div class="mb-4 text-center">
                    <span class="font-serif font-bold text-xl">About Me</span>
                </div>
                <div>
                    <h1 class="text-5xl font-extrabold">Aspiring engineer passionate about frontend and web development
                    </h1>
                </div>
            </div>
            <div class="mt-4 flex flex-col justify-center p-4">
                <span class="text-xl mb-2">Hi I'm Nicholas!</span>
                <span>
                    I'm an aspiring engineer with experience in building scalable systems using JavaScript on cloud
                    platforms.
                    I'm passionate about frontend and web development and motivated to grow in these areas. Look forward
                    to
                    develop my skills in a professional environment.
                </span>
            </div>
        </div>
        <div class="p-4" v-for="section in fadeInSections" :key="section.id" :id="section.id">
            <div class="font-serif font-bold text-xl mb-4">{{ section.title }}</div>
            <div :class="section.classes">
                <component :is="section.component"></component>
            </div>
        </div>
    </div>
</template>

<script>
import MySkills from './MySkills.vue';  
import MyWorkExperiences from './MyWorkExperiences.vue';

export default {
    name: 'My Resume',
    components:{
        MySkills,
        MyWorkExperiences,
    },
    data() {
        return {
            fadeInSections: {
                'skills': {
                    id: 'skill-section',
                    title: 'Skills',
                    classes: ['h-[300px]'],
                    appeared: false,
                    component: 'MySkills',
                },
                'work': {
                    id: 'work-section',
                    title: 'Work Experiences',
                    classes: ['h-[300px]'],
                    appeared: false,
                    component: 'MyWorkExperiences',
                }
            },
        }
    },
    methods: {
        scrollCallback() {
            for (let section in this.fadeInSections) {
                let element = document.getElementById(this.fadeInSections[section].id)
                if (this.checkVisible(element) && !this.fadeInSections[section].appeared) {
                    this.fadeInSections[section].classes.push('fade-in-from-r')
                }
            }
        },
        checkVisible(elm) {
            let rect = elm.getBoundingClientRect();
            let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    },
    mounted() {
        this.scrollCallback()
        document.addEventListener("scroll", this.scrollCallback);
    },
    computed: {
        allAppeared() {
            return this.skillAppeared && this.workAppeared
        }
    },
    watch: {
        allAppeared(newValue) {
            if (newValue) {
                document.removeEventListener("scroll", this.test);
            }
        }
    }
}
</script>

<style scoped>
@keyframes example {
    from {
        transform: translateX(400px);
        opacity: 0;
    }

    to {
        opacity: 100;
    }
}

.fade-in-from-r {
    animation-name: example;
    animation-duration: 4s;
}
</style>