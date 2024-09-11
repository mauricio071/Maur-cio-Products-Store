<template>
    <div class="h-screen flex flex-col justify-center items-center gap-4 bg-gray-300">
        <div class="text-7xl font-bold">{{ error.statusCode }}</div>
        <div class="text-5xl">{{ error.message }}</div>
        <button @click="goHome" class="btn my-5">Return to homepage</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const goHome = () => clearError({ redirect: "/" })
</script>

<style scoped></style>