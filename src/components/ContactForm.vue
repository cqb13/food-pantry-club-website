<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['error', 'success'])

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  if (!firstName.value || !lastName.value || !email.value || !message.value) {
    emit('error', 'Please fill out all fields.')
    return
  }

  console.log('Form submitted:', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value
  })

  emit('success', 'Form submitted successfully!')

  firstName.value = ''
  lastName.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="my-5">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="flex gap-4 max-md:flex-col">
        <input
          v-model="firstName"
          type="text"
          placeholder="First Name"
          class="border p-2 rounded-md flex-1 bg-background-950 bg-opacity-5 font-body font-semibold text-lg"
        />
        <input
          v-model="lastName"
          type="text"
          placeholder="Last Name"
          class="border p-2 rounded-md flex-1 bg-background-950 bg-opacity-5 font-body font-semibold text-lg"
        />
      </div>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border p-2 rounded-md bg-background-950 bg-opacity-5 font-body font-semibold text-lg"
      />
      <textarea
        v-model="message"
        placeholder="Message"
        cols="30"
        rows="10"
        class="border p-2 rounded-md bg-background-950 bg-opacity-5 font-body font-semibold text-lg"
      ></textarea>
      <button
        type="submit"
        class="bg-primary text-background py-2 px-4 rounded-md hover:bg-secondary-700 transition-all duration-300 ease-in-out font-body font-semibold text-lg"
      >
        Submit
      </button>
    </form>
  </section>
</template>
