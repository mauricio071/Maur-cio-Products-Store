<template>
    <div class="card">
        <div class="sm:grid sm:grid-cols-2">
            <div class="sm:p-7">
                <img :src="produto.image" :alt="produto.description" class="max-h-[30rem] mx-auto mb-4">
            </div>
            <div class="sm:p-7">
                <h1 class="text-xl md:text-3xl">{{ produto.title }}</h1>
                <h2 class="text-lg md:text-xl mb-6">Preço - ${{ produto.price }}</h2>
                <h3 class="font-bold border-b-2 pb-2 mb-4">Descrição do produto:</h3>
                <p>{{ produto.description }}</p>
                <button class="btn flex items-center gap-x-4 mt-4">
                    <i class="material-icons">add_shopping_cart</i>
                    <span>Adicionar no carrinho</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: produto } = await useFetch(`https://fakestoreapi.com/products/${id}`)

if (!produto.value) {
    throw createError({ statusCode: 404, statusMessage: "Produto não encontrado!", fatal: true })
}
</script>

<style scoped></style>