import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [IsValid, SetIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      SetIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      SetIsValid(false);
      return; 
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style = {{color: !IsValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
          style = {
            {border: !IsValid ? '2px solid red' : '2px solid black'}
          } 
          type="text" onChange={goalInputChangeHandler} 
          />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
