import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(AOS.init())
  })