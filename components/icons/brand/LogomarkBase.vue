<template lang="html">
  <div
    :class="[
      active
        ? 'active shadow-lg hover:shadow-xl hover:-translate-y-01'
        : 'shadow-xs hover:shadow-lg hover:-translate-y-1',
      name
    ]"
    class="logomark flex items-center justify-center rounded-1/3 hover:shadow-lg transition ease-in-out duration-300 cursor-pointer relative transform"
  >
    <!-- Depreceated: No Firefox Support -->
    <!-- <div
      class="logomark__back w-full h-full rounded-full absolute transition-all duration-200 ease-out"
    /> -->

    <!-- <icon class="logomark__icon w-2/3 h-full absolute">
      <conical-gradient />
    </icon> -->

    <div class="logomark__back w-full h-full rounded-full absolute" />

    <icon class="logomark__icon absolute text-brand-100 fill-current">
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
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
/* .logomark__icon {
  top: 25%;
} */
.logomark__back {
  width: 100%;
  height: 100%;
  background: url('~assets/images/congrad.png') center center no-repeat;
  background-size: 60%;
  &::before {
    @apply bg-brand-200 rounded-full absolute block;
    opacity: 0.5;
    content: '';
    width: 60%;
    height: 60%;
    top: 20%;
    right: 20%;
    transition: all 0.555s ease-in-out;
  }
}

.logomark:hover .logomark__back::before,
.logomark.active .logomark__back::before {
  transition: all 0.222s ease-in-out;
  background: transparent;
}
/* Earth Curvature Calculator */
.ecc {
  & .logomark__icon {
    width: 38%;
    height: 38%;
  }
  & .logomark__back {
    transform: rotate(-105deg);
  }
}

/* United Flat Earth */
.ufe {
  & .logomark__icon {
    width: 48%;
    height: 48%;
  }
  & .logomark__back {
    transform: rotate(65deg);
  }
}

.fec {
  & .logomark__icon {
    width: 44%;
    height: 44%;
  }
  & .logomark__back {
    transform: rotate(-45deg);
  }
}

.pps {
  & .logomark__icon {
    width: 41%;
    height: 41%;
  }
  & .logomark__back {
    transform: rotate(-45deg);
  }
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
