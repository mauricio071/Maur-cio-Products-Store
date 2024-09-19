<template>
    <div>
        <h1 class="text-center text-3xl">Products Store</h1>

        <div class="filters">
            <div v-for="filter in filters" :key="filter">
                <button @click="categoryFilter(filter)" :class="{ 'active': filter === currentFilter }"
                    class="capitalize">
                    {{ filter }}
                </button>
            </div>
        </div>
        <template v-if="status !== 'success' || loading">
            <img src="/public/img/loading.svg" alt="loading" class="m-auto">
        </template>
        <template v-else>
            <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div v-for="product in products" :key="product.id">
                    <Card :product="product" />
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
const loading = ref(false)

const { data: products, status } = await useFetch('https://fakestoreapi.com/products')

const filters = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"]

const currentFilter = ref('all')

const categoryFilter = async (filter) => {
    loading.value = true
    const filterType = filter === "all" ? '' : `/category/${filter}`
    const { data } = await useFetch(`https://fakestoreapi.com/products${filterType}`)
    products.value = data.value
    currentFilter.value = filter
    loading.value = false
}
</script>

<style scoped>
.filters {
    @apply flex flex-wrap justify-center gap-4 mb-12 lg:justify-end;
}

.filters button {
    @apply border rounded-xl px-4 py-2 duration-300 sm:px-6;
}

.filters button:hover {
    @apply bg-[#12b488] border-[#12b488] text-white;
}

.active {
    @apply bg-[#12b488] border-[#12b488] text-white;
}
</style>