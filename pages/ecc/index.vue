<template lang="html">
  <div class="page-wrap">
    <aside
      class="w-full md:w-73 md:fixed md:h-screen bg-white md:overflow-y-auto z-20"
    >
      <header class="flex flex-1 justify-center">
        <nuxt-link to="/">
          <base-logomark active class="mt-8 mb-12 w-22 h-22">
            <icon-calc />
          </base-logomark>
          <!-- <logomark-calculator
            class="mt-8 mb-12 w-20 h-20 rounded-1/3 shadow-lg hover:shadow-md transition ease-in-out duration-300 cursor-pointer transform hover:-translate-y--1 block"
          /> -->
        </nuxt-link>
      </header>
      <sidebar-collapse
        title="Calculator"
        class="shadow-none hover:shadow-down-md hover:duration-200 transition ease-in-out duration-700"
      >
        <header
          class="text-xs tracking-wider mb-6 mt-1 text-gray-950 group-hover:text-gray-950 transition ease-in-out duration-200 antialiased flex justify-between items-center"
        >
          <span class="uppercase cursor-pointer" @click="metric = !metric"
            >Units</span
          >
          <span class="text-xs lowercase text-gray-600">
            <span
              :class="{'text-brand-800 font-bold': !metric}"
              class="cursor-pointer mr-2"
              @click="metric = false"
              >imperial</span
            >
            <span
              :class="{'text-brand-800 font-bold': metric}"
              class="cursor-pointer"
              @click="metric = true"
              >Metric</span
            >
          </span>
        </header>
        <sidebar-collapse-input-header
          :unit="metric ? 'm' : 'ft'"
          title="Eyesight Height"
          identifier="H"
          class="mt-4"
        />
        <sidebar-collapse-input v-model.number="h0" class="pb-4" />
        <sidebar-collapse-input-header
          :unit="metric ? 'km' : 'mi'"
          title="Distance To Target"
          identifier="D"
        />
        <sidebar-collapse-input v-model.number="d0" class="pb-4" />
        <sidebar-collapse-input-header
          :unit="metric ? 'km' : 'mi'"
          title="Distance to Horizon"
          identifier="D1"
          class="mt-4"
        />
        <sidebar-collapse-result
          horizon
          :result="metric ? d1 : d1i"
          class="pb-4"
        />
        <sidebar-collapse-input-header
          :unit="metric ? 'm' : 'ft'"
          title="Target Hidden Height"
          identifier="H1"
          class="mt-1"
        />
        <sidebar-collapse-result :result="metric ? h1 : h1i" class="pb-4" />
      </sidebar-collapse>
      <sidebar-collapse
        title="Assumptions"
        class="shadow-none hover:shadow-down-md hover:duration-200 transition ease-in-out duration-700"
      >
        <ol class="list-decimal list-outside pl-3 text-xs">
          <li class="pb-01">Light travels in a straight line.</li>
          <li>The Earth is a sphere with a radius of 6371 km.</li>
        </ol>
      </sidebar-collapse>
    </aside>
    <!-- md:ml-73 md:w-sidebar -->
    <!-- transformOrigin: {x: 0.5, y: 0.5}, -->
    <div class="diagram w-full h-screen absolute right-0 md:w-sidebar">
      <pan-zoom
        :options="{
          autocenter: true,
          bounds: false,
          minZoom: 0.5,
          maxZoom: 3,
          pinchSpeed: 1,
          smoothScroll: true,
          beforeWheel: function(e) {
            // allow wheel-zoom only if altKey is pressed. Otherwise - ignore
            var shouldIgnore = !e.altKey
            return shouldIgnore
          }
        }"
        selector="#diagram"
        class="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <diagram class="w-full h-full absolute outline-none" />
      </pan-zoom>
    </div>
  </div>
</template>

<script>
import BaseLogomark from '~/components/icons/brand/BaseLogomark'
import IconCalc from '~/components/icons/brand/IconCalc'
import Diagram from '~/components/Diagram'
import SidebarCollapse from '~/components/SidebarCollapse'
import SidebarCollapseInput from '~/components/SidebarCollapseInput'
import SidebarCollapseInputHeader from '~/components/SidebarCollapseInputHeader'
import SidebarCollapseResult from '~/components/SidebarCollapseResult'

export default {
  components: {
    BaseLogomark,
    IconCalc,
    Diagram,
    SidebarCollapse,
    SidebarCollapseInput,
    SidebarCollapseInputHeader,
    SidebarCollapseResult
  },
  data() {
    return {
      title: 'Earth Curvature Calculator',
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
        ).toFixed(12)
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
          ).toFixed(12) || '0'
        )
      } else {
        return '0'
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="postcss">
aside {
  box-shadow: 1px 0 2px 0 rgba(31, 33, 38, 0.08);
}
</style>
