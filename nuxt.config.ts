// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    app: {
        head: {
            title: "Maurício Store",
            meta: [
                { name: 'description', content: "Só produto de qualidade!!" }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        },
    },

    runtimeConfig: {
        currencyKey: process.env.NUXT_CURRENCY_API_KEY,
        public: {
            baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:8000",
        }
    }
})