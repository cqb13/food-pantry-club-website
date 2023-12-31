<script setup lang="ts">
import { ref } from 'vue'
import FaqCard from '@/components/FaqCard.vue'
import ImageDisplay from '@/components/ImageDisplay.vue'
import ContactForm from '@/components/ContactForm.vue'
import NotificationPopup from '@/components/NotificationPopup.vue'

const opened = ref(false)
const notificationTitle = ref('')
const notificationMessage = ref('')
const notificationType = ref<'success' | 'error'>('success')

const handleFormError = (errorMessage: string) => {
  openNotification('Error', errorMessage, 'error')
}

const handleFormSuccess = (successMessage: string) => {
  openNotification('Success', successMessage, 'success')
}

const openNotification = (title: string, message: string, type: 'success' | 'error') => {
  notificationTitle.value = title
  notificationMessage.value = message
  opened.value = true
  notificationType.value = type

  setTimeout(() => {
    opened.value = false
  }, 5000)
}
</script>

<template>
  <main class="px-64 py-10 max-xl:px-52 max-xml:px-32 max-md:px-14 max-xs:px-5">
    <section class="flex flex-col gap-5">
      <div class="flex gap-5 items-center justify-center max-lg:flex-col max-lg:gap-2">
        <img
          src="/src/assets/logo.png"
          alt="logo"
          class="rounded-3xl rounded-tl-9xl w-96 h-96 max-w-full mx-auto max-lg:w-76 max-lg:h-76 max-xs:w-56 max-xs:h-56 max-md:w-64 max-md:h-64"
        />
        <article
          class="bg-secondary-300 p-5 rounded-3xl rounded-tr-9xl flex-1 max-lg:rounded-tl-5xl max-lg:rounded-tr-5xl"
        >
          <h2 class="text-2xl font-heading font-semibold">What is the SHS Food Pantry Club?</h2>
          <hr class="w-3/5 bg-black border-0 rounded h-0.5" />
          <p class="text-xl font-body font-medium">
            We are a passionate group of volunteers, focused on tackling food insecurity in the
            Greater Boston Area. Through food drives and hands-on volunteering, we aim to make a
            positive impact on local pantries and the lives of those in need. We're looking for
            dedicated volunteers who are self-motivated and ready to work collaboratively with
            supervisors. If you're committed to making a difference and want to be part of our
            mission, we'd love to have you on board.
          </p>
        </article>
      </div>
      <div class="flex gap-5">
        <article
          class="bg-background-950 bg-opacity-5 p-5 flex-1 rounded-3xl rounded-bl-9xl max-lg:rounded-br-5xl max-lg:rounded-bl-5xl"
        >
          <h2 class="text-2xl font-heading font-semibold">How to get Involved?</h2>
          <hr class="w-3/5 bg-black border-0 rounded h-0.5" />
          <div class="font-body font-medium text-xl">
            <p>Attend our Monday meetings in Room 2304.</p>
            <ul class="list-disc pl-5">
              <li>2:45 - 3:15 PM</li>
            </ul>
          </div>
          <div class="font-body font-medium text-xl">
            <p>Join our Schoology group using the provided code.</p>
            <ul class="list-disc pl-5">
              <li>Code: 2DN8-6T6X-NCJSB</li>
            </ul>
          </div>
        </article>
        <img
          src="/src/assets/group-pic.jpeg"
          alt="group pic"
          width="400px"
          height="400px"
          class="rounded-3xl rounded-br-9xl max-lg:hidden"
        />
      </div>
    </section>

    <section class="my-10">
      <h2 class="text-4xl font-heading font-bold mb-2 text-center">Highlights</h2>
      <div class="flex gap-5">
        <ImageDisplay
          image="https://foodpantry.shsdevs.com/images/group-pic.jpeg"
          alt="group"
          caption="Food drive planning"
        />
      </div>
    </section>

    <section class="my-10 flex gap-10 max-mdl:flex-col max-mdl:gap-2">
      <div class="w-6/12 max-mdl:w-full">
        <h2 class="text-4xl font-heading font-bold mb-2">FAQ</h2>
        <p class="font-body font-semibold text-lg">Answers to some questions you might have.</p>
      </div>
      <div class="flex flex-col gap-5 w-full">
        <FaqCard
          question="Is the club open to all students?"
          answer="Yes, our club is open to all students at the school. We welcome diversity and encourage students from all grades to join us in making a positive impact in our community."
        />
        <FaqCard
          question="What volunteer opportunities are available?"
          answer="We offer various volunteering opportunities, including food drives, food pantry volunteering, and fundraising. We also provide leadership opportunities for those interested in taking on a more active role in the club."
        />
        <FaqCard
          question="Will I earn volunteer hours?"
          answer="Volunteer hours can be earned by organizing and participating in events."
        />
        <FaqCard
          question="What benefits do I gain from joining the club?"
          answer="Joining the club provides you with the opportunity to make a difference in the community, develop leadership skills, and connect with like-minded peers. Additionally, participating in club activities can be a fulfilling and enriching experience."
        />
        <FaqCard
          question="Can I join even if I have no previous volunteer experience?"
          answer="Absolutely! Our club is inclusive, and no prior volunteer experience is necessary. We value the enthusiasm and dedication of our members, and we provide guidance and support for those new to volunteering."
        />
        <FaqCard
          question="How can I stay updated on club activities and announcements?"
          answer="To stay informed about club activities, events, and announcements, we recommend joining our Schoology group. We also encourage you to attend our Monday meetings for firsthand information and updates."
        />
      </div>
    </section>

    <section class="my-10">
      <h2 class="text-4xl font-heading font-bold mb-2">Contact Us</h2>
      <p class="font-body font-semibold text-lg">
        Email:
        <a href="mailto:eli2025@sharonschools.net" class="hover:underline"
          >eli2025@sharonschools.net</a
        >
      </p>
      <ContactForm @error="handleFormError" @success="handleFormSuccess" />
    </section>
    <NotificationPopup
      :opened="opened"
      :title="notificationTitle"
      :message="notificationMessage"
      :notificationType="notificationType"
      @close="opened = false"
    />
  </main>
</template>
