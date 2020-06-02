<template>
  <div id="app">
    <AsideMenu/>
  </div>
</template>

<style lang="less">
body {
  margin: 0px;
}
</style>

<script>
import AsideMenu from '@/components/AsideMenu.vue'

export default {
  name: 'App',
  components: { AsideMenu }
}
</script>
