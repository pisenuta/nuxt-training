<template>
  <div
    class="flex flex-col justify-center items-center p-4"
    style="min-height: calc(100vh - 90px)"
  >
    <div class="text-center">
      <v-img
        src="/assets/images/shopping.png"
        width="450"
      />
      <h1 class="text-4xl font-bold text-gray-800 my-5">Welcome to Our Store</h1>
    </div>
    <CommonButton
      @click="navigateTo('/product')"
      label="Shop Now"
      class="text-white"
      style="background: repeating-linear-gradient(to right, #00dc82 0%, #34cdfe 50%, #0047e1 100%)"
    />
    <div class="mt-4 grid gap-2">
      <h4>State Management</h4>
      <p>Current Color : {{ color }}</p>
      <CommonButton
        @click="changeColor"
        label="Change Color"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const color = useColor()

const changeColor = () => {
  color.value = color.value === 'Pink' ? 'Red' : 'Pink'
}
</script>
