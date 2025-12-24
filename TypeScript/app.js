// primitive types(number, string,boolean)
var a = 12;
var b = "Zulfiqar";
var c = true;
// arrays
var arr1 = [1, 2, 3, 4];
var arr2 = ["ali", "khan"];
var arr3 = [true, false];
var arr = [1, 2, 3, 4, "zulfiqar", false];
// tuples
var tup = ["Zulfiqar", 28];
// enum--> enumeration
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
UserRole.GUEST;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDDONED"] = "abodoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND;
// Any , Unknown, Void, Null, Undefined, Never
//1. Any
var num; // any type
num = 12;
num = "twelve";
num.toUpperCase();
//2. Unknow
var age;
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
function print() {
    console.log("Hello World");
}
// Null
//In TypeScript, null represents the intentional absence of a value. It’s a real value and a type.
var val;
// undefined
// undefined means “value not assigned”
var value;
//never never
// Meaning
// A value that never occurs.
// Function never returns
// Code path is impossible
// Used for exhaustive checks
