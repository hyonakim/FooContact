import angular from 'angular';
import 'angular-ui-router';

// Configs
import config from './config';

// Constants
import PARSE from './constants/parse.constant';

// Services
import ContactService from './services/contact.services';

// Controllers
import HomeController from './controllers/home.controller';
import ContactController from './controllers/contact.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('ContactController', ContactController)
  .service('ContactService', ContactService)
;