export default {
  info: '时间工具',
  icon: '',
  route: [{
    path: '/time/timestamp',
    name: '时间戳工具',
    component: () => import('./timestamp.vue')
  }]
}
