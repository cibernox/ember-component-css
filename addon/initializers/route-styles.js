import Router from '@ember/routing/router';
import { getOwner } from '@ember/application';
import initRouteStyles from '../utils/init-route-styles';
import { gte } from "ember-compatibility-helpers";

if (!gte("3.6.0-beta.1")) {
  Router.reopen({
    didTransition(routes) {
      this._super(...arguments);
      initRouteStyles(getOwner(this), routes);
    }
  });
}

export default {
  initialize() { /* intentionally empty */ }
};
