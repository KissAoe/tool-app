<template>
  <div class="sidebar-container">
    <div class="sidebar-aside">
      <el-menu default-active="home" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="false">

        <el-menu-item index="home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="time">
          <template slot="title">
            <i class="el-icon-location"></i><span>时间类</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="timestamp">时间戳工具</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="text">
          <template slot="title">
            <i class="el-icon-location"></i><span>文本类</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="json">Json工具</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>

    </div>
    <div class="sidebar-main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash'

export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    handleSelect (key: string, keyPath: Array<string>) {
      const selectPath = `/${_.join(keyPath, '/')}`
      if (location.hash === `#${selectPath}`) {
        return
      }
      this.$router.replace({ path: selectPath })
    }
  }
}
</script>

<style lang='less'>
.sidebar-container {
  display: flex;
  height: 100%;
  min-height: 700px;
}

.sidebar-aside {
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
}

.sidebar-main {
  min-width: 0;
  flex: 1 1 auto;
  background-color: #f7f8fc;
  padding: 20px;
}
</style>
