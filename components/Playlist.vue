<script setup>

const props = defineProps(["playlist"])
const image = props.playlist.img
const title = props.playlist.title

</script>

<template>
<a class="my-2 mr-5 rounded-lg bg-neutral-600/50 hover:bg-neutral-600/60 flex items-center group" href="#">
  <img class="inline rounded-l-lg w-20 h-20" :src="image" alt="Playlist Image">
  <span class="text-neutral-200 ml-4 text-lg font-medium	">{{title}}</span>
  <img class="hidden group-hover:inline ml-auto mr-3 w-12 h-12" src="assets/img/play_icon.svg" alt="Play Icon">
</a>
</template>