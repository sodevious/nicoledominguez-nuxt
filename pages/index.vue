<template>
  <header role="banner" class="nd-header">
    <div class="nd-header-info nd-col-6">
      <logo />

      <h2 class="nd-header-title">
        UI/UX Developer
      </h2>

      <div>
        <Button icon="file" url="~/assets/public/ndominguez-resume-2019.pdf">Resumé</Button>
        <Button icon="envelope" url="mailto:work@nicoledominguez.com">Contact</Button>
        <Button icon="briefcase" url="/portfolio">Portfolio</Button>
        <Button icon="user" url="/about">About</Button>
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
  .nd-header {
    @include flex-container();
    width: 100%;
    background-color: $color-vanilla;
  }

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

  .nd-header-intro {
    margin: 2rem auto 0 auto;
    width: 90%;
    font-family: $nd-freight;
    font-size: $lg-font-size;
    line-height: 1.2em;
    color: $color-purple-dark;
  }

  @media screen and (min-width: $tablet) {
    .nd-header-info {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }

    .nd-header-cta {
      margin: 0 0.5rem;
      font-size: $md-font-size - 2;
    }
  }

  @media screen and (min-width: $desktop) {
    .nd-header-intro {
      font-size: $xl-font-size;
    }

    .nd-header-cta {
      margin: 0 0.75rem;
      font-size: $md-font-size;
    }
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button.vue'

export default {
  components: {
    Logo,
    Button
  }
 }
</script>
