import initRouteStyles from '../utils/init-route-styles';
import { gte } from "ember-compatibility-helpers";

export function initialize(appInstance) {
  if (gte("3.6.0-beta.1")) {
    let router = appInstance.lookup('service:router');
    router.on('routeDidChange', function(transition) {
      initRouteStyles(appInstance, transition.routeInfos);
    });
  }
}

export default {
  initialize
};
