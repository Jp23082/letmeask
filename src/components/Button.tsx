import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps ){    
    return(
        <button className="button" {...props}/>
    )
}

//Propriedades do button
// type ButtonProps = {
//     children?: string
//     text?: string
// }
//named export
// export function Button(props:ButtonProps){
// <button>{props.text || props.children ||'Default'}</button>
