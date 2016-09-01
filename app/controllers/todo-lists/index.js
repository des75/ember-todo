import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createList(){
      let self = this;
      let lastId = this.store.peekAll("todo-list").get("length");
      
      let newList = this.store.createRecord("todo-list", {
	id: lastId + 1,
	title: "",
	style: 1,
	priority: 0
      });

      newList.save();

      this.transitionToRoute("todo-lists.todo-list", newList);
    },
    showFiltersPopover(){
      this.toggleProperty("isFiltersPopoverActive");
    }
  }
});
