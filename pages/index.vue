<template>
  <div class="home flex flex-col space-y-16 px-2">
    <div id="spinningText" class="flex h-[70vh]">
      <a class="a" href="/">
        <h1>Wi Ma X</h1>
      </a>
    </div>

    <div class="text-2xl text-white px-4">
      <div
        class="
          font-semibold
          italic
          break-words
          lg:text-center lg:max-w-2xl lg:mx-auto
        "
      >
        “One whose ideal is mortal dies when his ideal is achieved. But one
        whose ideal is immortal must become immortal himself to attain it”
      </div>
    </div>

    <!-- animate-spin -->
    <!----------------------------------- Home -------------------------------------------->

    <section
      id="about"
      class="
        grid grid-cols-1
        lg:grid-cols-2
        gap-8
        justify-between
        items-center
        bg-gray-900
        px-6
        py-3
      "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <div class="px-4 lg:px-8 py-4 mx-auto">
        <h1
          class="
            text-center text-blue-300
            font-semibold
            text-3xl
            py-4
            hover:text-orange-500
            cursor-pointer
          "
        >
          WiMaX
        </h1>
        <p class="c text-justify">
          "This is WiMaX, a club initiated by the STUDENTS of artificial
          intelligence and data science department of Easwari Engineering
          college. WiMaX is not just a club but also a COMMUNITY for our
          students to sharpen their skills in their interested domain and to
          explore new domains. Our ideology is focused on COLLECTIVE GROWTH. We
          help among ourselves by GAINING KNOWLEDGE from others and TEACHING
          their KNOWLEDGE to others. We try to bring our IDEAS to real life to
          make an IMPACT in our society and the world and an INSPIRATION to our
          younger generation."
        </p>
      </div>

      <div class="px-8 py-4 flex flex-col items-center mx-auto">
        <img src="/logo_bg.png" alt="home" />
      </div>
    </section>

    <section class="text-white bg-gray-900">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto text-center">
          <!--<h2 class="text-3xl font-bold sm:text-4xl mb-4">Choose your Domain</h2>
                <h1 class="text-3xl font-bold sm:text-3xl mb-4"> Kickstart your career</h1>-->
          <h1 class="lg:text-4xl font-bold text-2xl mb-12">
            Make your IMPACT in the Right Field
          </h1>
          <p class="mt-4 text-gray-300"></p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <CardDomain v-for="domain in domains" :key="domain.title" :content = "domain" />
          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <!--<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-pink-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    -->
            <img
              src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
              alt=""
              width="50px"
            />

            <h3 class="mt-4 text-xl font-bold text-white">Web Development</h3>

            <p class="mt-3 text-sm text-gray-300">
              The art of building, creating, and maintaining websites. Divided
              into two categories Front End and Back end. Involves aspects such
              as
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="/devops.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">DevOps</h3>

            <p class="mt-3 text-sm text-gray-300">
              The combination of cultural philosophies, practices, and tools
              that increases an organization’s ability to deliver applications
              and services at high velocity. .
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img
              src="https://static.invozone.com/uploads/2021/01/Custom-On-Demand-App-Development-Solutions.svg"
              alt=""
              width="50px"
            />

            <h3 class="mt-4 text-xl font-bold text-white">App Development</h3>

            <p class="mt-3 text-sm text-gray-300">
              Covers both Mobile app and system app development. Application
              software addresses the end user and provides features to perform
              specific tasks and activities. .
            </p>
          </a>
          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img
              src="https://www.technotronix.us/images/turnkey-electronics-manufacturing-services.svg"
              alt=""
              width="50px"
            />

            <h3 class="mt-4 text-xl font-bold text-white">
              Artificial Intelligence
            </h3>

            <p class="mt-3 text-sm text-gray-300">
              The concept of developing machines to mimic human nature and
              behavior. Make machines to think like us, to take decisions like
              us, to understand and express the human emotions like us.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="ds.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">Data Science</h3>

            <p class="mt-3 text-sm text-gray-300">
              The art of extracting knowledge and insights from a set of data
              respective to its type. Plays a major role in the ongoing
              information era and in Artificial Intelligence.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="/ml.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">Machine Learning</h3>

            <p class="mt-3 text-sm text-gray-300">
              the use and development of computer systems that are able to learn
              and adapt without following explicit instructions, by using
              algorithms and statistical models to analyse and draw inferences
              from patterns in data.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img
              src="https://synapsecom.gr/images/cloud-01.svg"
              alt=""
              width="50px"
            />
            <h3 class="mt-4 text-xl font-bold text-white">Cloud Computing</h3>

            <p class="mt-3 text-sm text-gray-300">
              Cloud computing is the delivery of computing services—including
              servers, storage, databases, networking, software, analytics, and
              intelligence—over the Internet to offer faster innovation.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="doc.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">Documentation</h3>

            <p class="mt-3 text-sm text-gray-300">
              Digital marketing is the component of marketing that uses the
              Internet and online based digital technologies such as desktop
              computers, mobile phones and other digital media and platforms to
              promote products and services. Wikipedia.
            </p>
          </a>
          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img
              src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png"
              alt=""
              width="50px"
            />

            <h3 class="mt-4 text-xl font-bold text-white">Web3</h3>

            <p class="mt-3 text-sm text-gray-300">
              Web3 is an idea for a new iteration of the World Wide Web which
              incorporates concepts such as decentralization, blockchain
              technologies, and token-based economics.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="blockchain.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">BlockChain</h3>

            <p class="mt-3 text-sm text-gray-300">
              Blockchain = Decentralization. The goal of blockchain is to allow
              digital information to be recorded and distributed, but not
              edited. Provides enhanced security, transparency, traceability,
              automation and efficiency.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="iot.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">
              Internet of Things
            </h3>

            <p class="mt-3 text-sm text-gray-300">
              The Internet of things describes physical objects with sensors,
              processing ability, software, and other technologies that connect
              and exchange data with other devices and systems over the Internet
              or other communications networks .
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5146/5146030.png"
              alt=""
              width="50px"
            />

            <h3 class="mt-4 text-xl font-bold text-white">Cybersecurity</h3>

            <p class="mt-3 text-sm text-gray-300">
              Cybersecurity is the practice of protecting systems, networks, and
              programs from digital attacks. These cyberattacks are usually
              aimed at accessing, changing, or destroying sensitive information;
              extorting money from users; or interrupting normal business
              processes.
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="/3dmod.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">3D Modelling</h3>

            <p class="mt-3 text-sm text-gray-300">
              3D modeling is the art of developing a mathematical
              coordinate-based representation of any surface of an object in
              three dimensions via specialized software by manipulating edges,
              vertices, and polygons in a simulated 3D space .
            </p>
          </a>

          <a
            class="
              block
              p-8
              transition
              border border-gray-800
              shadow-xl
              rounded-xl
              hover:shadow-pink-500/10 hover:border-pink-500/10
            "
            href="/services/digital-campaigns"
          >
            <img src="/test.svg" alt="" width="50px" />

            <h3 class="mt-4 text-xl font-bold text-white">Testing</h3>

            <p class="mt-3 text-sm text-gray-300">
              The process of evaluating and verifying that a software product or
              application does what it is supposed to do. The benefits of
              testing include preventing bugs, reducing development costs and
              improving performance. .
            </p>
          </a>
        </div>

        <div class="mt-12 text-center">
          <a
            class="
              inline-flex
              items-center
              px-8
              py-3
              mt-8
              text-white
              bg-pink-600
              border border-pink-600
              rounded
              hover:bg-transparent
              active:text-pink-500
              focus:outline-none focus:ring
            "
            href="/joinus"
          >
            <span class="text-sm font-medium"> Get Started </span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
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

    <section
      id="projects"
      class="
        container-fluid
        flex
        justify-between
        items-center
        bg-gray-900
        px-6
        py-3
      "
    >
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
  color: #eee;
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
  animation: aboutpage 0.4s ease-in-out;
}
@keyframes aboutpage {
  from {
    opacity: 0.2;
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

.a {
  color: rgb(249, 115, 22);
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

.a:before,
.a:after {
  content: "";
  padding: 0.9em 0.4em;
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

.a:before {
  border-color: rgb(147 197 253) rgb(147 197 253) rgb(42, 51, 61)
    rgb(42, 51, 61);
  z-index: -1;
}

.a:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(147 197 253)
    rgb(147 197 253);
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
  title: "veedu",
});

const domains = [
  {
    title: `Game Development`,
    image: `/game_dev.svg`,
    link: `/services/digital-campaign`,
    content: `The art of creating games and describes the design, development
              and release of a game.`,
    list: [`concept generation`, `Design`, `Build`, `Test`, `release`],
  },
];

const contact = ref(null);
async function contactus(event) {
  event.preventDefault();
  const formData = new FormData(contact.value);
  const allEntries = Array.from(formData.entries()).reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
  console.log(allEntries);
  const result = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(allEntries),
  });
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