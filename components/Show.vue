<script setup>
const props = defineProps(["playlist"])
const image = props.playlist.img
const name = props.playlist.name
const author = props.playlist.author
</script>

<template>
<a class="flex flex-col ml-5 mr-2 justify-content-center rounded-lg bg-neutral-900 hover:bg-neutral-800 mt-3 lg:mt-0" href="#">
  <span class=" w-full p-2">
  <img class="rounded-lg h-44" :src="image" alt="Show image">
  </span>
    <span class="pl-2 text-white text-xl">{{name}}</span>
  <span class="pl-2 text-base text-gray-500 mb-10 mt-2">{{author}}</span>
</a>
</template>