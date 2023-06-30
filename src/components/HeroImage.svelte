<script lang="ts">
  import { onMount } from "svelte";
  import { crossfade, fade, fly, slide } from "svelte/transition";

  const imagesPath: string[] = [
    "/avatar-removebg-preview.png",
    "/spotifan.png",
    "/doctors-sc.jpg",
    "/recomecar.png",
    "/pituca.png",
  ];
  let counter = 0;

  function nextImage() {
    if (counter < imagesPath.length - 1) {
      counter = counter + 1;
    } else {
      counter = 0;
    }
  }

  onMount(() => {
    setInterval(() => {
      nextImage();
    }, 3000);
  });
</script>

{#each imagesPath as path, i}
  {#if i === counter && i !== 0}
    <div
      transition:slide={{ duration: 600 }}
      class="artboard h-[calc(100vh-150px)] md:h-[568px] w-fit"
    >
      <img
        class="h-full w-auto rounded-xl shadow"
        src={path}
        alt="spotifan web app"
      />
    </div>
  {:else if counter === 0 && i === 0}
    <img
      transition:slide={{ axis: "x", duration: 600 }}
      src={path}
      height="384"
      width="384"
      alt=""
    />
  {/if}
{/each}
