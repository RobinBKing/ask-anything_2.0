import Ember from 'ember';

export default Ember.Component.extend({
  // updateQuestionForm: false,
  sortBy: ['date:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    // update(question, params) {
    //   this.sendAction('update', question, params);
    // },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
