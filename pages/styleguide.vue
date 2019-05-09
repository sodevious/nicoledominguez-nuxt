<template>
  <div>
    <logo />

    <h2>Global styles</h2>

    <a href="#" class="btn">Button Link</a>
    <a href="#" class="btn">Button Link with icon &nbsp;<font-awesome-icon icon="user"/></a>

    <button class="btn"><font-awesome-icon icon="star"/>&nbsp; Button Element with icon</button>
    <button class="btn">Button Element</button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
