/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const Jollibee = {
  name: 'Jollibee',
  cuisines: ['ChickenJoy', 'Burger Steak', 'Jolly Spaghetti'],
  numberOfStars: 5,
  favorited: true
};

Jollibee.address = '123 Street Dr';
Jollibee.zipcode = 12345;
Jollibee.acceptsReservations = false;

Jollibee.numberOfStars = 4.8;
Jollibee.favorited = false;
Jollibee.cuisines.push('Yumburger');


const retrieveProperty = function(obj, key) {
  if(!obj.hasOwnProperty(key)) {
    return 'The information you requested does not exist.';
  } else {
    return obj[key];
  }
}

console.log(retrieveProperty(Jollibee, 'state'));