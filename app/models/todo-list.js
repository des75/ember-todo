import DS from 'ember-data';
import attr from 'ember-data/attr';
import {  hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr(),
  style: attr(),
  priority: attr(),
  
  entries: hasMany("todo-list-item")
});
