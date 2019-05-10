<template>
  <a :href="url" class="btn" v-if="url">
    <template v-if="icon">
      <font-awesome-icon :icon="icon"/>&nbsp;&nbsp;
    </template>

    <slot></slot>
  </a>

  <button class="btn" v-else>
    <template v-if="icon">
      <font-awesome-icon :icon="icon"/>&nbsp;&nbsp;
    </template>

    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['url', 'icon']
  }
</script>
