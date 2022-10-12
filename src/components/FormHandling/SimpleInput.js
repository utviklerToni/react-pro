import { useState } from "react";
import Card from "../UI/Card";
import "./FormStyle.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  // can use enteredName state to form a valid one
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // blur handler
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === '') {
    // 	setEnteredNameIsValid(false);
    // 	return;
    // }
  };

  // input change handler
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);

    // if (e.target.value.trim() !== '') {
    // 	setEnteredNameIsValid(true);
    // }
  };

  // form submit handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      // setEnteredNameTouched(false);
      return;
    }
    // setEnteredNameIsValid(true);
    // setEnteredNameTouched(true);
    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameInputIsInvalid && <p>Name must not be empty.</p>}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default SimpleInput;
