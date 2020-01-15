// class -> 특정 조건 준수를 명시 -> interface : class 의 요구사항 설정
// implements : 클래스 선언 -> 해당 클래스가 interface 의 요구사항을 구현한다는 것 명시
interface Shape {
    // Shape interface : getArea 함수 필수, 반환값 number
    getArea(): number;
}

class Circle implements Shape {
    // radius: number;

    // constructor(radius: number) {
    //     this.radius = radius;
    // }

    // private 도 가능 ( public : class 밖에서도 볼 수 있음 / private : class 를 넘어가면 확인 x)
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(3), new Rectangle(2, 3)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})


interface Person {
    name: String;
    age?: number; // 설정 안해도 상관 x
}
// Person 상속 => name & age 상속!
interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: 'hh',
    age: 25
}

const expert: Developer = {
    name: 'khh',
    skills: ['js', 'vue', 'react', 'django', 'spring']
}