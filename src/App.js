import React, { useState } from "react";
import "./styles.css";
import { evaluate } from "mathjs";
function App() {
  const [expression, setExpression] = useState(0);
  const handleclick = (value) => {
    let newExpression = expression + value.toString();
    setExpression(newExpression);
  };
  const handleResult = () => {
    let result;
    try {
      result = evaluate(expression);
      setExpression(+result.toFixed(3).toString());
    } catch (err) {
      setExpression("Invalid Exprssion!");
      setTimeout(() => {
        clearDisplay();
      }, 1000);
    }
  };
  const deletekey = () => {
    if (expression.length >= 0 && expression !== 0) {
      let newExpression = expression.substr(0, expression.length - 1);
      console.log(newExpression.length);
      if (newExpression.length <= 0) setExpression(0);
      else {
        setExpression(newExpression);
      }
    } else {
      console.log(expression.length);
    }
  };
  const clearDisplay = () => {
    setExpression(0);
  };
  return (
    <div className="cal">
      <div className="container">
        <h1>Simple Calculator</h1>
        <div className="display">{expression}</div>
        <div className="buttons">
          <div className="row">
            <button id="clear" onClick={clearDisplay}>
              Ac
            </button>
            <button id="delete" onClick={deletekey}>
              DELETE
            </button>
            <button id="equal" onClick={handleResult}>
              =
            </button>
            <button id="divide" onClick={() => handleclick("/")}>
              /
            </button>
          </div>
          <div className="row">
            <button id="7" onClick={(id) => handleclick(7)}>
              7
            </button>
            <button id="8" onClick={() => handleclick(8)}>
              8
            </button>
            <button id="9" onClick={() => handleclick(9)}>
              9
            </button>
            <button id="*" onClick={() => handleclick("*")}>
              *
            </button>
          </div>
          <div className="row">
            <button id="4" onClick={(id) => handleclick(4)}>
              4
            </button>
            <button id="5" onClick={() => handleclick(5)}>
              5
            </button>
            <button id="6" onClick={() => handleclick(6)}>
              6
            </button>
            <button id="subtract" onClick={() => handleclick("-")}>
              -
            </button>
          </div>
          <div className="row">
            <button id="1" onClick={(id) => handleclick(1)}>
              1
            </button>
            <button id="2" onClick={() => handleclick(2)}>
              2
            </button>
            <button id="3" onClick={() => handleclick(3)}>
              3
            </button>
            <button id="add" onClick={() => handleclick("+")}>
              +
            </button>
          </div>
          <div className="row">
            <button id="0" className="zero" onClick={() => handleclick(0)}>
              0
            </button>
            <button id="dot" onClick={() => handleclick(".")}>
              .
            </button>
            <button id="percentile" onClick={() => handleclick("%")}>
              %
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
