import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
  actions: {
    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
