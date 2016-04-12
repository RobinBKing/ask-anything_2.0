import Ember from 'ember';

export default Ember.Service.extend({
  bookmarks: [],

  add(answer) {
    // this.get('userBookmarks').pushObject(answer);
    this.get('bookmarks').pushObject(answer);
    console.log(this.get('bookmarks'));
  },

  remove(answer){
    var index = this.get('bookmarks').indexOf(answer);
    this.get('bookmarks').removeAt(index, 1);
  }
});
