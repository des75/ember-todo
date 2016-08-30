import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createList(){
      let self = this;
      
      let newList = this.store.createRecord("todo-list", {
	title: "new todo list",
	style: 0,
	priority: 0
      });

      newList.save();
    }
  }
});
