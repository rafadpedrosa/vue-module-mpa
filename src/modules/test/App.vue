<template>
    <div class="test-module">
        <h1>{{ this.message }}</h1>
    </div>
</template>

<script>
  export default {
    name: 'main-content',
    components: {},
    data () {
      return {}
    },
    computed: {
      message () {
        return this.$store.state.APP_NAME
      }
    }
  }
</script>

<style lang="scss"></style>
