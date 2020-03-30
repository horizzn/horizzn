<template>
  <!-- Compnent: Header -->
  <header
    class="text-xs tracking-wider mb-2 text-gray-950 group-hover:text-gray-950 transition ease-in-out duration-200 antialiased flex justify-between items-center"
  >
    <span class="uppercase">{{ title }}</span>
    <span class="text-xs">
      <span class="unit lowercase">{{ unit }}</span>
      <span class="divider"> / </span>
      <span class="key font-black">{{ identifier }}</span>
    </span>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    unit: {
      type: String,
      default: 'km'
    },
    identifier: {
      type: String,
      default: 'H'
    }
  }
}
</script>

<style lang="postcss" scoped>
/* Hide input type number-control arrows */
/* input[type='number'] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
} */
</style>
