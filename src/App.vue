<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-hero-pattern h-[80vh] bg-cover bg-center bg-no-repeat w-screen">
    <div class="w-screen h-full bg-hero-gradient flex items-center justify-center">
      <h1
        class="text-background font-heading text-center text-5xl mb-44 font-bold text-shadow-sm shadow-display px-5"
      >
        SHS Food Pantry Club
      </h1>
    </div>
  </header>

  <RouterView />

  <footer
    class="px-32 py-20 flex justify-between items-center bg-background-950 font-body max-md:px-14 max-xsl:px-5 max-xs:flex-col"
  >
    <a
      class="text-display-50"
      target="_blank"
      href="https://github.com/cqb13/food-pantry-club-website/blob/main/LICENSE"
      >Copyright © 2023 | MIT License</a
    >
    <a href="https://github.com/cqb13" target="_blank" class="text-display-50"
      >Created by: Maksim Straus</a
    >
  </footer>
</template>
