// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
      plugins: ['../../nitro/plugins/nest']
    },
    srcDir: './client'
  })
