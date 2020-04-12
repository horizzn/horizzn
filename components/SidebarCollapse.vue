<template>
  <div
    class="overflow-hidden shadow-none hover:shadow-down-sm hover:duration-200 transition ease-in-out duration-500"
  >
    <!-- <div class="border-t border-brand-6" /> -->
    <div class="border-t border-gray-200">
      <a
        href="#"
        :class="{'text-brand-900': isActive}"
        class="px-4 py-3 flex justify-between items-center text-brand-700 antialiased"
        @click.prevent="toggle()"
      >
        <h2 class="uppercase tracking-wide font-medium text-xs">
          {{ title }}
        </h2>
        <span :class="{'transform rotate-90': isActive}" class="down-Arrow"
          ><icon class="w-3 h-3"><icon-arrow class=""/></icon
        ></span>
      </a>
    </div>
    <div v-show="isActive" class="tab__content px-8 md:px-6 pb-6 text-xs">
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
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  watch: {
    active(newVal) {
      if (newVal !== this.isActive) {
        this.isActive = newVal
      }
    }
  },
  mounted() {
    this.isActive = this.active
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="postcss" scoped></style>
