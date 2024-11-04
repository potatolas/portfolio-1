<template>
    <div class="flex gap-2 text-xs mb-8 flex-wrap p-2 justify-center items-center">
        <button class="tags tags-btn" v-for="tag in Object.keys(TAGS)" :class="getButtonClass(tag)"
            @click="toggleTag(tag)">
            {{ tag }}
        </button>
    </div>
    <div class="flex flex-wrap gap-8 justify-center">
        <TransitionGroup name="list">
            <TheHoverFlipCard v-for="skill in shownSkills" :extraStyles="flipCardStyles" :key="skill.name">
                <template #front-side>
                    <img style="max-height: 100px; max-width: 100px" class="grayscale-85" :src="skill.icon">
                </template>
                <template #back-side>
                    <div class="flex flex-col items-center">
                        <div>
                            <span class="text-xl">{{ skill.name }}</span>
                        </div>
                        <div class="flex gap-2 text-xs mt-1 flex-wrap p-2 justify-center">
                            <span class="tags" v-for="tag in skill?.tags" :class="tag.classes">
                                {{ tag.key }}
                            </span>
                        </div>
                    </div>
                </template>
            </TheHoverFlipCard>
            <TheHoverFlipCard :key="'none'" :extraStyles="flipCardStyles" v-if="shownSkills.length === 0">
                <template #front-side>
                    <img style="max-height: 100px; max-width: 100px" class="grayscale-85" :src="ICONS.sadFaceIcon">
                </template>
                <template #back-side>
                    <div class="flex flex-col items-center px-4">
                        <span>You have turned off all the filters.</span>
                    </div>
                </template>
            </TheHoverFlipCard>
        </TransitionGroup>
    </div>
    <div class="text-center mt-8">
        Others: Agile, Scrum & Object Oriented Programming.
    </div>

</template>

<script>
import ICONS from "../../assets/icons/icons"
import TheHoverFlipCard from "../CommonComponents/TheHoverFlipCard.vue";

const TAGS = Object.freeze({
    Frontend: { key: 'Frontend', classes: ['bg-red-100'] },
    Backend: { key: 'Backend', classes: ['bg-orange-100'] },
    Tooling: { key: 'Tooling', classes: ['bg-yellow-100'] },
    Language: { key: 'Language', classes: ['bg-amber-100'] },
    Node: { key: 'Node', classes: ['bg-green-100'] },
    Testing: { key: 'Testing', classes: ['bg-blue-100'] },
    RESTful: { key: 'RESTful', classes: ['bg-fuchsia-100'] },
    Architecture: { key: 'Architecture', classes: ['bg-rose-100'] },
    Web: { key: 'Web', classes: ['bg-lime-100'] },
    Database: { key: 'Database', classes: ['bg-emerald-100'] },
    DevOps: { key: 'DevOps', classes: ['bg-pink-100'] },
    GameDev: { key: 'GameDev', classes: ['bg-stone-100'] }
});


