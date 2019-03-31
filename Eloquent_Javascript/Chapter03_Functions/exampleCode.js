

// fucntion definition
/*
  Function is created with an expression that starts with the keyword function
  Functions have set of parameters and a bdy
*/
const square = function(x) {
  return x * x;
};

console.log(square(12));

// Function that takes no parameter
const makeNoise = function() {
  console.log('Pling!');
};

makeNoise();

// Function that takes two parameters
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));


// Demo for scope
/*
  A bingding is created with var keyword are visible throughout the whole function that they appear in
  or throughout the global scope, if they are in a function
*/
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
// y is not visible here
console.log(x + z);

/*
  Nested scope
  Blocks and functions can be created inside other blocks and functionns, producing multiple degrees of locality
*/
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += 's';
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(0.25, 'cup', 'lemon juice');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'tablespoon', 'olive oil');
  ingredient(0.5, 'teaspoon', 'cumin');
};
hummus(4);

/* 
  Functions as values
*/


/*
  Declaration notation
  Function declarations are not part of the regular top-to-bottom flow of control
  They are conceptually moved to the top of their scope and can be used by all the code in that scope
 */
function square_1(x) {
  return x * x;
}
console.log(square_1(12));

console.log('The future says:', future());

function future() {
  return "You'll never have flying cars";
}

/*
  Arrow functions
  It expresses something like "this input (the parameters) produces this result (the body)"
*/
const power_1 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

// Omit parentheses
const square_2 = (x) => { return x * x; };
const square_3 = x => x * x;

const horn = () => {
  console.log('Toot');
};
horn();

/*
  The call stack
*/

/*
  Optional arguments
*/
// The following code is allowed and executes without any problem
function square_4(x) {  return x * x; };
console.log(square_4(4, true, 'hedgehog'));

// The minus function tries to imitate the - operator by acting on either one or two arguments
function minus(a, b) {
  if (b == undefined) return -a;
  else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// If you write an = operator after a parameter, followed by an expression, the value of that 
// expression will replace the argument when it is not given.
function power_2(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power_2(4));
console.log(power_2(2, 6));

/*
 *  CLOSURE
 *  What happens to local bingdings when the function call that created them is no longer active?
 *  This feature - being albe to reference a specific instance of a local bingding in an enclosing scope
 *  is called closure
 *  A function that references bindings from local scopes around it is called a closure
 * 
 */
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multipler(factor) {
  return number => number * factor;
}
let twice = multipler(2);
console.log(twice(5));

/*
 * Recursion
 * A function that calls itself is called recursive 
 */
function power_3(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power_3(base, exponent - 1);
  }
}
console.log(power_3(2, 3));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return  find(current + 5, `(${history} + 5)`) ||
              find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

