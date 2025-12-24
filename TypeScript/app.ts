// primitive types(number, string,boolean)

let a = 12;
let b = "Zulfiqar";
let c = true;

// arrays

let arr1 = [1, 2, 3, 4];
let arr2 = ["ali", "khan"];
let arr3 = [true, false];

let arr = [1, 2, 3, 4, "zulfiqar", false];

// tuples

let tup: [string, number] = ["Zulfiqar", 28];

// enum--> enumeration

enum UserRole {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

UserRole.GUEST;

enum StatusCodes {
  ABANDDONED = "abodoned status code 500",
  NOTFOUND = "not found status code 404",
}

StatusCodes.NOTFOUND;

// Any , Unknown, Void, Null, Undefined, Never

//1. Any

let num; // any type

num = 12;
num = "twelve";

num.toUpperCase();

//2. Unknow

let age: unknown;

age = 11;

age = "eleven";

if (typeof age === "string") {
  age.toUpperCase(); // ✅ Safe
}

// difference between any and unknown

// any---> assign any value and perform any operation but it may fail while runtime
// unknown ---> assigne any value but cannot use without type checking

// void
// if function does not return any thing type it as void
function print(): void {
  console.log("Hello World");
}

// Null
//In TypeScript, null represents the intentional absence of a value. It’s a real value and a type.
let val: null;

// undefined
// undefined means “value not assigned”
let value: undefined;

//never never
// Meaning

// A value that never occurs.

// Function never returns

// Code path is impossible

// Used for exhaustive checks
