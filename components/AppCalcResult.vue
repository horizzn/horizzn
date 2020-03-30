<template>
  <div
    class="gradient-white input group max-w-md mx-auto pt-3 pb-3 pl-4 pr-4 mt-4 rounded-lg h-22 shadow-inset transition ease-in-out duration-300 cursor-pointer"
  >
    <!-- Compnent: Header -->
    <app-calc-header :title="title" :unit="unit" :identifier="identifier" />

    <!-- Component: Input Field-->
    <div class="text-4xl text-gray-950 font-light leading-snug overflow-hidden">
      <div
        class="bg-transparent focus:outline-none py-0 px-0 block w-full appearance-none leading-normal font-light whitespace-no-wrap"
      >
        {{ result }}
      </div>
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
    result: {
      type: [Number, String],
      default: 0
    },
    title: {
      type: String,
      default: 'Title'
    },
    unit: {
      type: String,
      default: ''
    },
    identifier: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      metric: true
    }
  }
}
</script>

<style lang="postcss" scoped></style>
