<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Spotify Clone',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'spotify clone', content: 'Welcome to my spotify clone, you can check my code' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'assets/img/favicon.ico' }
  ]
})

</script>

<template>
  <div class="flex flex-col h-fit lg:h-screen bg-black">
    <div class="flex flex-row h-full">
      <sidebar/>
      <main class="flex flex-col w-full h-full bg-gradient-to-l from-neutral-800 to-black">
        <profile/>
        <playlists/>
        <shows/>
      </main>
    </div>
    <footer class="sticky bottom-0">
      <player/>
    </footer>
  </div>
</template>
