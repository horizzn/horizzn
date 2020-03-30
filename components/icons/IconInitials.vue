<template>
  <div
    class="icon-initials flex flex-col items-center justify-center rounded-full block bg-brand-1 text-white w-8 h-8 transform scale-90"
  >
    <span
      class="block leading-none flex-col items-center justify-center align-baseline"
      >{{ initials }}
    </span>
  </div>
</template>

<script>
/* import Store from 'vuex' */
/* import {mapGetters} from 'vuex' */

export default {
  props: {
    initials: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // member: this.$store.getters.member */
      // firstName: this.$store.getters.firstName,
      // lastName: this.$store.getters.lastName,
      // initials: this.$store.state.member.initials
    }
  }
}
</script>

<style lang="postcss">
.icon-initials span {
  margin-bottom: 2px;
}
</style>
