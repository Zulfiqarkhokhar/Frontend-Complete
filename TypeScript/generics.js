// generic function
function printDetail(val) {
    console.log(val);
}
printDetail("Zulfiqar"); // we can give the type while using function or we can leave it, function will automatic inferr it
printDetail(12);
printDetail(true);
printDetail(undefined);
function printObj(obj) {
    // we can define any type here
    console.log(obj);
}
printObj({ name: "Zulfiqar", id: 1 });
// class generics
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("bifbeb");
var b2 = new BottleMaker(12);
console.log(b1);
console.log(b2);
