import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Wimax",
      titleTemplate: "%s | Wimax",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "A club created by students of AI for students of AI",
        },
        {
          name: "theme-color",
          hid: "theme-color",
          content: "#EEE",
        },    ],
      link: [
        { href: "/logo_bg.png", rel: "shortcut icon" },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-schema-org",
  ],
  tailwindcss: {
    config: {
      darkMode: "class",
      content: [
        "./pages/**/*.vue",
        "./components/**/*.vue",
      ],
      theme: {
        extend: {
          colors: {
            chaos: {
              primary: `#1d0016`,
              secondary: `#2e0324`,
              tertiary: `#3b2836`,
              border: `#33252f`,
              foreground: `#fccef1`,
            },
          },
          spacing: {
            "102": "32rem",
            "108": "36rem",
          },
          maxWidth: {
            "8xl": "90rem",
            "9xl": "100rem",
            "10xl": "110rem",
          },
          fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
          },
          translate: {
            110: "30rem",
            120: "40rem",
            130: "50rem",
            140: "60rem",
            200: "100rem",
          },
          margin: {
            110: "30rem",
            120: "40rem",
            130: "50rem",
            140: "60rem",
            "-110": "-30rem",
            "-120": "-40rem",
          },
        },
        zIndex: {
          0: "0",
          10: "10",
          20: "20",
          25: "25",
          30: "30",
          40: "40",
          45: "45",
          50: "50",
          75: "75",
          100: "100",
          auto: "auto",
        },
      },
      plugins: [],
    },
  },
});
