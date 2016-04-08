import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
