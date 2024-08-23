<template>
    <div>
        <h1>Sobre</h1>
        {{ data }}
    </div>
</template>

<script setup>
//Método Get
// const { data } = await useFetch(`/api/mauricio?nome=Maurício`)

// Método Post
// const { data } = await useFetch(`/api/mauricio?nome=Maurício`, {
//     method: "POST",
//     body: {
//         idade: 23
//     }
// })

//Método Get com rota dinamica
const { data } = await useFetch(`/api/currency/BRL`)

</script>

<style lang="scss" scoped></style>