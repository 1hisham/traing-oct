var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
    console.log(i);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
