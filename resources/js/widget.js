Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'trend_widget',
      path: '/trend_widget',
      component: require('./components/Widget'),
    },
  ])
})
