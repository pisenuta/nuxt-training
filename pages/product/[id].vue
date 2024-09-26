<template>
  <div class="container mx-auto p-4">
    <div>
      <div>
        <v-img
          :src="data.thumbnail"
          :width="300"
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
      <div class="p-6">
        <h4 class="mb-2">{{ data.title }}</h4>
        <p class="text-lg text-gray-600 mb-4">${{ data.price.toFixed(2) || 0 }}</p>
        <p class="text-gray-600 mb-4">{{ data.description }}</p>
        <div class="flex items-center mb-4">
          <v-rating
            v-model="data.rating"
            readonly
            class="mr-2"
            color="amber"
          ></v-rating>
          <span class="text-gray-600">{{ data.rating.toFixed(1) }} / 5</span>
        </div>
      </div>
    </div>
    <v-divider />
    <div class="mt-8 p-6">
      <h3 class="mb-4">Reviews</h3>
      <div
        v-for="review in data.reviews"
        :key="review.reviewerEmail"
        class="mb-6"
      >
        <div class="mb-2">
          <div class="flex flex-wrap gap-2 items-center">
            <v-icon size="large">mdi-account-circle</v-icon>
            <span class="font-semibold">{{ review.reviewerName }}</span>
          </div>
          <v-rating
            v-model="review.rating"
            readonly
            color="amber"
          ></v-rating>
        </div>
        <p class="text-gray-700 mb-2">{{ review.comment }}</p>
        <p class="text-sm text-gray-500">{{ formatDate(review.date) }}</p>
        <v-divider class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
interface ReviewDetail {
  reviewerEmail: string
  reviewerName: string
  rating: number
  comment: string
  date: string
}

interface ProductDetail {
  id: number
  title: string
  thumbnail: string
  price: number
  reviews: ReviewDetail[]
  description: string
  rating: number
}

const { data } = await useFetch<ProductDetail>('https://dummyjson.com/products/' + id)
</script>
