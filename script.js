const makeChange = (c) => {
  // your name here
	const coinValues = {
    q: 25, // Quarter value in cents
    d: 10, // Dime value in cents
    n: 5,  // Nickel value in cents
    p: 1   // Penny value in cents
  };

  let change = {};

  // Calculate quarters
  change.q = Math.floor(c / coinValues.q);
  c %= coinValues.q;

  // Calculate dimes
  change.d = Math.floor(c / coinValues.d);
  c %= coinValues.d;

  // Calculate nickels
  change.n = Math.floor(c / coinValues.n);
  c %= coinValues.n;

  // Calculate pennies
  change.p = c; 

  return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
