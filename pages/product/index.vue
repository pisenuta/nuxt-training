<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Product List</h1>
    <div class="flex flex-wrap justify-center gap-8">
      <ProductCard
        class="ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        v-for="product in data.products"
        :key="product.id"
        :id="product.id"
        :thumbnail="product.thumbnail"
        :title="product.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('https://dummyjson.com/products')
</script>
