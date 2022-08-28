<template>
  <section id="header" class="container-fluid flex justify-between items-center shadow-2xl w-full bg-gray-900 px-8 py-4 sticky top-0 z-10">
        <div>
            <!-- <img src="images\logo.png" alt="logowimax" class="img-responsive w-12"> -->
            <h1 class="text-3xl text-blue-300 font-semibold hover:cursor-pointer hover:text-orange-500">Wimax</h1>
        </div>
        <div>
            <nav>
                <ul>
                    <a href="/" class="font-semibold text-blue-300 px-4 py-2">Home</a>
                    <a href="/#about" class="font-semibold text-blue-300 px-4 py-2 ">About Us</a>
                    <a href="/#projects" class="font-semibold text-blue-300 px-4 py-2 ">Projects</a>
                    <a href="/contactus" class="font-semibold text-blue-300 px-4 py-2 ">Contact Us</a>
                    <a href="/joinus" class="font-semibold text-blue-300 px-4 py-2">Join Us</a>

                </ul>
            </nav>
        </div>        
    </section>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    animation: headeranim 2s;
  }

  @keyframes headeranim {
    from {
        transform: translateY(-50px);
    }
  }

  a {
    border: 2px solid transparent;
    transition: .5s ease-in;
  }
  a:hover,
  a:focus {
    box-shadow: inset -140px 0px 0px 0px rgba(249, 115, 22, .9),
                inset 140px 0px 0px 0px rgba(22, 50, 80, .7);
    color: rgb(17 24 39);
  }
</style>
