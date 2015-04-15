import Ember from "ember";

export default Ember.Controller.extend({
  test: false,
  actions: {
    higher: function(model){
      this.transitionToRoute('helpers-documentation.liquid-with.page', model.get('id')+1);
    }
  }
});
