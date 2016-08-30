import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['editable-label'],
  classNameBindings: ["editable:editable"],
  editable:  false,
  type: "text",
  actions: {
    startEditing(){
      this.set("editable", true);
    },
    stopEditing(){
      this.set("editable", false);
    }
  },
  doubleClick() {
    this.toggleProperty("editable");
    return true;
  },
  keyPress(e){
    if(e.keyCode === 13){
      this.toggleProperty("editable");
    }
  },
  didRender() {
    this._super(...arguments);

    if(this.get("editable")){
      this.$("input").focus();
    }
  }
});
