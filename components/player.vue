<template>
  <div class="flex flex-row justify-between bg-neutral-900 border-t-2 border-t-neutral-800">
    <div class=" flex-row hidden md:flex">
      <img class="inline w-14 h-14 m-2" src="assets/img/profile.jpg" alt="Music Photo">
      <div class="flex flex-col place-content-center ml-2">
        <a class="text-white text-base hover:underline" href="#">Song Name</a>
        <a class="text-neutral-600 text-xs hover:underline" href="#">Song Author</a>
      </div>
    </div>
    <div class="flex flex-col mx-auto">
      <audio src="assets/music/song.mp3" class="mt-2" controls></audio>
    </div>
    <div class="hidden md:flex mr-7">
      <a href="#">
        <img class="icon-style" src="assets/img/mic_icon.svg" alt="Mic Icon">
      </a>
      <a href="#">
        <img class="icon-style" src="assets/img/list_icon.svg" alt="List Icon">
      </a>
      <a href="#">
        <img class="icon-style" src="assets/img/desktop_icon.svg" alt="Desktop Icon">
      </a>
      <a href="#">
        <img class="icon-style" src="assets/img/sound_icon.svg" alt="Sound Icon">
      </a>
      <a href="#">
        <img class="icon-style" src="assets/img/resize_icon.svg" alt="Resize Icon">
      </a>
    </div>
  </div>
</template>

<style scoped>
.icon-style {
  display: inline;
  height: 1rem;
  width: 1rem;
  margin-top: 1.75rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

</style>