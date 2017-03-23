export class Profile {
    configureRouter(config, router) {
        config.map([
            {
                route: '',
                name: 'User List',
                title: 'User List page',
                nav: true,
                moduleId: '../list/list'
            },
            {
              route: 'contact/:id',
              name: 'Contact',
              title: 'Contact page',
              moduleId: '../detail/detail'
            }
        ]);

        this.router = router;
    }
}