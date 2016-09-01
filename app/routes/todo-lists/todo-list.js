import Ember from 'ember';

export default Ember.Route.extend({  
  model(params){
    return this.store.peekRecord("todo-list", params.id);
  },
  serialize: function(model, params) {
    return { slug: model.get('slug'), id: model.get("id")};
  }
});
