<template>
  <div class="home">

    <div id="spinningText" class="flex h-screen">
        <a href="/">
            <h1>Wi Ma X</h1>
        </a>
    </div>

  <div class="slogan">
    <h1><b><i>“One whose ideal is mortal dies when his ideal is achieved.But one whose ideal is immortal must become immortal himself to attain it”</i></b></h1>
  </div>
    
<!-- animate-spin -->
    <!----------------------------------- Home -------------------------------------------->
    <br>
    <br>
    <br>
    <br>
    <section id="about" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4 ">
            <h1 class="text-center text-blue-300 font-semibold text-3xl py-4 hover:text-orange-500 cursor-pointer">WiMaX</h1>
            <p class="c">"This is WiMaX, a club initiated by the STUDENTS of artificial intelligence and data science department of Easwari Engineering college. WiMaX is not just a club but also a COMMUNITY for our students to sharpen their skills in their interested domain and to explore new domains. Our ideology is focused on COLLECTIVE GROWTH. We help among ourselves by GAINING KNOWLEDGE from others and TEACHING their KNOWLEDGE to others. We try to bring our IDEAS to real life to make an IMPACT in our society and the world and an INSPIRATION to our younger generation."</p>
        </div>

        <div class="w-1/2 px-8 py-4">
            <img src="\logo_bg.png" alt="home">
        </div>
    </section>
    
        

    <!----------------------------------- About -------------------------------------------->

    <!-- <section id="about" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <h1 class="text-center text-blue-300 font-semibold text-3xl py-4 hover:text-orange-500 cursor-pointer">About Us</h1>
            <p class="text-center text-sm text-blue-300">This is WiMaX, a club initiated by the STUDENTS of artificial intelligence and data science department of Easwari Engineering college. WiMaX is not just a club but also a COMMUNITY for our students to sharpen their skills in their interested domain and to explore new domains. Our ideology is focused on COLLECTIVE GROWTH. We help among ourselves by GAINING KNOWLEDGE from others and TEACHING their KNOWLEDGE to others. We try to bring our IDEAS to real life to make an IMPACT in our society and the world and an INSPIRATION to our younger generation.</p>
        </div>
        <div class="w-1/2 px-8 py-4">
            <img src="data\images\naveen_funny.jpeg" alt="funny_naveen">
        </div> 
    </section> -->

    <div class="container">
        <h1 class="heading" data-target-resolver></h1>
    </div>
    <!----------------------------------- Projects -------------------------------------------->

    <section id="projects" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <section class="bg-white dark:bg-gray-900">
            <!-- projects here -->
</section>
        
    </section>
  </div>
</template>

<style scoped>    
    
    .c {
  display: flex;
  justify-content: center;
  color:#eee
    }
    .slogan{
        text-align: center;
        color: #eee;
        font-size:25px;;
    }


    #home {
        height: 90vh;
        animation: homepage 2s ease-in-out;
    }
    @keyframes homepage {
        0% {
            opacity: 0;
            transform: translateX(-80px);
        }
        60% {
            opacity: 0.1;
            transform: translateX(0px);
        }
        100% {
            opacity: 1;
        }

    }
    #about {
        height: 90vh;
        animation: aboutpage .4s ease-in-out;
    }
    @keyframes aboutpage {
        from {
            opacity: .2;
            transform: translateX(-40px);
            }
    }
    
    #spinningText {
        animation: spinText 5s;
    }

    @keyframes spinText {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    a {
        color:  rgb(249, 115, 22);
        text-shadow: 0 20px 25px rgb(42, 51, 61), 0 40px 60px rgb(42, 51, 61);
        font-size: 80px;
        font-weight: bold;
        text-decoration: none;
        letter-spacing: -3px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    a:before,
    a:after {
        content: '';
        padding: .9em .4em;
        position: absolute;
        left: 50%;
        width: 100%;
        top: 50%;
        display: block;
        border: 15px solid rgb(147 197 253);
        transform: translateX(-50%) translateY(-50%) rotate(0deg);
        animation: 10s infinite alternate ease-in-out tipsy;
    }

    @keyframes tipsy {
        0% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
        }
        100% {
            transform: translateX(-50%) translateY(-50%) rotate(360deg);
        }
    }

    a:before {
        border-color: rgb(147 197 253) rgb(147 197 253) rgb(42, 51, 61) rgb(42, 51, 61);
        z-index: -1;
    }

    a:after {
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(147 197 253) rgb(147 197 253);
        box-shadow: 25px 25px 25px rgb(33, 36, 39);
    }

    /* About */
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 5rem;
    }

    .heading {
        color: #eee;
        font-size: 5rem;
        font-weight: 300;
        text-transform: uppercase;
    }
</style>

<script setup>
    definePageMeta({
        title: 'veedu',
    })

const contact = ref(null)
async function contactus(event){
    event.preventDefault();
    const formData = new FormData(contact.value);
            const allEntries = Array.from(formData.entries()).reduce((acc, val) => {
            acc[val[0]] = val[1];
            return acc;
            }, {}
            );
            console.log(allEntries)
            const result = await fetch("/api/contact",{method: "POST",body: JSON.stringify(allEntries)});
    }


</script>
<!-- 
<script>

    const resolver = {
        resolve: function resolve(options, callback) {
    // The string to resolve
            const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
            const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
            
            function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            
            function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)];
            };
            
            function doRandomiserEffect(options, callback) {
            const characters = options.characters;
            const timeout = options.timeout;
            const element = options.element;
            const partialString = options.partialString;

            let iterations = options.iterations;

            setTimeout(() => {
                if (iterations >= 0) {
                const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

                // Ensures partialString without the random character as the final state.
                if (iterations === 0) {
                    element.textContent = partialString;
                } else {
                    // Replaces the last character of partialString with a random character
                    element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
                }

                doRandomiserEffect(nextOptions, callback)
                } else if (typeof callback === "function") {
                callback(); 
                }
            }, options.timeout);
            };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}

/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
    const strings = [
        'This is WiMaX',
        'A club initiated by the STUDENTS of artificial intelligence and data science department of Easwari Engineering college.', 
        'WiMaX is not just a club but also a COMMUNITY for our students to sharpen their skills in their interested domain and to explore new domains.',
        'Our ideology is focused on COLLECTIVE GROWTH.',
        'We help among ourselves by GAINING KNOWLEDGE from others and TEACHING their KNOWLEDGE to others.',
        'We try to bring our IDEAS to real life to make an IMPACT in our society and the world and an INSPIRATION to our younger generation.',
    ];

    let counter = 0;

    const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
    }

// Callback function when resolve completes
    function callback() {
    setTimeout(() => {
        counter ++;
        
        if (counter >= strings.length) {
        counter = 0;
        }
        
        let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
        resolver.resolve(nextOptions, callback);
    }, 1000);
    }

    resolver.resolve(options, callback);

</script> -->