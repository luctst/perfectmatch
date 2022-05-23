export default () => ({
  routes: [
    {
      path: '/a',
      apiRoutes: '/articles',
    },
    {
      path: '/p',
      apiRoutes: '/projects',
    },
    {
      path: '/articles/:id',
      apiRoutes: '/articles/:id',
    },
    {
      path: '/projects/:id',
      apiRoutes: '/projects/:id',
    },
    {
      path: '/',
      apiRoutes: 'accueil',
      compoCategoryToFetch: 'accueil,article,footer',
    },
    {
      path: '/about',
      apiRoutes: 'about',
      compoCategoryToFetch: 'about,footer',
    },
    {
      path: '/wedding/complete',
      apiRoutes: 'wedding-complete',
      compoCategoryToFetch: 'wedding,footer',
    },
    {
      path: '/wedding/partial',
      apiRoutes: 'wedding-partial',
      compoCategoryToFetch: 'wedding,footer',
    },
    {
      path: '/wedding/dday',
      apiRoutes: 'wedding-dday',
      compoCategoryToFetch: 'wedding,footer',
    },
    {
      path: '/events',
      apiRoutes: 'events',
      compoCategoryToFetch: 'event,footer',
    },
    {
      path: '/contact',
      apiRoutes: 'contact',
      compoCategoryToFetch: 'contact,footer',
    },
  ]
})