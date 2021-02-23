import { useState } from 'react';

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [count, setCount] = useState(1)

    const increment = () =>{
        setCount(count+1);
    }

    return(
        <button 
            type="button" 
            style={{backgroundColor: props.color}}
            onClick={increment}
        >
            {props.children} <strong>{count}</strong>
        </button>
    )
}