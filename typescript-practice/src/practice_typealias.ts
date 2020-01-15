type Person2 = {
    name: string;
    age?: number;
}

// & : Intersection : 두 개 이상의 타입 합침
type Developer2 = Person & {
    skills: string[]
}

const person2: Person2 = {
    name: '2h'
}

const expert2: Developer2 = {
    name: 'k2h',
    skills: ['js', 'vue']
}

type People2 = Person[];

const people: People2 = [person2, expert2];

type Color = 'red' | 'orange' | 'yellow'
const color2: Color = 'red';
const colors: Color[] = ['red', 'orange']