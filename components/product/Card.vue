<template>
  <div>
    <NuxtLink :to="`/product/${id}`">
      <v-card class="mx-auto w-72 items-center">
        <div class="flex justify-center">
          <v-img
            aspect-ratio="1/1"
            cover
            :src="thumbnail"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </div>
        <v-card-title class="text-center">
          <p class="truncate">{{ title }}</p>
        </v-card-title>
      </v-card>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  thumbnail: string
  title: string
}>()
</script>
