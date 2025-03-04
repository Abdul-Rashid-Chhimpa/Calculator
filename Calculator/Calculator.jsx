import  { useState } from "react";
import "./Calculator.css";

const calculator = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
    // console.log(value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button key={char} onClick={() => (char === "=" ? handleCalculate() : handleClick(char))}>
            {char}
          </button>
        ))}
        <button onClick={handleClear} className="clear">
          C
        </button>
      </div>
    </div>
  );
};

export default calculator;
