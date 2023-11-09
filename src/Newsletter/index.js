import React from 'react';
import './Newsletter.css'
import {ReactComponent as Illustration} from "./illustration-sign-up-desktop.svg"
import { ReactComponent as ListIcon } from './icon-list.svg';
function Newsletter(){
    return(
    <div id='Main'>
        <div>
            <h1>Stay updated!</h1>
            <p className='description'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li><ListIcon className="icon"></ListIcon><p>Product discovery and building what matters</p></li>
                <li><ListIcon className="icon"></ListIcon><p>Measuring to ensure updates are a success</p></li>
                <li><ListIcon className="icon"></ListIcon><p>And much more!</p></li>
            </ul>
            <span className='holder'>Email address</span>
            <input placeholder='email@company.com'></input>
            <button><span className='button-text'>Subcribe to monthly newsletter</span></button>
        </div>
        <Illustration></Illustration>
    </div>
)}
export { Newsletter };