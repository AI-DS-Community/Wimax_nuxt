<template>
    <div class = "grid grid-cols-1 gap-8 max-w-7xl items-center mx-auto py-8">
        <CardProject v-for = "project in Projects" :key="project.title" :content="project" class = "mx-auto w-full" />
    </div>
</template>
<script setup>
    const Projects = [
        {
            title: "Doraemon",
            content: "A robot cat",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            github: "https://github.com/retraigo/moe-counter",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmangathrill.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fdasssasssasss.png&f=1&nofb=1",
        },
        {
            title: "Doraemon",
            content: "A robot cat",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            github: "https://github.com/retraigo/moe-counter",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmangathrill.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fdasssasssasss.png&f=1&nofb=1",
        },
        {
            title: "Doraemon",
            content: "A robot cat",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            github: "https://github.com/retraigo/moe-counter",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmangathrill.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fdasssasssasss.png&f=1&nofb=1",
        },
        {
            title: "Doraemon",
            content: "A robot cat",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            github: "https://github.com/retraigo/moe-counter",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmangathrill.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fdasssasssasss.png&f=1&nofb=1",
        }
    ]

</script>