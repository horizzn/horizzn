<template lang="html">
  <div
    class="main bg-gray-100 min-h-screen flex flex-col md:flex-row justify-center items-center text-center mx-auto"
  >
    <nuxt-link to="/" class="absolute top-0">
      <icon
        viewbox="0 0 512 112"
        class=" text-brand-600 fill-current w-24 h-24"
      >
        <icon-logotype />
      </icon>
    </nuxt-link>

    <!-- Earth Curvature Calculator -->
    <nuxt-link to="/ecc/" class="group m-3 md:mx-6 lg:mx-8">
      <base-logomark
        name="ecc"
        class="w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
      >
        <icon-calc />
      </base-logomark>
      <h2
        class="absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        Earth Curvature Calculator<br />
        <span class="text-brand-400 font-normal">Press to View</span>
      </h2>
    </nuxt-link>

    <!-- Flat Earth Clock -->
    <nuxt-link to="/" class="group m-3 md:mx-6 lg:mx-8">
      <base-logomark
        name="fec"
        class="w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
      >
        <icon-clock />
      </base-logomark>
      <h2
        class="absolute bottom-0 uppercase text-xs font-bold tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        Flat Earth Clock<br />
        <span class="text-brand-400 font-normal">Upcoming</span>
      </h2>
    </nuxt-link>

    <!-- --------------------------------------------- -->
    <!-- HORIZZN° -->
    <nuxt-link to="/" class="hrz group m-3 md:mx-6 lg:mx-8">
      <base-logomark
        active
        name="hrz"
        class="hidden md:flex w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
      >
        <icon-circle />
      </base-logomark>
      <h2
        class="absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        Tools For The awakened<br />
        <span class="text-brand-400 font-normal">Choose Your Path</span>
      </h2>
    </nuxt-link>

    <!-- United Flat earth -->
    <nuxt-link to="/" class="group m-3 md:mx-6 lg:mx-8">
      <base-logomark
        name="ufe"
        class="w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
      >
        <icon-ufe />
      </base-logomark>
      <h2
        class="absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        United Flat Earth<br />
        <span class="text-brand-400 font-normal">Upcoming</span>
      </h2>
    </nuxt-link>

    <!-- Flat Earth Clock -->
    <nuxt-link to="/" class="group m-3 md:mx-6 lg:mx-8">
      <base-logomark
        name="pps"
        class="w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
      >
        <icon-compass />
      </base-logomark>
      <h2
        class="absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        Plane Positioning System<br />
        <span class="text-brand-400 font-normal">Upcoming</span>
      </h2>
    </nuxt-link>
  </div>
</template>

<script>
import Icon from '~/components/icons/Icon'
import IconCalc from '~/components/icons/brand/IconCalc'
import IconClock from '~/components/icons/brand/IconClock'
import IconCompass from '~/components/icons/brand/IconCompass'
import IconCircle from '~/components/icons/brand/IconCircle'
import IconLogotype from '~/components/icons/brand/IconLogotype'
import IconUfe from '~/components/icons/brand/IconUfe'
import BaseLogomark from '~/components/icons/brand/BaseLogomark'

export default {
  components: {
    Icon,
    IconCalc,
    IconClock,
    IconCompass,
    IconCircle,
    IconLogotype,
    IconUfe,
    BaseLogomark
  }
}
</script>

<style lang="postcss"></style>
