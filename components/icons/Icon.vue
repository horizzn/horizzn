<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="presentation"
  >
    <!-- <title -->
    <!-- :id="iconName" -->
    <!-- lang="en"> -->
    <!-- {{ iconName }} icon -->
    <!-- </title> -->
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'icon'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped lang="postcss">
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
