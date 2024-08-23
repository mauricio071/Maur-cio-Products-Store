<template>
    <div>
        <h1 class="text-center text-3xl">Produtos</h1>
        <div class="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="produto in produtos" :key="produto.id">
                <Card :produto="produto" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: produtos } = useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped></style>