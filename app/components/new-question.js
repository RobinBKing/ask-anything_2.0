import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        author: this.get('author'),
        date: this.get('date'),
      };

      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
