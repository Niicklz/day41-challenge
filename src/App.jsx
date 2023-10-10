import React, { useEffect, useState, useRef } from "react";
import "./styles.css"

export const App = () => {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const [currentInput, setCurrentInput] = useState(0);
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")
  const [value5, setValue5] = useState("")
  const [value6, setValue6] = useState("")
  /**Que necesito?
   * Agregar un listener a cada elemento
   * Que deseo obtener?
   * valores de cada elemento
   * que deseo devolver?
   * cadena de texto de digitos introducidos.
   */
  const inputRefs = useRef([]);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleInput = (e, index) => {
    const inputValue = e.target.value;
    const newInputs = [...inputs];
    newInputs[index] = inputValue;
    setInputs(newInputs);
  };
  useEffect(() => {
    inputRefs.current[currentInput].focus();
   
  
  }, [currentInput]);

  const test = (e,setvalue) => {
    
    
    setvalue(e.nativeEvent.data)
    let index = e.target.id;
   
    if (
      e.nativeEvent.inputType === "deleteContentBackward" &&
      currentInput > 0
    ) {
      setCurrentInput(parseInt(index) - 1);
     
      return;
    }
    if (
        e.nativeEvent.inputType === "deleteContentBackward" &&
      currentInput === 0
      
    ) {
      setCurrentInput(0);
     
      return;
    }

    if (currentInput < 5) {
        
      setCurrentInput(parseInt(index)+1);
    }

    
  };
  return (
    <div className="card">
      <h1>Verify Your Account</h1>
      <p className="description">
        <span>We emailed you the six-digit code to cool_guy@email.com.</span>
      
        <span>Enter the code below to confirm your email address.</span>
      </p>
      <div className="inputs-container">
        <input
          id={0}
          pattern="\d*"
          
          ref={(el) => (inputRefs.current[0] = el)}
          className="input-field"
          type="number"
          placeholder="0"
          maxLength={1}
          onChange={(e)=> test(e,setValue1)}
            value={value1}
            min={0}
            max={9}
          required
        />
        <input
          id={1}
          pattern="\d*"
         
          value={value2}
          ref={(el) => (inputRefs.current[1] = el)}
          className="input-field"
          type="number"
          placeholder="0"
          maxLength={1}
          onChange={(e)=> test(e,setValue2)}
          min={0}
          max={9}
        required
          
        />
        <input
          id={2}
          pattern="\d*"
          onChange={(e)=> test(e,setValue3)}
          value={value3}
          ref={(el) => (inputRefs.current[2] = el)}
          className="input-field"
          type="number" 
          placeholder="0"
          maxLength={1}
          min={0}
          max={9}
       required
          
        />
        <input
          id={3}
          pattern="\d*"
          onChange={(e)=> test(e,setValue4)}
          value={value4}
          ref={(el) => (inputRefs.current[3] = el)}
          className="input-field"
          type="number" 
          placeholder="0"
          maxLength={1}
          min={0}
          max={9}
         required
          
        />
        <input
          id={4}
          pattern="\d*"
          onChange={(e)=> test(e,setValue5)}
          value={value5}
          ref={(el) => (inputRefs.current[4] = el)}
          className="input-field"
          type="number" 
          placeholder="0"
          maxLength={1}
          min={0}
          max={9}
          required
          
        />
        <input
          id={5}
          
          pattern="\d*"
          onChange={(e)=> test(e,setValue6)}
          value={value6}
          ref={(el) => (inputRefs.current[5] = el)}
          className="input-field"
          type="number" 
          placeholder="0"
          maxLength={1}
          min={0}
          max={9}
        required
          
        />
       
      </div>
      <div className="alert">This is design only. We didn't actually send you an email as we don't have your email, right?</div>
    </div>
  );
};
