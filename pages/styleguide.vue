<template>
  <div>
    <logo />

    <h2>Global styles</h2>

    <Button icon="star">About</Button>
    <Button icon="user" url="/about">About</Button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button'

export default {
  components: {
    Logo,
    Button
  }
}
</script>
