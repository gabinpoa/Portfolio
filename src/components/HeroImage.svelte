<script lang="ts">
  import { onMount } from "svelte";

  const imagesPath: string[] = [
    "/spotifan.png",
    "/doctors-sc.jpg",
    "/recomecar.png",
    "/pituca.png",
  ];
  let firstImage = true;
  let counter = 0;
  $: imageSource = imagesPath[counter];

  function nextImage() {
    if (counter < imagesPath.length - 1) {
      counter = counter + 1;
    } else {
      counter = 0;
    }
  }

  onMount(() => {
    setTimeout(() => {
      firstImage = false;
      setInterval(() => {
        nextImage();
      }, 3000);
    }, 1900);
  });
</script>

{#if firstImage}
  <img
    width={384}
    height={384}
    class="fadeOut"
    src="/avatar-removebg-preview.png"
    alt="avatar de Gabriel Nascimento"
  />
{:else}
  <div
    class="artboard opacity-0 h-[calc(100vh-150px)] md:h-[568px] w-fit animated"
  >
    <img
      class="h-full w-auto rounded-xl shadow"
      src={imageSource}
      alt="spotifan web app"
    />
  </div>
{/if}

<style>
  .fadeOut {
    animation-name: fade-out;
    animation-delay: 1s;
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
  }
  .animated {
    animation: fade-in-slide-left 3s ease-in infinite;
  }
  @keyframes fade-in-slide-left {
    35% {
      opacity: 100%;
    }
    80% {
      transform: translate(0);
      opacity: 100%;
    }
    100% {
      transform: translate(440px);
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0;
    }
  }
</style>
