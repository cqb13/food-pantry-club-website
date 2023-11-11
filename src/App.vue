<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class=" bg-primary p-32">
      <section>
        <h1 class="text-background font-heading text-center text-5xl">SHS Food Pantry Club</h1>
      </section>
  </header>

  <RouterView />

  <footer class="px-32 py-5 flex justify-between">
    <a class="text-accent" target="_blank" href="https://github.com/cqb13/food-pantry-club-website/blob/main/LICENSE">Copyright © 2023 | MIT License</a>
    <a href="https://github.com/cqb13" target="_blank" class="text-accent">Created by: Maksim Straus</a>
  </footer>
</template>