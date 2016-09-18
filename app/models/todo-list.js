import DS from 'ember-data';
import attr from 'ember-data/attr';
import {  hasMany, belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr(),
  style: attr(),
  priority: attr(),
  client: belongsTo("client"),
  
  entries: hasMany("todo-list-item"),
  slug: Ember.computed("title", function() {
    return Ember.String.dasherize(this.get('title'));
  })
});
