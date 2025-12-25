// function types

function detail(name: string, age: number, cb: (args: string) => void) {
  cb(`Hello ${name}`);
  console.log(`You are ${age} years old`);
}

detail("Zulfi", 27, (args: string) => {
  console.log(args);
});

// optional and default parameters

function showDetail(name: string, age: number = 0, gender?: string) {
  // age is default  and gender is optional
  console.log(name);
  console.log(age);
  console.log(gender);
}

showDetail("zulfiqar");

// rest

function showNums(...arr: number[]) {
  console.log(arr);
}

showNums(1, 2, 3, 4, 5, 6, 7, 8, 9);

//spread

let arr = [1, 2, 3, 4, 5];

let arr2 = [...arr];
