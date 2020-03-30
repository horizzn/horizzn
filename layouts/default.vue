<template>
  <div>
    <!-- <t-navbar /> -->
    <nuxt />
  </div>
</template>
<script>
// import TNavbar from '@/components/TNavbar'
export default {
  components: {
    // TNavbar
  }
}
</script>
<style lang="postcss">
body {
  /* font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320))); */
  @apply bg-gray-100 antialiased;
}
/* .t-container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
</style>
