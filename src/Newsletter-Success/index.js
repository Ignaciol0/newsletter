import React from "react";
import { ReactComponent as Icon } from "./icon-success.svg";
import success from "./Styles.module.css"

function Success(props){
    return(
    <body>
        <div className={success.main}>
            <Icon className={success.Icon}></Icon>
            <h1 className={success.title}>Thanks for subscribing!</h1>
            <p className={success.paragraph}>A confirmation email has been sent to <b>{props.email}</b>. Please open it and click the button inside to confirm your subscription.</p>
            <button className={success.button} onClick={()=>{props.setDismiss(true)}}><span className={success.span}>Dismiss message</span></button>
        </div>
    </body>)
}
export { Success };