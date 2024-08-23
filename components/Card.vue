<template>
    <div class="card text-center">
        <img :src="produto.image" alt="Imagem do produto" class="max-h-60 max-w-[70%] mx-auto flex-grow">
        <p class="font-bold text-gray-500 m-4 truncate">{{ produto.description }}</p>
        <nuxt-link :to="`/produtos/${produto.id}`">
            <p class="btn">Ver detalhes</p>
        </nuxt-link>
    </div>
</template>

<script setup>
const { produto } = defineProps({
    produto: Object
})
</script>

<style scoped></style>