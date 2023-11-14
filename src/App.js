import React, { useState } from "react";
import { Newsletter } from "./Newsletter";
import { Success } from "./Newsletter-Success";
import "./App.css"

function App() {
  const [Email, setEmail] = useState('');
  const [Done,setDone] = useState(false);
  const [input_element, setinput_element] = useState('');
  const [Dismiss,setDismiss] = useState(false);
  if (Done === false){
    return(
    <Newsletter setEmail={setEmail} input_element={input_element} setinput_element={setinput_element} setDone={setDone}></Newsletter>)
  } else {
    if (!Dismiss == true){
      return (<Success email={Email} setDismiss={setDismiss}></Success>)
    } else {
      return (<body></body>)
    }
    
  }
}

export default App;
