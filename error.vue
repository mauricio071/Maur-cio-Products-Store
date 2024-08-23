<template>
    <div class="h-screen flex flex-col justify-center items-center gap-4 bg-gray-300">
        <div class="text-7xl font-bold">{{ error.statusCode }}</div>
        <div class="text-5xl">{{ error.message }}</div>
        <button @click="voltarParaHome" class="btn my-5">Voltar para página inicial</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const voltarParaHome = () => clearError({ redirect: "/" })
</script>

<style scoped></style>