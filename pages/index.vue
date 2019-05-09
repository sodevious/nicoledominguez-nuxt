<template>
  <header role="banner" class="nd-header nd-row">
    <div class="nd-header-info nd-col-6">
      <logo />

      <h2 class="nd-header-title">
        UI/UX Developer
      </h2>

      <div>
        <a :href="link.url" v-for="link in links" class="btn">
          <font-awesome-icon :icon="link.icon"/>&nbsp;&nbsp;

          {{ link.name }}
        </a>
      </div>

      <p class="nd-header-intro">
        Empathetic, curious, creative human.
      </p>

      <p class="nd-header-intro">
        I am a design-focused front-end developer with an eye for detail.
        I believe in accessible, mobile-first modern websites and web applications semantically built.
        The focus of my work is in user interface implementation, style guides, component libraries and design systems.
      </p>
    </div>
  </header>
</template>

<style lang="scss">
  .nd-header-info {
    padding: 3rem 1rem;
    text-align: center;
  }

  .nd-header-info .nd-logo {
    display: block;
    margin: 0 auto 20px;
    width: 85%;
    max-width: 300px;
  }

  .nd-header-title {
    margin: 2rem auto;
    font-size: $xl-font-size;
    font-weight: $nd-adelle-light;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  asyncData (context) {
    return {
      links: [
        { name:'Resumé', url: '~/assets/public/ndominguez-resume-2019.pdf', icon: 'file' },
        { name:'Contact', url: 'mailto:work@nicoledominguez.com', icon: 'envelope' },
        { name:'Portfolio', url: '/portfolio', icon: 'briefcase' },
        { name:'About', url: '/about', icon: 'user' }
      ]
    }
  }
 }
</script>
