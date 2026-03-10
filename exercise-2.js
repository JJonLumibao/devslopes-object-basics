/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 
const grabCategories = (obj) => Object.keys(obj);
console.log(grabCategories(papaJohns));
console.log(grabCategories(papaJohns.pizzaToppings));

// const verifyValues = (obj, target) => {
//   if(Object.values(obj).length === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

const verifyValues = (obj, target) => Object.values(obj).length === target
console.log(verifyValues(papaJohns, 9));

const getToppingsInfo = (obj) => Object.entries(obj.pizzaToppings);
console.log(getToppingsInfo(papaJohns));

papaJohns.printAd = (topping) => {
  const price = papaJohns.pizzaToppings[topping];
  console.log(`"Welcome to ${papaJohns.name}! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${price}. ${papaJohns.slogan}."`);
};
papaJohns.printAd('bacon');
