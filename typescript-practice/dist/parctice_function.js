"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function Arraysum(numbers) {
    return numbers.reduce(function (res, number) { return res + number; }, 0);
}
var total = Arraysum([1, 2, 3, 4, 5]);
// 만약 함수가 아무것도 반환하지 않는다면 void 설정v
function returnNothing() {
    console.log('hellow world');
}
