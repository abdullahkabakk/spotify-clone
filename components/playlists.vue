<template>
  <div class="pl-5 mb-5">
    <div class="ml-3 text-3xl font-bold text-white mb-5">Good afternoon</div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ml-3 mr-2 ">
      <Playlist :playlist="playlist"/>
      <Playlist :playlist="playlist"/>
      <Playlist :playlist="playlist"/>
      <Playlist :playlist="playlist"/>
      <Playlist :playlist="playlist"/>
      <Playlist :playlist="playlist"/>
    </div>
  </div>
</template>

<script setup>

const playlist = {
  img: "assets/img/profile.jpg",
  title: "Playlist",
}

</script>