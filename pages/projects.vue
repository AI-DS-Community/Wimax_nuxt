<template>
    <div class = "h-full text-center font-bold text-4xl text-blue-300 mx-auto py-8">PROJECTS</div>
    <div class = "h-full grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl items-center mx-auto py-8">
        <CardProject v-for = "project in Projects" :key="project.title" :content="project" class = "mx-auto w-full" />
    </div>
</template>
<script setup>
    useHead({
        title: "Projects"
    })
    const Projects = [
    {
            title: "Hand Cricket against AI",
            content: "Think you can win against my AI in Hand cricket ? Give it a try. You can play with your hands as you play with your friends but this time against AI. Comes under computer vision domain and developed using Python and OpenCV ",
            github: "https://github.com/0EnIgma1/Hand-Cricket",
            image: "/project/output1.png",
        },
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
            image: "/project/medo.webp",
        },
        {
            title: "UVcoin",
            content: "UVcoin is a ERC20 token created by UV to lay a foundation on blockchain and upcoming projects on Blockchain.",
            link: "https://polygonscan.com/token/0x8811fb97951e1444a6d461df7bb4404336bc68a7",
            image: "/project/uv.webp",
        },
        {
            title: "UV",
            content: "UV is a secret society to find unique minds across the world. Give it a Try !..Won't regret it :) ",
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
            title: "NELSON",
            content: "A Virtual assistant named NELSON developed using python to recognize human voice commands and perform daily actions such as weather, notification, google search, Book tickets and more.",
            github: "https://github.com/0EnIgma1/Nelson",
            image: "/nelson.webp",
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
            github: "https://github.com/naresh1115/wimax",
            link: "https://naresh1115.github.io/wimax/",
            image: "/project/webdev.webp",
        },
        {
            title:"Stock Tracker",
            content: "A web app that displays the information of given stocks and its trend over given period of time",
            link:"https://arjunprakash027-finance-with-arjun-app-ezi7bd.streamlitapp.com/",
            github: "https://github.com/arjunprakash027/finance_with_arjun",
            image: "https://m.foolcdn.com/media/dubs/original_images/Intro_slide_-_digital_stock_chart_going_up_-_source_getty.jpg",
        },
        {
            title:"Startup Profit Prediction",
            content: "A web app built using python that can predict the profit of startups",
            link:"https://arjunprakash027-startup-profit-prediction-app-x3pqey.streamlitapp.com/",
            github: "https://github.com/arjunprakash027/startup_profit_prediction",
            image: "https://blog.cloudflare.com/content/images/2021/07/Startup-Accelerator.png",
        },
        {
            title:"Mobile price Prediction",
            content: "A web app built using python that can predict the prices of low end mobile phones",
            link:"https://arjunprakash027-mobile-priceprediction-decisiontree-app-6iwn16.streamlitapp.com/",
            github: "https://github.com/arjunprakash027/mobile_pricePrediction_decisionTree",
            image: "https://www.cnet.com/a/img/resize/eabd239642878785575800cb4b1a52ee4ccc1bc9/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg?auto=webp&fit=crop&height=630&width=1200",
        },

        {
            title:"Image Detector",
            content: "A simple website built using html css and Django backend that uses TensorFlow to detect the item present in the image with a average amount of accuracy",
            github: "https://github.com/arjunprakash027/image_detector",
            image: "https://i0.wp.com/esldocs.com/wp-content/uploads/2021/06/png-clipart-graphics-detective-illustration-detective-cartoon-hat-detective-thumbnail.png",
        },

        {
            title:"Movie review analysis",
            content: "A simple sentiment analysis based on movie review",
            github: "https://github.com/arjunprakash027/movie_review_sentiment_rnn",
            image: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/03/how-to-write-movie-review.jpg",
        },
        {
            title:"Weather App",
            content: "A simple Weather App that shows the current weather of every cities in the World.",
            github: "https://github.com/kesavaraj782/WeatherApp/tree/master",
            link: "https://lucky-salmiakki-09390f.netlify.app/",
            image: "/project/weather.webp",
        },
        {
            title:"Diabetes dataset analysis",
            content: "Simple analysis and application of ML models on Diabetes dataset",
            github: "https://github.com/arjunprakash027/logistic-regression-and-xgboost-on-diabetes-dataset",
            image: "data:image/jpeg;base64,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",
        },
        {
            title: "YT2MP4",
            content: "Convert any YouTube videos into MP4",
            github: "https://github.com/kesavaraj782/yt_2_mp4",
            image: "/yt.webp",
        },


        
        
    ]

</script>
