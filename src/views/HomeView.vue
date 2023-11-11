<script setup lang="ts">
import FaqCard from '@/components/FaqCard.vue'
import ImageDisplay from '@/components/ImageDisplay.vue'
//https://via.placeholder.com/350
</script>

<template>
  <main class="px-64 py-10">
    <section class="flex flex-col gap-5">
      <div class="flex gap-5">
        <img
          src="/src/assets/logo.png"
          alt="logo"
          width="350px"
          height="350px"
          class="rounded-3xl rounded-tl-9xl"
        />
        <article class="bg-secondary p-5 rounded-3xl rounded-tr-9xl">
          <h2 class="text-2xl">What is the SHS Food Pantry Club?</h2>
          <hr class="w-3/5" />
          <p class="text-xl">
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
        <article class="bg-background-950 bg-opacity-5 p-5 flex-1 rounded-3xl rounded-bl-9xl">
          <h2 class="text-2xl">How to get Involved?</h2>
          <hr class="w-3/5" />
          <div>
            <p>Attend our Monday meetings in Room 2304.</p>
            <ul class="list-disc pl-5">
              <li>2:45 - 3:15 PM</li>
            </ul>
          </div>
          <div>
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
          class="rounded-3xl rounded-br-9xl"
        />
      </div>
    </section>

    <section class="my-10">
      <h2 class="text-3xl font-bold mb-5 text-center">Highlights</h2>
      <div class="flex gap-5">
        <ImageDisplay
          image="https://foodpantry.shsdevs.com/images/group-pic.jpeg"
          alt="group"
          caption="Food drive planning"
        />
      </div>
    </section>

    <section class="my-10 flex">
      <div class="w-full">
        <h2 class="text-3xl font-bold mb-5">FAQ</h2>
        <p>Answers to some questions you might have.</p>
      </div>
      <div class="flex flex-col gap-5 w-full">
        <FaqCard
          question="Is the club open to all students?"
          answer="Yes, our club is open to all students at the school. We welcome diversity and encourage students from all grades to join us in making a positive impact in our community."
        />
        <FaqCard
          question="What volunteer opportunities are available?"
          answer="We offer various volunteering opportunities, including..."
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
      <h2 class="text-3xl font-bold mb-5">Contact Information</h2>
      <p>Email: info@example.com</p>
      <p>Phone: (123) 456-7890</p>
    </section>

    <section class="my-10">
      <h2 class="text-3xl font-bold mb-5">Resources</h2>
      <p>Explore resources related to food insecurity, volunteering, and community service:</p>
      <ul class="list-disc pl-5">
        <li><a href="#">Resource 1</a></li>
        <li><a href="#">Resource 2</a></li>
        <li><a href="#">Resource 3</a></li>
      </ul>
    </section>
  </main>
</template>
