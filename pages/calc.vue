<template lang="html">
  <div
    class="t-container flex flex-col md:min-h-screen items-center justify-around"
  >
    <header class="flex flex-1 justify-center">
      <app-logomark
        class="mt-6 w-24 h-24 rounded-1/3 shadow-xl hover:shadow-md transition ease-in-out duration-300 cursor-pointer transform hover:-translate-y--1 block"
      />
    </header>
    <div class="container mt-8 justify-center p-8">
      <!-- Select: Metric / Imperial -->
      <div
        class="unit mb-6 text-xs font-normal tracking-wider lowercase text-right text-gray-500 max-w-md mx-auto"
      >
        <span
          :class="{'shadow-sm text-gray-950 gradient-white': !metric}"
          class="transition ease-in-out duration-500 hover:duration-300 hover:text-gray-950 cursor-pointer hover:shadow px-3 py-2 rounded-lg"
          @click="metric = false"
          >Imperial</span
        >
        <span
          :class="{'shadow-sm text-gray-950 gradient-white': metric}"
          class="transition ease-in-out duration-500 hover:duration-300 hover:text-gray-950 cursor-pointer hover:shadow px-3 py-2 rounded-lg"
          @click="metric = true"
          >Metric</span
        >
      </div>
      <app-calc-input
        v-model.number="h0"
        title="Eyesight Height"
        identifier="H"
        :unit="metric ? 'm' : 'ft'"
        class=""
      />
      <app-calc-input
        v-model.number="d0"
        title="Distance to Target"
        identifier="D"
        :unit="metric ? 'km' : 'mi'"
        class=""
      />
      <app-calc-result
        :result="metric ? d1 : d1i"
        title="Distance to Horizon"
        identifier="D1"
        :unit="metric ? 'km' : 'mi'"
        class=""
      />
      <app-calc-result
        :result="metric ? h1 : h1i"
        title="Target Hidden Height"
        identifier="H1"
        :unit="metric ? 'm' : 'ft'"
        class=""
      />
    </div>
    <div class="diagram md:mt-16">
      <diagram class="w-full" />
    </div>
  </div>
</template>

<script>
// import Icon from '~/components/icons/Icon'
import AppLogomark from '~/components/AppLogomark'
import AppCalcInput from '~/components/AppCalcInput'
import AppCalcResult from '~/components/AppCalcResult'
import Diagram from '~/components/Diagram'

export default {
  components: {
    AppLogomark,
    AppCalcInput,
    AppCalcResult,
    Diagram
  },
  data() {
    return {
      metric: true,
      earthRadius: 6371,
      earthRadiusImperial: 3958.75585149,
      feetPerMeter: 3.2808399000000001422,
      feetPerMile: 0.000189393939393939,
      milesPerKilometer: 0.6213711920000000166,
      h0: 0,
      d0: 0,
      h0i: 0,
      d0i: 0
      // d1: 0,
      // h1: 0
    }
  },
  computed: {
    d1() {
      // a = √[(r + h)² - r²]
      if (this.h0 >= 0.000000001) {
        return Math.sqrt(
          (this.earthRadius + this.h0 * 0.001) ** 2 - this.earthRadius ** 2
        ).toFixed(8)
        // .slice(0, 7)
      } else {
        return '0'
      }
    },
    h1() {
      // x = √(a² - 2ad + d² + r²) - r
      if (this.d0 > this.d1) {
        return (
          (Math.sqrt(
            this.d1 ** 2 -
              2 * this.d1 * this.d0 +
              this.d0 ** 2 +
              this.earthRadius ** 2
          ) -
            this.earthRadius) *
          1000
        ).toFixed(6)
        // .slice(0, 7) || "0"
      } else {
        return '0'
      }
    },
    d1i() {
      // a = √[(r + h)² - r²]
      if (this.h0 >= 0.000000001) {
        return Math.sqrt(
          (this.earthRadiusImperial + this.h0 * this.feetPerMile) ** 2 -
            this.earthRadiusImperial ** 2
        ).toFixed(8)
        // .slice(0, 7)
      } else {
        return '0'
      }
    },
    h1i() {
      // x = √(a² - 2ad + d² + r²) - r
      if (this.d0 > this.d1i) {
        return (
          (
            (Math.sqrt(
              this.d1i ** 2 -
                2 * this.d1i * this.d0 +
                this.d0 ** 2 +
                this.earthRadiusImperial ** 2
            ) -
              this.earthRadiusImperial) /
            this.feetPerMile
          ).toFixed(6) || '0' // .substr(0, 7) || "0"
        )
      } else {
        return '0'
      }
    }
    // Metric from Store
    // metric: {
    //   get() {
    //     return this.$store.getters['calc/metric']
    //   },
    //   set(value) {
    //     this.$store.commit('calc/setMetric', value)
    //   }
    // }
  },
  mounted() {
    // console.log(this.$store)
  }
}
</script>

<style lang="postcss"></style>
