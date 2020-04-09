<template lang="html">
  <div
    :class="[
      name,
      active
        ? 'shadow-lg hover:shadow-xl hover:-translate-y-01'
        : 'shadow-xs hover:shadow-lg hover:-translate-y-1'
    ]"
    class="logomark group flex items-center justify-center rounded-1/3 hover:shadow-lg transition ease-in-out duration-300 cursor-pointer relative transform gradient-white"
  >
    <icon class="logomark__back absolute m-0 p-0">
      <icon-circle class="mono text-brand-200 fill-current" />
    </icon>

    <div
      :class="{'opacity-100': active}"
      class="conical logomark__back absolute m-0 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    />

    <icon class="logomark__icon text-brand-100 fill-current absolute m-0 p-0">
      <slot />
    </icon>
  </div>

  <!-- <div class="logomark__back w-full h-full rounded-full absolute" /> -->
</template>

<script>
import Icon from '~/components/icons/Icon'
import IconCircle from '~/components/icons/brand/IconCircle'
// import ConicalGradient from '~/components/icons/brand/ConicalGradient'

export default {
  components: {
    Icon,
    IconCircle
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
  },
  data() {
    return {
      hover: false
    }
  }
  // computed: {
  //   isActive(name) {
  //     if (name === this.active) return true
  //   }
  // }
}
</script>

<style lang="postcss">
.conical {
  background: url('~assets/images/congrad-sharp.png') center center;
  background-size: contain;
}

.logomark__back {
  width: 61.803%;
  height: 61.803%;
}

/* LOGOS */
/* Horizzn */
.hrz {
  & .logomark__icon {
    width: 54%;
    height: 54%;
  }
  & .logomark__back {
    transform: rotate(-105deg);
  }
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
</style>
