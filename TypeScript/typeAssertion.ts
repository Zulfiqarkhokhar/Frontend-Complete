// type assertion

let val: any = 12;

(val as number).toFixed(); // with as we can get the number function or we say type funtions on varriables
// it can as (<number> val).toFixed()

// type casting

let a = Number("12");

console.log(a);

/// type gaurds or type narrowing

function abcd(args: string | number) {
  // here we will get common function of number and string on the args

  if (typeof args === "number") {
    // here we can get all number function on the args
  } else if (typeof args === "string") {
    // here we can get all string functions on args
  } else {
    throw new Error("This is not valid type");
  }
}

abcd(12);
abcd("Hello");
