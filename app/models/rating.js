import DS from 'ember-data';

export default DS.Model.extend({
  rateNbr: DS.attr(),
  answer: DS.belongsTo('answer', {async: true})
});
