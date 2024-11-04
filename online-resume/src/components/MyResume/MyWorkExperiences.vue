<template>
    <div v-for="work in workExperiences"
        class="m-4 p-12 flex flex-col border-2 border-black/20 hover:border-black/40 transition-all border-dashed grow relative my-6">
        <div class="flex">
            <h3 class="text-md md:text-xl lg:text-2xl font-serif bg-white/60 p-2 rounded">{{ work.title }}</h3>
        </div>
        <div class="m-2 flex gap-4 text-sm md:text-md lg:text-lg">
            <span>{{ work.company }}</span>
            <span class="opacity-40">|</span>
            <span>{{ work.date }}</span>
        </div>
        <div class="m-2 text-sm md:text-md lg:text-lg">
            <ol class="job-description">
                <li v-for="jd in work.jobDescription">{{ jd }}</li>
            </ol>
        </div>
        <div class="absolute flex justify-end top-6 right-6 gap-6 items-center invisible md:visible">
            <img v-for="skill in work.skills" :src="skill.img" style="max-height: 30px; max-width: 30px"
                :alt="skill.title" :title="skill.title" class="grayscale-85 hover:grayscale-0 transition-all" />
        </div>
    </div>
</template>

<script>
import ICONS from "../../assets/icons/icons"

export default {
    name: 'MyWorkExperiences',
    data() {
        return {
            workExperiences: [
                {
                    title: 'Software Engineer (Full Stack)',
                    company: 'InsiderSecurity Pte. Ltd',
                    date: 'July 2022 - Present',
                    jobDescription: [
                        "Part of a team of 8 engineers across Singapore and Malaysia that developed a Cloud Security product from ground up.",
                        "Designed and developed the product in a cloud environment using Kubernetes and Azure.",
                        "Main frontend developer of the team. In-charge of developing the UI/UX and implementation of the frontend. Created a reusable component library in Vue that is widely used in the frontend development.",
                        "Responsible for developing backend RESTful APIs for the web application in NodeJS (ExpressJS) includes designing and implementing the authentication workflow for the web application and integration with Stripe.",
                        "Initiated and designed the web architecture and microservices of the product (Nginx, Kubernetes, Docker).",
                        "Practiced engineering best practices including design, testing, and code review, to ensure the highest level of software quality. This includes standardized toolsets and procedures, which helped to improve testing adoption and reduce bugs."
                    ],
                    skills: [
                        { img: ICONS.kubernetesIcon, title: 'Kubernetes' },
                        { img: ICONS.dockerIcon, title: 'Docker' },
                        { img: ICONS.vueIcon, title: 'Vue 3' },
                        { img: ICONS.expressIcon, title: 'Express' },
                        { img: ICONS.cypressIcon, title: 'Cypress' },
                        { img: ICONS.nginxIcon, title: 'NGINX' },
                        { img: ICONS.mongoIcon, title: 'MongoDB' },
                        { img: ICONS.nodeIcon, title: 'NodeJS' },
                        { img: ICONS.figmaIcon, title: 'Figma' }
                    ]
                },
                {
                    title: 'Web Developer (Internship)',
                    company: 'Mashwire Pte. Ltd',
                    date: 'Jan 2021 - May 2021',
                    jobDescription: [
                        "Assisted in development of webpages for marketing purposes for clients",
                        "Front-end development using HTML, PHP, Javascript, CSS and WordPress CMS",
                        "Development of AR filters and games using Facebook's SparkAR",
                        "Development of web banners used for advertising (GSAP, Javascript)"
                    ],
                    skills: [
                        { img: ICONS.wordpressIcon, title: 'Wordpress' },
                        { img: ICONS.phpIcon, title: 'PHP' },
                        { img: ICONS.javascriptIcon, title: 'Javascript' },
                        { img: ICONS.htmlIcon, title: 'HTML' },
                        { img: ICONS.cssIcon, title: 'CSS' },
                        { img: ICONS.sparkIcon, title: 'SparkAR' },
                    ]
                },
                {
                    title: 'Web Developer (Internship)',
                    company: 'Mashwire Pte. Ltd',
                    date: 'Jan 2021 - May 2021',
                    jobDescription: [
                        "Assisted in full-stack development of a Proof of Concept",
                        "Back-end development in Java (Object Oriented)",
                        "Front-end development in ReactJS",
                    ],
                    skills: [
                        { img: ICONS.reactIcon, title: 'React' },
                        { img: ICONS.javaIcon, title: 'Java' },
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.job-description {
    li {
        @apply py-1;
        list-style-type: square;
    }
}
</style>