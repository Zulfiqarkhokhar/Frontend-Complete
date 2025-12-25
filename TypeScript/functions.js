// function types
function detail(name, age, cb) {
    cb("Hello ".concat(name));
    console.log("You are ".concat(age, " years old"));
}
detail("Zulfi", 27, function (args) {
    console.log(args);
});
// optional and default parameters
function showDetail(name, age, gender) {
    if (age === void 0) { age = 0; }
    // age is default  and gender is optional
    console.log(name);
    console.log(age);
    console.log(gender);
}
showDetail("zulfiqar");
// rest
function showNums() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
showNums(1, 2, 3, 4, 5, 6, 7, 8, 9);