export default {
    name: 'MySkills',
    components: {
        TheHoverFlipCard
    },
    data() {
        return {
            TAGS,
            ICONS,
            flipCardStyles: ["transition-all", "h-[200px]", "w-[200px]", "border"
                , "border-2", "border-dashed", "border-black/40", "rounded-full", "flex", "items-center"
                , "justify-center"],
            skills: [
                { name: 'Vue 3', icon: ICONS.vueIcon, tags: new Set([TAGS.Frontend, TAGS.Node, TAGS.Web]) },
                { name: "React", icon: ICONS.reactIcon, tags: new Set([TAGS.Frontend, TAGS.Node, TAGS.Web]) },
                { name: "Vite", icon: ICONS.viteIcon, tags: new Set([TAGS.Frontend, TAGS.Tooling]) },
                { name: "HTML", icon: ICONS.htmlIcon, tags: new Set([TAGS.Frontend, TAGS.Language]) },
                { name: "JavaScript", icon: ICONS.javascriptIcon, tags: new Set([TAGS.Frontend, TAGS.Language]) },
                { name: "CSS", icon: ICONS.cssIcon, tags: new Set([TAGS.Frontend, TAGS.Language]) },
                { name: 'Figma', icon: ICONS.figmaIcon, tags: new Set([TAGS.Frontend, TAGS.Tooling]) },
                { name: "Tailwind CSS", icon: ICONS.tailwindIcon, tags: new Set([TAGS.Frontend, TAGS.Node]) },
                { name: "NodeJS", icon: ICONS.nodeIcon, tags: new Set([TAGS.Node, TAGS.Tooling]) },
                { name: "Jest", icon: ICONS.jestIcon, tags: new Set([TAGS.Testing]) },
                { name: "Cypress", icon: ICONS.cypressIcon, tags: new Set([TAGS.Testing, TAGS.Frontend]) },
                { name: "ExpressJS", icon: ICONS.expressIcon, tags: new Set([TAGS.Backend, TAGS.Node, TAGS.RESTful, TAGS.Web]) },
                { name: "NGINX", icon: ICONS.nginxIcon, tags: new Set([TAGS.Architecture, TAGS.Web]) },
                { name: "Java", icon: ICONS.javaIcon, tags: new Set([TAGS.Language, TAGS.Backend]) },
                { name: "Python", icon: ICONS.pythonIcon, tags: new Set([TAGS.Language, TAGS.Backend]) },
                { name: "Ruby", icon: ICONS.rubyIcon, tags: new Set([TAGS.Language, TAGS.Backend]) },
                { name: "MongoDB", icon: ICONS.mongoIcon, tags: new Set([TAGS.Database, TAGS.Backend]) },
                { name: "SQL", icon: ICONS.sqlIcon, tags: new Set([TAGS.Database, TAGS.Backend]) },
                { name: "Kubernetes", icon: ICONS.kubernetesIcon, tags: new Set([TAGS.Architecture, TAGS.DevOps]) },
                { name: "Docker", icon: ICONS.dockerIcon, tags: new Set([TAGS.Architecture, TAGS.DevOps]) },
                { name: "RabbitMQ", icon: ICONS.rabbitIcon, tags: new Set([TAGS.Architecture, TAGS.DevOps]) },
                { name: "Git", icon: ICONS.gitIcon, tags: new Set([TAGS.Architecture, TAGS.DevOps]) },
                { name: "Bash", icon: ICONS.bashIcon, tags: new Set([TAGS.Architecture, TAGS.DevOps]) },
                { name: "PNPM", icon: ICONS.pnpmIcon, tags: new Set([TAGS.Tooling, TAGS.DevOps]) },
                { name: "Bitbucket (Pipelines)", icon: ICONS.bitbucketIcon, tags: new Set([TAGS.Tooling, TAGS.DevOps]) },
                { name: "Asana", icon: ICONS.asanaIcon, tags: new Set([TAGS.Tooling]) },
                { name: "JIRA", icon: ICONS.jiraIcon, tags: new Set([TAGS.Tooling]) },
                { name: "SparkAR", icon: ICONS.sparkIcon, tags: new Set([TAGS.GameDev]) },
                { name: "Unity", icon: ICONS.unityIcon, tags: new Set([TAGS.GameDev]) },
                { name: "Wordpress", icon: ICONS.wordpressIcon, tags: new Set([TAGS.Web, TAGS.Frontend, TAGS.Backend]) },
                { name: "PHP", icon: ICONS.phpIcon, tags: new Set([TAGS.Web, TAGS.Frontend, TAGS.Backend]) }
            ],
            shownTags: new Set(Object.keys(TAGS))
        }
    },
    methods: {
        getButtonClass(key) {
            if (this.shownTags.has(key)) {
                return [...TAGS[key].classes, 'border', 'border-white']
            } else {
                return ['bg-gray-200', 'border', 'border-white', 'line-through']
            }
        },
        toggleTag(key) {
            if (this.shownTags.has(key)) {
                this.shownTags.delete(key)
            } else {
                this.shownTags.add(key)
            }
        },
        showSkill(tags) {
            for (let tag of tags) {
                if (this.shownTags.has(tag.key)) {
                    return true;
                }
            }
            return false;
        }
    },
    computed: {
        shownSkills() {
            return this.skills.filter((skill) => this.showSkill(skill.tags))
        }
    }
}
</script>

<style scoped>
.tags {
    @apply rounded px-2 py-1;
}

.tags-btn {
    @apply transition-all;
}

.tags-btn:hover {
    transform: translateY(-4px);
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>