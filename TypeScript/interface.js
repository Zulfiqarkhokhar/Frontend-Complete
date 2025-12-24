// interface and type alias
//defining interface
//using interface to define object shapes
// extending interfaces
// type alias
// intersection types
function print(obj) {
    // obj is type of user interface which will take the object of user interface shape
    console.log(obj);
}
print({ name: "Ali", email: "Zulfiqar", password: "12345" });
function getStudent(obj) {
    console.log(obj.email);
}
var name;
function getObj(obj) { }
getObj(null);
// union and intersection
var a; // union
function abcd(obj) {
    obj.getData("");
}
