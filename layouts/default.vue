<template>
  <v-layout>
    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <v-img
            src="/assets/images/logo.svg"
            :width="50"
            class="mx-auto"
          />
        </v-list-item>
      </v-list>
      <v-list-item
        link
        title="Home"
        to="/"
      ></v-list-item>
      <v-list-item
        link
        title="About Us"
        to="/about"
      ></v-list-item>
      <v-list-item
        link
        title="Product"
        to="/product"
      ></v-list-item>
      <v-list-item
        link
        title="No Layout"
        to="/no-layout"
      ></v-list-item>
      <v-list-item
        link
        title="New Layout"
        to="/new-layout"
      ></v-list-item>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <NuxtLoadingIndicator height="5" />

        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts"></script>
