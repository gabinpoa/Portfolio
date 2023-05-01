<script lang="ts">
  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth >= 768}
  <a href="#projetos" class="text-xl">Projetos</a>
  <a href="#stacks" class="text-xl">Habilidades</a>
  <a href="#techs" class="text-xl">Tecnologias diferenciadas</a>
{/if}
