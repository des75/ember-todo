import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
          authenticator = 'authenticator:token';

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.set("authentificationError", null);
      }, (err) => {
        this.set("authentificationError", "Your username or password is wrong, please try again");
      });
    },

    register: function(){
      this.store.createRecord("client", {
        name: "Any Name",
        email: this.get("identification"),
        password: this.get("password")
      }).save();
    }
  }
});
