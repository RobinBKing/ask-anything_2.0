import Ember from 'ember';

export function answerRatings(params) {
  // console.log(params);
  // var answer = params[0];
  var rating = 0;
  rating = parseInt(params);
  if (rating === 5){

    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (rating === 4){

    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if (rating === 3){

    return Ember.String.htmlSafe('<<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if (rating === 2){
      console.log(rating);
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else if (rating === 1){

    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
  } else {

    return Ember.String.htmlSafe('</span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>');
  }
}

export default Ember.Helper.helper(answerRatings);
