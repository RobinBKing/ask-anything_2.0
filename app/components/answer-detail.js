import Ember from 'ember';

export default Ember.Component.extend({
  userBookmarks: Ember.inject.service(),

  actions: {
    addBookmark(answer) {
      this.get('userBookmarks').add(answer);
    },

    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
