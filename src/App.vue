<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive && isReloadAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive && isReloadAlive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isReloadAlive: true
    }
  },
  methods: {
    reload() {
      this.isReloadAlive = false
      this.$nextTick(() => {
        this.isReloadAlive = true
      })
    }
  }
}
</script>
<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
