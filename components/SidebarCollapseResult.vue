<template>
  <div class="input group w-full pt-1">
    <div
      :class="horizon ? 'bg-primary' : 'bg-secondary'"
      class="font-medium text-base text-white inline leading-snug overflow-hidden py-01 px-02 rounded"
    >
      {{ result }}
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
    result: {
      type: [Number, String],
      default: 0
    },
    horizon: {
      type: Boolean,
      default: false
    }
  }
  //   data() {
  //     return {
  //       metric: true
  //     }
  //   }
}
</script>

<style lang="postcss" scoped></style>
