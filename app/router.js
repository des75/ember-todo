import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-lists', function() {
    this.route('todo-list', {path: ":id"});
    this.route('todo-list', {path: ":id/:slug"});
  });
  this.route('login', {path: "/"});
});

export default Router;
