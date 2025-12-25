// generic function

function printDetail<T>(val: T): void {
  console.log(val);
}

printDetail<string>("Zulfiqar"); // we can give the type while using function or we can leave it, function will automatic inferr it
printDetail<number>(12);
printDetail<boolean>(true);
printDetail<undefined>(undefined);

// interface generics

interface Device<T> {
  name: string;
  id: T;
}

function printObj(obj: Device<number>) {
  // we can define any type here
  console.log(obj);
}

printObj({ name: "Zulfiqar", id: 1 });

// class generics

class BottleMaker<T> {
  constructor(public key: T) {}
}

let b1 = new BottleMaker("bifbeb");
let b2 = new BottleMaker(12);

console.log(b1);
console.log(b2);
