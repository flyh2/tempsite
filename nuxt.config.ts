export default defineNuxtConfig({
  compatibilityDate: '2025-05-21',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Roboto': true,
      'Roboto Condensed': true,
      'Inter': true
    }
  }
})