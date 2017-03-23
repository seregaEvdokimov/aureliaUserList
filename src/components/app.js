export class App {
  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      {
        route: '',
        name: 'Home',
        title: 'Home page',
        nav: true,
        moduleId: './contact/home/home'
      },
      {
        route: 'create',
        name: 'Create',
        title: 'Create page',
        nav: true,
        moduleId: './contact/create/create'
      },
      {
        route: 'profile',
        name: 'User List',
        nav: true,
        moduleId: './contact/profile/profile'
      }
    ]);

    this.router = router;
  }

  constructor() {}
}