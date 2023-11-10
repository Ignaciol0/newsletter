import React from "react";
import { ReactComponent as Icon } from "./icon-success.svg";
import "./success.css"

function Success(){
    return(
        <body>
            <div>
                <Icon className="icon"></Icon>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
                <button><span>Dismiss message</span></button>
            </div>
        </body>
    )
}
export { Success };