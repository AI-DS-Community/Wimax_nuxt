<template>
    <div class = "grid grid-cols-2 gap-8 max-w-7xl items-center mx-auto py-8">
        <CardProject v-for = "project in Projects" :key="project.title" :content="project" class = "mx-auto w-full" />
    </div>
</template>
<script setup>
    const Projects = [
        {
            title: "Gesture Controlled Computer (GCC)",
            content: "A technology to control computers and laptops using hand gestures to mimic the entire functions of mouse and some keyboard functions to ease the human computer interaction.Only Webcam is required. This technology can be used in various sectors such as Smart home, Smart education, Entertainment, Gaming and medical field.",
            link: "https://www.mediafire.com/file/f7cpxka5fhjlcrz/Gesture-Control-Computer.rar/file",
            github: "https://github.com/0EnIgma1/Gesture-Controlled-Computer",
            image: "/project/gcc.webp",
        },
        {
            title: "Medomaxx",
            content: "The goal of Medomaxx is to create a medical robot with artificial intelligence. The entire concept was created with the intention of treating the sick using medication. According to a specific disease, the robot gives patients regular doses of medicine. The medical staff can provide medication to patients with this robot without coming into contact with them directly.",
            link: "https://www.mediafire.com/file/f7cpxka5fhjlcrz/Gesture-Control-Computer.rar/file",
            github: "https://github.com/0EnIgma1/Gesture-Controlled-Computer",
            image: "/project/gcc.webp",
        },
        
        {
            title: "UVcoin",
            content: "UVcoin is a ERC20 token created by UV to lay a foundation on blockchain and upcoming projects on Blockchain.",
            link: "https://polygonscan.com/token/0x8811fb97951e1444a6d461df7bb4404336bc68a7",
            image: "/project/uv.webp",
        },
        {
            title: "UV",
            content: "Give it a Try !..Won't regret it :) ",
            link: "https://theuvofearth.wixsite.com/stage1",
            image: "/project/uv.webp",
        },
        {
            title: "Rock Paper Scissors",
            content: "An AI based Rock Paper Scissors game where you can play real time with an AI using your webcam.Requires a Webcam to detect player's hand gestures.",
            link: "https://www.mediafire.com/file/98yzjdhcqylfice/Rock-Paper-Scissors.rar/file",
            github: "https://github.com/0EnIgma1/Rock-Paper-Scissors",
            image: "/project/rps.svg",
        },
        {
            title: "Sketcher",
            content: "A program to convert any image into a sketch using python.Developed in python using OpenCV and Gaussian Blur ",
            link: "https://0enigma1-sketcher-sketcher-ami38g.streamlitapp.com/",
            github: "https://github.com/0EnIgma1/sketcher",
            image: "/project/chad.webp",
        },
        {
            title: "StickRole",
            content: "An NFT Collection.",
            link: "https://opensea.io/collection/stickrole",
            image: "/project/stick.webp",
        },
        {
            title: "GG-Snake",
            content: "A classic RETRO game.",
            github: "https://github.com/0EnIgma1/GG-Snake",
            image: "/project/snake.svg",
        },
        {
            title: "WiMaX",
            content: "The Prototype website for WiMaX",
            link: "https://naresh1115.github.io/club/",
            image: "/project/webdev.svg",
        },
        
    ]

</script>