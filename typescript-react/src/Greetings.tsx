import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    // 생략가능
    optional?: string;
    // 함수 Props
    onclick: (name:string) => void;
};

// React.FC : children 이 자동으로 지정, 필요없는 경우 Props 에서 따로 정해줘야 함
// React.FC : defaultProps 를 쓰고 싶다면 ({name, makr='!}) 으로 작성 필요
// const Greetings: React.FC<GreetingsProps> = ({name, mark}) => (
//     <div>Hello, {name}</div>
// )

function  Greetings({name, mark, optional, onclick}: GreetingsProps) {
    const handleClick = () => onclick(name);
    return (
    <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>Click!</button>
        </div>
    </div>
    )
}

// React.FC => 제대로 작동되지 않음!
Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;