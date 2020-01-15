function sum(x:number, y:number): number {
    return x+y
}

sum(1, 2)

function Arraysum(numbers: number[]): number {
    return numbers.reduce((res, number) => res + number, 0);
}

const total = Arraysum([1, 2, 3, 4, 5])

// 만약 함수가 아무것도 반환하지 않는다면 void 설정v
function returnNothing(): void {
    console.log('hellow world')
}