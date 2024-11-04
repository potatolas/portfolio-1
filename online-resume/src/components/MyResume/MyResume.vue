<template>
    <div class="fixed flex flex-col gap-4 top-20 left-0 fade-in-animation bg-red-100 w-0 h-0 z-10">
        <button class="bookmark bookmark-animation text-sm w-[100px] text-start"
            @click="scrollToSection('landing-panel')">
            <span>Introduction</span>
        </button>
        <button v-for="section in fadeInSections" class="bookmark bookmark-animation text-sm w-[100px] text-start"
            @click="scrollToSection(section.id)">
            <span>{{ section.title }}</span>
        </button>
    </div>
    <div class="flex flex-col gap-4 fade-in-animation">
        <div id="landing-panel" class="landing-panel flex relative text-2xl leading-relaxed">
            <div
                class="m-4 p-12 flex flex-col border-2 border-black/20 hover:border-black/40 transition-all border-dashed grow justify-center">
                <!-- <div class="font-serif font-bold text-xl mb-4">About Me</div> -->
                <div>
                    <p class="text-[60%] sm:text-[100%] md:text-[250%] lg:text-[300%]">
                        <span class="font-serif leading-1">Hello! I
                            am a&#10240</span>
                        <span class="font-serif leading-1">{{ displayedText }}</span>
                        <span class="font-serif inline-block w-[2px] bg-black leading-none blink-type">
                            <span class="text-transparent">|</span>
                        </span>
                    </p>
                    <div class="text-[60%] md:text-[80%] lg:text-[90%] font-sans mt-4">
                        <p>
                            My name is <span
                                class="font-serif font-semibold underline underline-offset-2">Nicholas</span>
                            and I am {{ new Date().getFullYear() - 1997 }} this year.
                        </p>
                        <p>
                            I am an aspiring engineer with experience in building scalable systems using JavaScript on
                            cloud
                            platforms. I am passionate about frontend and web development and motivated to grow in these
                            areas. I look forward to develop my skills in a professional environment.
                            Scroll down or click the buttons at the top left to learn more about my skills and work
                            experiences!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4" v-for="section in fadeInSections" :key="section.id" :id="section.id">
            <div class="font-serif font-bold text-xl mb-4 px-4">{{ section.title }}</div>
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
    components: {
        MySkills,
        MyWorkExperiences,
    },
    data() {
        return {
            displayedText: "",
            carouselText: [
                { text: "Software Engineer." },
                { text: "Frontend Developer." },
                { text: "Web Developer." }
            ],
            fadeInSections: {
                'skills': {
                    id: 'skill-section',
                    title: 'Skills',
                    classes: [],
                    appeared: false,
                    component: 'MySkills',
                },
                'work': {
                    id: 'work-section',
                    title: 'Work Experiences',
                    classes: [],
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
        },
        waitForMs(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        async typeSentence(sentence, delay = 100) {
            const letters = sentence.split("");
            let i = 0;
            while (i < letters.length) {
                await this.waitForMs(delay);
                this.displayedText = this.displayedText + letters[i]
                i++
            }
            return;
        },
        async deleteSentence() {
            while (this.displayedText !== "") {
                await this.waitForMs(100);
                this.displayedText = this.displayedText.slice(0, -1)
            }
        },
        async carousel(carouselList) {
            let i = 0;
            while (true) {
                // updateFontColor(eleRef, carouselList[i].color)
                await this.typeSentence(carouselList[i].text);
                await this.waitForMs(1500);
                await this.deleteSentence();
                await this.waitForMs(500);
                i++
                if (i >= carouselList.length) { i = 0; }
            }
        },
        scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
        },
        isMobile() {
            return window.matchMedia("(max-width: 767px)").matches;
        }
    },
    mounted() {
        if (!this.isMobile()) {
            this.scrollCallback()
            document.addEventListener("scroll", this.scrollCallback);
        }

        // typewriter-stuff
        this.carousel(this.carouselText, document.getElementById('typewriter-stuff'))

        const bookmarks = document.getElementsByClassName("bookmark")
        for (let bookmark of bookmarks) {
            setTimeout(() => {
                bookmark.classList.add("bookmark-resting");
            }, "800");
        }

    },
    computed: {
        allAppeared() {
            return this.skillAppeared && this.workAppeared
        }
    },
    watch: {
        allAppeared(newValue) {
            if (newValue) {
                document.removeEventListener("scroll", this.scrollCallback);
            }
        }
    }
}
</script>

<style scoped>
@keyframes fade-slide-r {
    from {
        transform: translateX(400px);
        opacity: 0;
    }

    to {
        opacity: 100;
    }
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    40% {
        opacity: 1;
    }

    60% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

@keyframes bookmark {
    0% {
        transform: translateX(calc(-100% - (-10px)));
    }

    100% {
        transform: translateX(0);
    }
}

.bookmark-animation {
    animation-name: bookmark;
    animation-duration: 500ms;
}

.fade-in-from-r {
    animation-name: fade-slide-r;
    animation-duration: 2s;
}

.landing-panel {
    height: calc(100vh - 57.6px)
}

.blink-type {
    animation: blink .6s linear infinite;
}

.bookmark {
    @apply border-r border-y border-gray-600 p-2 rounded-r backdrop-blur;
    background-color: rgba(255, 255, 255, 0.4);
    transition: all 0.5s;
}

.bookmark-resting {
    opacity: 0.8;
    transform: translateX(calc(-100% - (-10px)));

    span {
        opacity: 0;
        transition: all 0.5s;
    }
}

.bookmark:hover {
    opacity: 1;
    transform: translateX(0);

    span {
        opacity: 1;
    }
}
</style>