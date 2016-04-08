import Ember from 'ember';

export function answerRatings(params/*, hash*/) {
  var aveRate = parseInt(params.ratings);

  if (aveRate ) {
    if (aveRate = 5){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
    } else if (aveRate = 4){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span>');
    } else if (aveRate = 3){
      return Ember.String.htmlSafe('<<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
    } else if (aveRate = 2){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
    } else if (aveRate = 1){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
    } else {
      return Ember.String.htmlSafe('</span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
    }
  }
}

export default Ember.Helper.helper(answerRatings);
