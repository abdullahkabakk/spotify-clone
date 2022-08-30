<template>
  <div class="mr-5">
    <div class="pl-7 text-white flex justify-between mb-3">
      <a class="font-bold hover:underline text-2xl" href="#"> Your shows
      </a>
      <a class="text-sm pr-3 font-semibold text-neutral-300 hover:underline" href="#">
        <span class="align-middle">
          See ALL
        </span>
      </a>
    </div>

    <div class="grid lg:grid-cols-5 md:grid-cols-3 ml-2">
      <Show :playlist="show"></Show>
      <Show :playlist="show"></Show>
      <Show :playlist="show"></Show>
      <Show :playlist="show"></Show>
      <Show :playlist="show"></Show>
    </div>
  </div>
</template>

<script setup>

const show = {
  img: "assets/img/profile.jpg",
  name: "Show Author",
  author: "Show Author"
}

</script>
