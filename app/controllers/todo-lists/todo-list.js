import Ember from 'ember';

export default Ember.Controller.extend({
  listStyles: [1,2,3,4,5,6,7,8,9],
  editableTitle: Ember.computed(function(){
    return this.get("model.title") == "";
  }),
  actions: {
    createListItem(){
      let self = this;
      let lastId = this.store.peekAll("todo-list-item").get("length");

      let newItem = this.store.createRecord("todo-list-item", {
        id: lastId + 1,
        text: self.newListItemText,
        completed: false,
        list: self.model
      });

      this.model.save();

      this.set("newListItemText", "");
    },
    
    showConfigPopover(){
      var self = this;
      this.toggleProperty("isConfigPopoverActive");
    },
    
    setStyle(style){
      this.model.set("style", style);
      this.set("isConfigPopoverActive", false);
    }
  }
});
