<template lang="html">
  <div class="app-social flex justify-center md:justify-start items-center">
    <a
      href="https://www.facebook.com/horizzn"
      target="_blank"
      class="group px-6 py-4 md:px-3"
    >
      <icon
        class="icon icon-facebook group-hover:text-brand-800"
        icon-name="icon-facebook"
      >
        <icon-facebook />
      </icon>
    </a>
    <a
      href="https://www.instagram.com/horizznapp"
      target="_blank"
      class="group px-6 py-4 md:px-3"
    >
      <icon
        class="icon icon-instagram group-hover:text-brand-800"
        icon-name="icon icon-instagram"
      >
        <icon-instagram />
      </icon>
    </a>
    <a
      href="https://twitter.com/horizzn"
      target="_blank"
      class="group px-6 py-4 md:px-3"
    >
      <icon
        class="icon icon-twitter group-hover:text-brand-800"
        icon-name="icon-twitter"
      >
        <icon-twitter />
      </icon>
    </a>
    <a
      href="https://github.com/horizzn/horizzn"
      target="_blank"
      class="group px-6 py-4 md:px-3"
    >
      <icon
        class="icon icon-github group-hover:text-brand-800"
        icon-name="icon-github"
      >
        <icon-github />
      </icon>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconFacebook from '@/components/icons/IconFacebook'
import IconTwitter from '@/components/icons/IconTwitter'
import IconInstagram from '@/components/icons/IconInstagram'
import IconGithub from '@/components/icons/IconGithub'

export default {
  components: {
    Icon,
    IconFacebook,
    IconTwitter,
    IconInstagram,
    IconGithub
  }
}
</script>

<style scoped lang="postcss">
.icon {
  @apply w-4 h-4 text-brand-400 fill-current transition ease-in-out duration-200;
  &:hover {
    @apply text-brand-800;
  }
}
</style>
