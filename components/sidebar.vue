<template>
  <aside class="py-4 px-3 w-64 bg-black lg:flex hidden flex-col m-0 justify-between">
    <div>
      <ul class="space-y-2">
        <li>
          <a href="#"
             class="flex items-center p-2">
            <img src="assets/img/spotify_icon.svg" alt="Spotify Icon">
            <span class="ml-1 text-2xl font-bold text-gray-200">Spotify</span>
          </a>
        </li>
        <li>
          <a href="#"
             class="list-item">
            <img src="assets/img/home_icon.svg" alt="Home Icon">
            <span class="spotify-text" style="color: #FFFFFF">Home</span>
          </a>
        </li>
        <li>
          <a href="#"
             class="list-item">
            <img src="assets/img/search_icon.svg" alt="Search Icon">
            <span class="spotify-text">Search</span>
          </a>
        </li>
        <li>
          <a href="#"
             class="list-item">
            <img src="assets/img/library.svg" class="ml-0.5" alt="library icon">
            <span class="spotify-text">Your Library</span>
          </a>
        </li>
        <li>
          <a href="#"
             class="list-item mt-10">
            <img src="assets/img/add_icon.svg" alt="Add Icon">
            <span class="spotify-text">Create Playlist</span>
          </a>
        </li>
        <li>
          <a href="#"
             class="list-item list-border">
            <img src="assets/img/liked_songs_icon.svg" alt="Liked Songs Icon">
            <span class="spotify-text">Liked Songs</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="playlist-text">Energy</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="playlist-text">My Playlist</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="playlist-text">Universe</span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <a href="#" class="flex">
            <img src="assets/img/install_icon.svg" alt="Install Icon">
            <span class="ml-2 text-gray-200">Install App</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>

</script>

<style scoped>

.spotify-text {
  font-weight: 500;
  color: rgb(179, 179, 179);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 1rem;

}

.playlist-text {
  font-weight: 500;
  color: rgb(179, 179, 179);
  margin-left: 0.5rem;
  font-size: 0.875rem;

}

.list-item {
  align-items: center;
  display: flex;
  padding: 0.25rem 0.5rem;
}

:hover {
  color: #FFFFFF;
}

.list-border {
  border-bottom-width: 1px;
  border-bottom-color: rgb(107 114 128 / 0.5);
}

</style>