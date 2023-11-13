<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

defineProps<{
  message: string
  notificationType: 'success' | 'error'
  title: string
  opened: boolean
}>()

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <section
    v-if="opened"
    class="fixed bottom-2 left-2 p-4 w-80 bg-green-500 rounded-md"
    :class="{ 'bg-red-500': notificationType == 'error' }"
  >
    <div class="flex items-center justify-between">
      <h1 class="text-white">{{ title }}</h1>
      <button class="text-white" @click="handleClose">
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.147a.5.5 0 00-.708.708L9.293 10l-4.147 4.146a.5.5 0 10.708.708L10 10.707l4.146 4.147a.5.5 0 00.708-.708L10.707 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <p class="text-white">{{ message }}</p>
  </section>
</template>
