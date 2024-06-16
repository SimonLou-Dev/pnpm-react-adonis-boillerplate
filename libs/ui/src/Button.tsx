import * as React from "react";
interface ButtonProps {

    type: "default" | "big";
    children: React.ReactNode;
    disabled: boolean;

}


export const Button = (props: ButtonProps) => {
    return <button className={props.type} disabled={props.disabled}>{props.children}</button>
}