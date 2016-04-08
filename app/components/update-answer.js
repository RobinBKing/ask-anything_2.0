import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        title: this.get('title'),
        answer: this.get('answer'),
        author: this.get('author'),
        date: this.get('date'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    }
  }
});
