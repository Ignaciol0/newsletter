import React, { useRef } from 'react';
import NewsCss from './Styles.module.css'
import {ReactComponent as Illustration} from "./illustration-sign-up-desktop.svg"
import { ReactComponent as ListIcon } from './icon-list.svg';
import { useState } from 'react';


function Newsletter({ setEmail, setDone, setinput_element, input_element }){
    const onClick = (event)=>{
        if (input_element.lenght !== 0){
        if (input_element.value.includes('@')){
          setDone(Done => !Done)  
        }else{
            input_element.setCustomValidity("Invalid")
        }}
        
    }
    const onChange = (event)=>{
        setinput_element(event.target)
        setEmail(input_element.value)
    }
    return(
<body>
    <div id={NewsCss.main}>
        <div id={NewsCss.innerDiv}>
            <h1 id={NewsCss.title}>Stay updated!</h1>
            <p className={NewsCss.description} id={NewsCss.p}>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul id={NewsCss.ul}>
                <li id={NewsCss.li}><ListIcon className={NewsCss.icon}></ListIcon><p id={NewsCss.p}>Product discovery and building what matters</p></li>
                <li id={NewsCss.li}><ListIcon className={NewsCss.icon}></ListIcon><p id={NewsCss.p}>Measuring to ensure updates are a success</p></li>
                <li id={NewsCss.li}><ListIcon className={NewsCss.icon}></ListIcon><p id={NewsCss.p}>And much more!</p></li>
            </ul>
            <div className={NewsCss.inputLabel}><span className={NewsCss.holder}>Email address</span><span className={NewsCss.error} >Invalid Email</span></div>
            <input placeholder='email@company.com' id={NewsCss.input} onChange={onChange} ></input>
            <button onClick={onClick} id={NewsCss.button}><span className={NewsCss.buttonText}>Subcribe to monthly newsletter</span></button>
        </div>
        <Illustration></Illustration>
    </div>
</body>
)}
export { Newsletter };