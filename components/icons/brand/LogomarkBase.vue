<template lang="html">
  <div
    class="logomark flex items-center justify-center rounded-1/3 shadow-xs hover:shadow-lg transition ease-in-out duration-300 cursor-pointer relative transform hover:-translate-y-1"
  >
    <!-- Depreceated: No Firefox Support -->
    <!-- <div
      class="logomark__back w-full h-full rounded-full absolute transition-all duration-200 ease-out"
    /> -->

    <!-- <icon class="logomark__icon w-2/3 h-full absolute">
      <conical-gradient />
    </icon> -->

    <div
      class="logomark__back w-full h-full rounded-full transform -rotate-90 absolute"
    />

    <icon
      :class="name"
      class="logomark__icon absolute text-brand-100 fill-current"
    >
      <slot />
    </icon>
  </div>
</template>

<script>
import Icon from '~/components/icons/Icon'
// import ConicalGradient from '~/components/icons/brand/ConicalGradient'

export default {
  components: {
    Icon
    // ConicalGradient
  },
  props: {
    name: {
      type: String,
      default: 'ecc' // 38%
    }
  }
}
</script>

<style lang="postcss">
.logomark__back {
  width: 100%;
  height: 100%;
  /* position: relative;
  top: 1px; */
  background: url('~assets/images/congrad.png') center center no-repeat;
  background-size: 60%;
  /* filter: brightness(4) brightness(0.93); */
  transition: all 0.13s ease-in-out;
}

.logomark:hover .logomark__back {
  /* background: url('~assets/images/congrad.png') center center; */
  filter: brightness(1);
  transition: all 0.43s ease-in-out;
}

/* Earth Curvature Calculator */
.ecc {
  width: 38%;
  height: 38%;
}

/* United Flat Earth */
.ufe {
  width: 48%;
  height: 48%;
}

/* Depreceated: No Firefox Support - https://caniuse.com/#feat=css-conic-gradients */
/* .logomark {
  & .logomark__back {
    opacity: 0.2;
    background: conic-gradient(#cc5cff, #6342ff, #50e2c1, #cc5cff);
    filter: contrast(1.13) blur(5px);
    clip-path: circle(30.6% at 50% 50%);
  }
  &:hover .logomark__back {
    background: conic-gradient(#cc5cff, #6342ff, #50e2c1, #cc5cff);
    filter: contrast(1.13) blur(5px);
    opacity: 1;
  }
} */
</style>
