<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  image: string
  alt: string
  caption: string
}>()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="relative rounded-2xl overflow-hidden">
    <div class="w-full h-auto rounded-2xl cursor-pointer relative group" @click="openModal">
      <img
        :src="image"
        :alt="alt"
        class="w-[400px] h-auto rounded-2xl transition-transform duration-300 transform group-hover:scale-105"
      />

      <div
        class="absolute inset-0 flex items-end p-2 text-primary bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      >
        <p class="bg-secondary rounded px-2">{{ caption }}</p>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-text bg-black bg-opacity-75 z-50"
    >
      <div class="absolute inset-0" @click="closeModal"></div>
      <button @click="closeModal">
        <svg
          fill="#986767"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
          class="absolute top-10 right-10 hover:bg-accent-300 transition-all duration-150 ease-in-out hover:rounded-3xl rounded-lg"
        >
          <path
            d="M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
	c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
	c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
	c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
	c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
	l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z"
          />
        </svg>
      </button>
      <div class="z-10 max-w-3xl p-4 rounded-lg overflow-y-auto">
        <img :src="image" :alt="alt" class="w-full h-auto rounded-lg" />
        <p v-if="caption" class="mt-5 p-5 bg-secondary rounded-2xl">{{ caption }}</p>
      </div>
    </div>
  </section>
</template>
