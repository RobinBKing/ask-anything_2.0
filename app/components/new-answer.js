import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer1() {
      var params = {
        title: this.get('title'),
        question: this.get('question'),
        author: this.get('author'),
        date: this.get('date'),
      };
      
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
