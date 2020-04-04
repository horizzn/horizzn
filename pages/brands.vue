<template lang="html">
  <div
    class="bg-gray-100 min-h-screen flex justify-around items-center text-center mx-auto justify-aroundr"
  >
    <!-- Earth Curvature Calculator -->
    <logomark-base active class="w-24 h-24">
      <icon-calc />
    </logomark-base>

    <!-- Flat Earth Clock -->
    <logomark-base active name="fec" class="w-24 h-24">
      <icon-clock />
    </logomark-base>

    <div
      class="icon shadow-1 w-32 h-32 transition ease-in-out duration-300 cursor-pointer relative hover:bg-brand-7 transform hover:-translate-y-1 flex justify-center items-center"
    >
      <div class="hrzn" />
    </div>

    <!-- United Flat earth -->
    <logomark-base active name="ufe" class="w-24 h-24">
      <icon-ufe />
    </logomark-base>

    <!-- Flat Earth Clock -->
    <logomark-base active name="pps" class="w-24 h-24">
      <icon-compass />
    </logomark-base>
  </div>
</template>

<script>
// import Icon from '~/components/icons/Icon'
import logomarkBase from '~/components/icons/brand/logomarkBase'
import IconCalc from '~/components/icons/brand/IconCalc'
import IconClock from '~/components/icons/brand/IconClock'
import IconCompass from '~/components/icons/brand/IconCompass'
import IconUfe from '~/components/icons/brand/IconUfe'

export default {
  components: {
    logomarkBase,
    IconCalc,
    IconClock,
    IconCompass,
    IconUfe
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
</style>
