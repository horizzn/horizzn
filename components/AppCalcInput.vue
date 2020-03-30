<template>
  <div
    class="gradient-white input group max-w-md mx-auto pt-3 pb-3 pl-4 pr-4 mt-4 rounded-lg h-22 shadow-xs hover:shadow-md transition ease-in-out duration-500 hover:duration-300 cursor-pointer transform hover:translate-y--1"
  >
    <!-- Compnent: Header -->
    <app-calc-header :title="title" :unit="unit" :identifier="identifier" />

    <!-- Component: Input Field-->
    <div class="text-4xl text-gray-950 font-light leading-snug overflow-hidden">
      <input
        :value="value"
        :placeholder="value"
        type="number"
        min="0"
        max="6371"
        class="bg-transparent focus:outline-none py-0 px-0 block w-full appearance-none leading-normal font-light whitespace-no-wrap placeholder-gray-950"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import AppCalcHeader from '~/components/AppCalcHeader'

export default {
  components: {
    AppCalcHeader
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    value: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },
    identifier: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped></style>
