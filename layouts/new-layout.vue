<template>
  <v-layout>
    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <v-img
            src="../assets/images/logo.svg"
            :width="50"
            class="mx-auto"
          />
        </v-list-item>
        <p>This is not default layout</p>
      </v-list>
      <v-list-item
        link
        title="New Layout"
        to="/new-layout"
      ></v-list-item>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts"></script>
