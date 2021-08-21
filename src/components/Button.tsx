import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps ){    
    return(
        <button className= {`button ${isOutlined ? 'outlined' : ''}`}
        {...props}
        />
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
