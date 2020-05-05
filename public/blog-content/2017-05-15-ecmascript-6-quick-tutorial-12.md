---
title: Ecmascript 6 Quick Tutorial 1/2
date: 2017-05-15T12:29:52+00:00
categories:
  - Uncategorized
---
## "let" Keyword

In Ecmascript 6 you can use let keyword instead of var. The difference is; variables defined with var are function scoped, and the ones defined with let are block scoped.



``` js
{
  let variable = 'value';
}

console.log(variable);

/*
Exception: ReferenceError: variable is not defined
@Scratchpad/1:5:1
*/

// This would be working with var keyword.
```

``` js
function foo () {
  console.log(typeof bar);
  let bar = 'baz';
}

foo();
/*
Exception: ReferenceError: can't access lexical declaration `bar' before initialization
foo@Scratchpad/1:2:3
@Scratchpad/1:6:1
*/

// Output would be 'undefined' with var keyword.
```

## "const" Keyword

Just like let, variables with const are block scoped. Values of these variables can&#8217;t be changed after definition. Just like other languages.

``` js
const myConst = 'value';

myConst = 'value2';
/*
Exception: TypeError: invalid assignment to const `myConst'
@Scratchpad/1:3:1
*/
```

``` js
// Note that, this won't throw an exception because of different scopes:

const myConst = 'value';
{
  const myConst = 'value2';
}
```

## Array/Object Matching

ES 6 lets us to match object or array to different variables, and even skip some:

``` js
function myFunction()
{
  return [1, 2, 3];
}

let var1, var2, var3;
[var1, , var3, var2 = -1] = myFunction();

console.log(var1, var2, var3); // 1 -1 3
```

``` js
function myFunction()
{
  return {
    A: 1,
    B: 2,
    deep: {
      C: 3,
      D: 4
    }
  };
}

let {A: a, B: b, deep: {C: c, D:d}, E: e = -1 } = myFunction();

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // -1 (Default value)
```

## Default Function Arguments

Functions can take default arguments, default arguments as expressions and can take undefined parameters:

``` js
function myFunction(x = 1, y = 2, z = 3 + 4)
{
  console.log(x, y, z);
}
myFunction(undefined, 6, 7)
```

## Rest Parameter and Spread Operator (&#8230;)

&#8230; operator has 2 use:

  1. Can be used before a function parameter to make variable length parameter,
  2. Can be used to expand an array as function parameters.

``` js
function sum(a, b, ...args)
{
  let result = a + b;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  console.log(result);
}

sum(1, 2);
// 3
sum(1, 2, 3);
// 6
sum(1, 2, 3, 4);
// 10

let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

sum(...numbers);
// 4950
```

## Multiline Strings

You can define multiline strings with backticks:

``` js
let myString = `
Have
Some
Lines!`;

console.log(myString);
```

## String Interpolation

There is string interpolation at ES6, you don&#8217;t have to concatenate variables.

``` js
let bodies = 'bodies';

console.log(`Let the ${bodies} hit the floor!`);
```

## Arrow Functions

Arrow functions are short versions of function definitions:

``` js
// single line
var sum = (x, y) => x + y;
console.log(sum(1, 2));

// multi line
var sum = (x, y) => {
    /* ... */
    return x + y;
};
console.log(sum(1, 2));

// function as parameter of function
funcTakesFuncParameters((a) => a * a);

// inline use
console.log(((a) => a * a) (5));
// prints 25
```

## "for – of" Loop

In ES6 there is a loop just like foreach in other languages.

``` js
let myArr = [1,2,3];

for (item of myArr) {
  console.log(item);
}
```

You can iterate your custom collections with a small modification on collection.

``` js
var myCollection = {
    elements:  [1, 2, 3],
    [Symbol.iterator]: function(){
        let elements = this.elements;
        let size = this.elements.length - 1;
        let pointer = 0;
        return {
            next: () => {
                if(pointer > size)
                {
                    return { value: undefined, done: true };
                }
                else
                {
                    pointer++;
                    return { value: elements[pointer - 1], done: false };
                }
            },
        };
    }
}

for(var item of myCollection) {
    console.log(item);
}
```

## Generators

In ES6 **function*** and **yield** keywords are used to create generators. Just like in PHP.

``` js
function* myGenerator(start, limit, step = 1)
{
  for (let i = start; i <= limit; i += step) {
    yield i;
  }
}

console.log(...myGenerator(10, 20, 2));

// Output: 10 12 14 16 18 20
```

PHP Version:

``` php
function myGenerator($start, $limit, $step = 1) {
    for ($i = $start; $i <= $limit; $i += $step) {
        yield $i;
    }
}

var_dump(iterator_to_array(myGenerator(10, 20, 2)));

// Output: array(6) { [0]=> int(10) [1]=> int(12) [2]=> int(14) [3]=> int(16) [4]=> int(18) [5]=> int(20) }
```

## Numeric Bases

``` js
// Decimal
var decimal = 16;
console.log(decimal);

// Binary
var binary = 0b10000;
console.log(binary);

// Octal Before ES6
var octal = 020;
console.log(octal);
// Octal ES6
var octal = 0o20;
console.log(octal);

// Hexadecimal
var hexadecimal = 0x10;
console.log(hexadecimal);

// All outputs 16
```
