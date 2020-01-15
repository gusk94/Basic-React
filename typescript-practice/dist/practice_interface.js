"use strict";
var Circle = /** @class */ (function () {
    // radius: number;
    // constructor(radius: number) {
    //     this.radius = radius;
    // }
    // private 도 가능 ( public : class 밖에서도 볼 수 있음 / private : class 를 넘어가면 확인 x)
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(3), new Rectangle(2, 3)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: 'hh',
    age: 25
};
var expert = {
    name: 'khh',
    skills: ['js', 'vue', 'react', 'django', 'spring']
};
