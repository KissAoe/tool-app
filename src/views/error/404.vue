<template>
  <div class="page-error">
    <h1 class="state">404</h1>
    <p class="desc">页面不存在, 请检查链接是否正确!</p>
  </div>
</template>

<style lang="less" scoped>
.page-error {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.state {
  font-weight: bold;
  font-size: 72px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.24);
  margin: 0;
  margin-bottom: 12px;
}
.desc {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.38);
  margin: 0;
}
</style>
