let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.contact', {
      url:'/',
      controller: 'ContactController as vm',
      templateUrl: 'templates/contact.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;