<template>
  <div
    class="flex flex-col justify-center items-center p-4"
    style="min-height: calc(100vh - 90px)"
  >
    <div class="text-center">
      <v-img
        src="/assets/images/team.png"
        width="800"
      />
      <h3>About Us</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      console.log('About Page : Custom inline middleware')
    },
    'named',
  ],
})
</script>
