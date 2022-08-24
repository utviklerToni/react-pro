import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
// import ErrorModal from '../UI/ErrorModal';
import './test.css';
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';

const Test = (props) => {
   console.log(props);
   const [error, setError] = useState();
   const nameInputRef = useRef();
   const msgInputRef = useRef();

   const addHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredMsg = msgInputRef.current.value;

      if (enteredName.trim().length === 0 || enteredMsg.trim().length === 0) {
         setError({
            title: 'invalid input',
            message: 'please enter a valid name and age',
         });
         return;
      }

      // console.log(enteredName, enteredMsg);
      props.onTest(enteredName, enteredMsg);
   };

   return (
      <div className=''>
         <Card className={classes.input}>
            <form
               onSubmit={addHandler}
               className='form-container d-flex flex-dir'
            >
               <h1>Testing useRefs</h1>

               <label>Enter name</label>
               <input type='text' ref={nameInputRef} />

               <label>Enter Message</label>
               <input type='text' ref={msgInputRef} />

               <Button type='submit'>send message</Button>
            </form>
         </Card>
      </div>
   );
};

export default Test;
