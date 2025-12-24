// interface and type alias
//defining interface
//using interface to define object shapes
// extending interfaces
// type alias
// intersection types

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // with ? the varriable become optional to give or not
}

function print(obj: User) {
  // obj is type of user interface which will take the object of user interface shape
  console.log(obj);
}

print({ name: "Ali", email: "Zulfiqar", password: "12345" });

// extending interface

interface Student extends User {
  /// get the properies of user interface as well like inheritance
  id: number;
  age: number;
}

function getStudent(obj: Student) {
  console.log(obj.email);
}

// type alias

type text = string;

let name: text;

type args = string | null;

function getObj(obj: args) {}

getObj(null);

// union and intersection

let a: string | null; // union

type Person = {
  name: string;
  email: string;
};

type SuperAdmin = Person & {
  age: number;
  getData(name: string): SuperAdmin;
};

function abcd(obj: SuperAdmin): void {
  obj.getData("");
}
