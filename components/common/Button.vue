<template>
  <v-btn
    size="large"
    variant="outlined"
    >{{ label }}</v-btn
  >
</template>

<script setup lang="ts">
defineProps({
  label: String,
})
</script>
