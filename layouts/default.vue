<template>
    <div>
        <header class="shadow-md">
            <nav class="flex justify-between flex-wrap md:flex-nowrap container mx-auto p-8">
                <NuxtLink to="/" class="font-bold text-xl">Maurício Store</NuxtLink>
                <button @click="visivel = !visivel" class="md:hidden">
                    <IconsMenu />
                </button>
                <ul class="space-y-4 md:space-y-0 my-4 md:my-0 justify-between gap-4 w-full md:w-[unset] md:flex"
                    :class="{ 'block': visivel, 'hidden': !visivel }">
                    <li>
                        <NuxtLink to="/" class="text-xl" :class="{ 'text-[#12b488]': $route.path === '/' }">Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/sobre" class="text-xl" :class="{ 'text-[#12b488]': $route.path === '/sobre' }">
                            Sobre
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/produtos" class="text-xl btn">Produtos</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>


        <div class="container mx-auto p-8">
            <slot />
        </div>
    </div>
</template>

<script setup>
const visivel = ref(false)
</script>

<style lang="scss" scoped></style>