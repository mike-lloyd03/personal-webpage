import React from 'react'
import './Calculator.css'
// import 'https://mike-lloyd03.github.io/fccSolutions/fonts/mikeFonts.css'

const buttons = [
  { button: "0", id: "zero", type: "number" },
  { button: "1", id: "one", type: "number" },
  { button: "2", id: "two", type: "number" },
  { button: "3", id: "three", type: "number" },
  { button: "4", id: "four", type: "number" },
  { button: "5", id: "five", type: "number" },
  { button: "6", id: "six", type: "number" },
  { button: "7", id: "seven", type: "number" },
  { button: "8", id: "eight", type: "number" },
  { button: "9", id: "nine", type: "number" },
  { button: "÷", id: "divide", type: "operator" },
  { button: "×", id: "multiply", type: "operator" },
  { button: "-", id: "subtract", type: "operator" },
  { button: "+", id: "add", type: "operator" },
  { button: "=", id: "equals", type: "equals" },
  { button: ".", id: "decimal", type: "number" },
  { button: "ON/C", id: "clear", type: "clear" },
  { button: "+/-", id: "plusminus", type: "plusminus" },
];
const doMath = (val1, opp, val2) => {
  let floatVal1 = parseFloat(val1);
  let floatVal2 = parseFloat(val2);
  let result;
  console.log([floatVal1, opp, floatVal2]);

  switch (opp) {
    case "÷":
      return (floatVal1 / floatVal2).toString().slice(0, 9);

    case "×":
      result = floatVal1 * floatVal2;
      return result <= 999999999 ? result.toString().slice(0, 9) : "overflow";

    case "-":
      return (floatVal1 - floatVal2).toString().slice(0, 9);

    case "+":
      result = floatVal1 + floatVal2;
      return result <= 999999999 ? result.toString().slice(0, 9) : "overflow";
    default:
      break
  }
};
const displayValidator = (newVal, display = "0") => {
  if ((newVal === "." && display.includes(".")) || display.length === 9) {
    return display;
  } else if (display === "0") {
    return newVal;
  } else if (display === "-0") {
    return '-'+ newVal;
  } else {
    return display + newVal;
  }
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    this.props.clickHandler(event.target.value, this.props.inputType);
  }

  render() {
    return (
      <button
        onClick={this.clickHandler}
        className="button"
        style={{ gridArea: this.props.id }}
        id={this.props.id}
        value={this.props.button}
      >
        {this.props.button}
      </button>
    );
  }
}

class Display extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="displayBox">
        <span id="grayed">-888888888</span>
        <span id="display">{this.props.display}</span>
        <span id="displayOperators">÷×-+</span>
        <span
          id="displaySelectedOperator"
          dangerouslySetInnerHTML={{ __html: this.props.operator }}
        ></span>
      </div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeVal: "",
      operator: "",
      display: "0",
      negative: false,
      selectedOperator: "",
      lastOperation: ""
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(value, inputType) {
    
    switch (inputType) {
      case "number":
        this.setState(state => {
          if (state.lastOperation !== "operator" &&
          state.lastOperation !== "equals") {
            return { display: displayValidator(value, state.display), lastOperation: 'number'}
          }
          else {
          return { display: displayValidator(value), lastOperation: 'number'}
        } 
        })
        break;

      case "operator":
        //If storeVal is not empty and the last thing we did wasn't hit equals,
        //do the math that is currently set up before moving the display value
        //to the stored value and updating the operator
        this.setState(state => {
          if (state.operator && state.lastOperation !== "equals" && state.lastOperation !== "operator") {
            return {
              display: doMath(state.storeVal, state.operator, state.display),
              lastOperation: 'operator'
            }
          }
          else {return {}}
          }
        )
        
        // //This handles inputting a minus sign following another operator 
        // if (value === '-' && this.state.lastOperation === "operator") {
        //   this.setState({display: '-', lastOperation: 'operator'})
        //   break
        // }
        
        //After all the other checks, do regular operator stuff like moving 
        //the display value into the store value and updating the operator
        this.setState(state => ({
          storeVal: state.display,
          operator: value,
          lastOperation: "operator"
        }));
        
        this.setState(state => {
        switch (state.operator) {
          case "÷":
            return { selectedOperator: "÷&nbsp;&nbsp;&nbsp;" };
          case "×":
            return { selectedOperator: "×&nbsp;&nbsp;" };
          case "-":
            return { selectedOperator: "-&nbsp;" };
          case "+":
            return { selectedOperator: "+" };
          default:
            break
        }})
        break;

      case "equals":
        this.setState(state => ({
          display: doMath(state.storeVal, state.operator, state.display),
          operator: '',
          selectedOperator: "",
          lastOperation: "equals"
        }));
        break;

      case "clear":
        this.setState(state => ({
          storeVal: "",
          operator: "",
          display: "0",
          selectedOperator: "",
          lastOperation: "clear"
        }));
        break;
        
      case "plusminus":
        this.setState(state => ({display: state.display.includes('-') ? state.display.substr(1) : '-' + state.display,
                                lastOperation: "plusminus"}))
        break
      default:
        break
    }
    this.setState(state=> console.log(state))
  }

  render() {
    const buttonComponents = buttons.map(i => (
      <Button
        key={i.id}
        id={i.id}
        inputType={i.type}
        button={i.button}
        clickHandler={this.buttonClick}
      />
    ));

    return (
      <div id="calculatorBG">
        <Display
          display={this.state.display}
          operator={this.state.selectedOperator}
        />
        <div id="buttonGroup">{buttonComponents}</div>
      </div>
    );
  }
}