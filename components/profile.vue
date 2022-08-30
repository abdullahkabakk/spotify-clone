<template>
  <header class="flex justify-between mt-5 mb-10 mr-5">
    <div class="mx-5">
      <a class="back-forward" href="#">
        <span class="px-0.5">
          &lt;
        </span>
      </a>
      <a class="back-forward" href="#">
        <span class="px-0.5">
          &gt;
        </span>
      </a>
    </div>
    <a class="rounded-full px-0.5  bg-neutral-900 mr-3 hover:bg-neutral-600" href="#">
      <img class="rounded-full w-7 pt-0.5 h-7 inline" src="assets/img/profile.jpg" alt="Profile photo">
      <span class="text-sm px-2 mr-2 text-white align-middle font-bold">
        Zweirus
      </span>
    </a>
  </header>
</template>

<style scoped>

.back-forward {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  font-size: 1.5rem;
  line-height: 2rem;
  background-color: rgb(82 82 82 / 0.5);
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  border-radius: 9999px;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  padding-bottom: 0.125rem;

}
</style>