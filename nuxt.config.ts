// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [// ...
  '@pinia/nuxt', "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Monserrat': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  image: {
    quality: 80,
  }
})