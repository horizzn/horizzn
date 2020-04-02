<template>
  <div class="overflow-hidden">
    <!-- <div class="border-t border-brand-6" /> -->
    <div class="border-t border-gray-200">
      <a
        href="#"
        :class="{'text-gray-950': active}"
        class="px-4 py-3 flex justify-between items-center text-gray-600 antialiased"
        @click.prevent="active = !active"
      >
        <h2 class="uppercase tracking-wide font-medium text-xs">
          {{ title }}
        </h2>
        <span :class="{'transform rotate-90': active}" class="down-Arrow"
          ><icon class="w-3 h-3"><icon-arrow class=""/></icon
        ></span>
      </a>
    </div>
    <div v-show="active" class="tab__content px-8 md:px-6 pb-6 text-xs">
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from '~/components/icons/Icon'
import IconArrow from '~/components/icons/IconArrow'

export default {
  components: {
    Icon,
    IconArrow
  },
  props: {
    title: {
      type: String,
      default: ''
    }
    // active: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="postcss" scoped></style>
