<template lang="html">
  <div class="t-container">
    <!-- <t-logo class="light" height="40" width="120" /> -->
    <!-- <div class="ui w-64 h-64 bg-brand-6 flex items-center justify-center" /> -->
    <div
      class="icon shadow-1 w-32 h-32 transition ease-in-out duration-300 cursor-pointer relative hover:bg-brand-7 transform hover:-translate-y-1 flex justify-center items-center"
    >
      <div class="logomark" />
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 256 256"
        class="w-20 h-20"
      >
        <g stroke="red" fill="none" stroke-width="16">
          <circle cx="128" cy="128" r="120"></circle>
        </g>
      </svg> -->
    </div>
    <!-- <div class="ui shadow-2 w-32 h-32" />
    <div class="ui shadow-3 w-32 h-32" />
    <div class="ui shadow-4 w-32 h-32" />
    <div class="ui shadow-5 w-32 h-32" /> -->
  </div>
</template>

<script>
// import TLogo from '~/components/TLogo.vue'

export default {
  components: {
    // TLogo
  }
}
</script>

<style lang="postcss">
.t-container {
  @apply bg-gray-100 min-h-screen flex justify-center items-center text-center mx-auto justify-around;
}
.icon {
  border-radius: 3rem;
}

.logomark {
  @apply rounded-full w-20 h-20 flex justify-center items-center;
  border: transparent;
  border-radius: 50;
  background: conic-gradient(#cc5cff, #6342ff, #50e2c1, #cc5cff);
  &::after {
    content: '';
    @apply block rounded-full w-17 h-17 bg-gray-100;
  }
}

.shadow-1 {
  /* @apply ; */
  box-shadow: 2px 2px 3px rgb(163, 177, 198, 0.2),
    -3px -3px 6px rgba(255, 255, 255, 0.8);
  &:hover {
    box-shadow: 16px 16px 32px rgb(163, 177, 198, 0.2),
      -16px -16px 32px rgba(255, 255, 255, 0.8);
    /* 0 0 16px rgba(0, 236, 255, 0.201); */
    /* margin-top: -40px; */
  }
}

.shadow-2 {
  box-shadow: 4px 4px 6px rgb(163, 177, 198, 0.2),
    -4px -4px 6px rgba(255, 255, 255, 0.8);
}

.shadow-3 {
  box-shadow: 8px 8px 12px rgb(163, 177, 198, 0.2),
    -8px -8px 12px rgba(255, 255, 255, 0.8);
}

.shadow-4 {
  box-shadow: 12px 12px 24px rgb(163, 177, 198, 0.2),
    -12px -12px 24px rgba(255, 255, 255, 0.8);
}

.shadow-5 {
  box-shadow: 16px 16px 32px rgb(163, 177, 198, 0.2),
    -16px -16px 32px rgba(255, 255, 255, 0.8);
}
</style>
