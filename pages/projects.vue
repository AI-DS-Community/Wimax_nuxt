<template>
    <div class = "grid grid-cols-1 gap-8 max-w-7xl items-center mx-auto py-8">
        <CardProject v-for = "project in Projects" :key="project.title" :content="project" class = "mx-auto w-full" />
    </div>
</template>
<script setup>
    const Projects = [
        {
            title: "Gesture Controlled Computer (GCC)",
            content: "A technology to control computers and laptops using hand gestures to mimic the entire functions of mouse and some keyboard functions to ease the human computer interaction.Can be used by anyone and anywhere only with a Webcam and a system.This technology can be used in various sectors such as Smart home, Smart education, Entertainment, Self-driving cars, Gaming and medical field.",
            link: "https://www.mediafire.com/file/f7cpxka5fhjlcrz/Gesture-Control-Computer.rar/file",
            github: "https://github.com/0EnIgma1/Gesture-Controlled-Computer",
            image: "/gcc.webp",
        },
        {
            title: "UVcoin",
            content: "UVcoin is a ERC20 token created by UV to lay a foundation on blockchain and upcoming projects on Blockchain.",
            link: "https://polygonscan.com/token/0x8811fb97951e1444a6d461df7bb4404336bc68a7",
            image: "/uv.webp",
        },
        {
            title: "UV",
            content: "Give it a Try !..Won't regret it :) ",
            link: "https://theuvofearth.wixsite.com/stage1",
            image: "/uv.webp",
        },
        {
            title: "Rock Paper Scissors",
            content: "An AI based Rock Paper Scissors game where you can play real time with an AI using your webcam.Requires a Webcam to detect player's hand gestures.",
            link: "https://www.mediafire.com/file/98yzjdhcqylfice/Rock-Paper-Scissors.rar/file",
            github: "https://github.com/0EnIgma1/Rock-Paper-Scissors",
            image: "rps.svg",
        },
        {
            title: "Sketcher",
            content: "A program to convert any image into a sketch using python.Developed in python using OpenCV and Gaussian Blur ",
            link: "https://0enigma1-sketcher-sketcher-ami38g.streamlitapp.com/",
            github: "https://github.com/0EnIgma1/sketcher",
            image: "/chad.webp",
        },
        {
            title: "StickRole",
            content: "An NFT Collection.",
            link: "https://opensea.io/collection/stickrole",
            image: "/stick.webp",
        },
        {
            title: "GG-Snake",
            content: "A classic RETRO game.",
            github: "https://github.com/0EnIgma1/GG-Snake",
            image: "/snake.svg",
        },
        
    ]

</script>