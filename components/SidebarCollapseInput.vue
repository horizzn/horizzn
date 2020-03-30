<template>
  <div class="input group w-full">
    <!-- Component: Input Field-->
    <div class="text-base text-gray-950 font-bold leading-snug overflow-hidden">
      <input
        :value="value"
        :placeholder="value"
        type="number"
        min="0"
        max="6371"
        class="bg-transparent focus:outline-none py-0 px-0 block w-full appearance-none leading-normal tracking-wide font-mefium whitespace-no-wrap placeholder-gray-950"
        @input="$emit('input', $event.target.value)"
      />
      <i
        class="bar pb-2 border-t block border-brand-400 focus:border-brand-800"
      ></i>
    </div>
  </div>
</template>

<script>
// import AppCalcHeader from '~/components/AppCalcHeader'

export default {
  components: {
    // AppCalcHeader
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="postcss" scoped>
.bar {
  /* position: relative; */
  /* border-top: 1px solid #000; */
  /* display: block; */
  /* &::before {
    content: '';
    height: ($h0-s / 8);
    width: 0;
    left: 50%;
    bottom: ($h0-s / -16);
    position: absolute;
    background: $focus-color;
    transition: left $transition-speed ease, width $transition-speed ease;
    z-index: 2;
  } */
}
</style>
