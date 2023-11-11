<script setup lang="ts">
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const message = ref('')

const errorMessage = ref('')
const successMessage = ref('')

const handleSubmit = () => {
  errorMessage.value = ''

  if (!firstName.value || !lastName.value || !email.value || !message.value) {
    showErrorMessage('Please fill out all fields.')
    return
  }

  console.log('Form submitted:', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value
  })

  showSuccessMessage('Form submitted successfully!')

  firstName.value = ''
  lastName.value = ''
  email.value = ''
  message.value = ''
}

const showErrorMessage = (message: string) => {
  errorMessage.value = message
  setTimeout(() => {
    errorMessage.value = ''
  }, 5000)
}

const showSuccessMessage = (message: string) => {
  successMessage.value = message
  setTimeout(() => {
    successMessage.value = ''
  }, 5000)
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
    <p class="text-red-500 text-center">{{ errorMessage }}</p>
    <p class="text-green-500 text-center">{{ successMessage }}</p>
  </section>
</template>
