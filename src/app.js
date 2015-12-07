import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from 'router-config';

@inject(Router, AppRouterConfig)

export class App {
  constructor(router, appRouterConfig) {

    this.router = router;

    // The application's configuration, including the
    // route definitions that we've declared in router-config.js
    this.appRouterConfig = appRouterConfig;
  };

  activate() {

    // Here we run the configuration when the app loads
    this.appRouterConfig.configure();

  };
}
