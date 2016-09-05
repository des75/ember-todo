import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  afterModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.set('session.attemptedTransition', transition);
      //alert("qwesd")
      //return this.transitionTo("login");
    } else {
      //return this.transitionTo("my.companies");
    }
  }
});
