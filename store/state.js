export default () => ({
  routes: [
    {
      path: '/articles',
      apiRoutes: '/articles',
    },
    {
      path: '/articles/:id',
      apiRoutes: '/articles/:id',
    },
    {
      path: '/projects/:id',
      apiRoutes: '/articles/:id',
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
      compoCategoryToFetch: 'wedding',
    },
    {
      path: '/wedding/partial',
      apiRoutes: 'wedding-partial',
      compoCategoryToFetch: 'wedding',
    },
    {
      path: '/events',
      apiRoutes: 'events',
      compoCategoryToFetch: 'event,footer',
    },
    {
      path: '/contact',
      apiRoutes: 'contact',
      compoCategoryToFetch: 'contact',
    },
  ]
})