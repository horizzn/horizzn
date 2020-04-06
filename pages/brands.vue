<template lang="html">
  <div
    class="bg-gray-100 min-h-screen flex flex-col md:flex-row justify-center items-center text-center mx-auto"
  >
    <icon
      viewbox="0 0 512 112"
      class=" text-brand-600 fill-current w-auto h-24 absolute top-0"
    >
      <icon-logotype />
    </icon>

    <transition v-if="isEcc" name="fade-slower">
      <h2
        class="tfta absolute bottom-0 mb-6 text-brand-400 font-medium uppercase
        text-xs"
      >
        Tools For The Awakened
      </h2>
    </transition>
    <!-- Earth Curvature Calculator -->
    <logomark-base
      class="w-18 h-18 m-3 md:w-24 md:h-24 md:mx-6 lg:w-28 lg:h-28 lg:mx-8"
    >
      <icon-calc />
    </logomark-base>

    <!-- Flat Earth Clock -->
    <logomark-base
      name="fec"
      class="w-18 h-18 m-3 md:w-24 md:h-24 md:mx-6 lg:w-28 lg:h-28 lg:mx-8"
    >
      <icon-clock />
    </logomark-base>

    <logomark-base
      active
      name="hrz"
      class="hidden md:flex w-24 h-24 md:w-32 md:h-32 md:mx-6 lg:w-36 lg:h-36 lg:mx-8"
    >
      <icon-circle />
    </logomark-base>

    <!-- <div
      class="icon shadow-1 w-32 h-32 transition ease-in-out duration-300 cursor-pointer relative hover:bg-brand-7 transform hover:-translate-y-1 flex justify-center items-center"
    >
      <div class="hrzn" />
    </div> -->

    <!-- United Flat earth -->
    <logomark-base
      name="ufe"
      class="w-18 h-18 m-3 md:w-24 md:h-24 md:mx-6 lg:w-28 lg:h-28 lg:mx-8"
    >
      <icon-ufe />
    </logomark-base>

    <!-- Flat Earth Clock -->
    <logomark-base
      name="pps"
      class="w-18 h-18 m-3 md:w-24 md:h-24 md:mx-6 lg:w-28 lg:h-28 lg:mx-8"
    >
      <icon-compass />
    </logomark-base>
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
import LogomarkBase from '~/components/icons/brand/LogomarkBase'

export default {
  components: {
    Icon,
    IconCalc,
    IconClock,
    IconCompass,
    IconCircle,
    IconLogotype,
    IconUfe,
    LogomarkBase
  },
  data() {
    return {
      isEcc: true,
      isfec: false,
      isFeu: false,
      isPps: false
    }
  }
}
</script>

<style lang="postcss">
.icon {
  border-radius: 3rem;
}

.hrzn {
  @apply rounded-full w-20 h-20 flex justify-center items-center;
  border: transparent;
  border-radius: 50;
  background: conic-gradient(#cc5cff, #6342ff, #50e2c1, #cc5cff);
  &::after {
    content: '';
    @apply block rounded-full w-17 h-17 bg-gray-100;
  }
}

.tfta {
  letter-spacing: 0.3rem;
}
</style>
