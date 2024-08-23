export default defineEventHandler(async (event) => {

    //Resgatar a iunformação do query
    const { nome } = getQuery(event)

    //Resgatar a iunformação do post
    const { idade } = await readBody(event)

    const { currencyKey } = useRuntimeConfig()

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    return data
})