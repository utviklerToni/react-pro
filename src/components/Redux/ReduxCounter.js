import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReduxCounter = () => {
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter);
   const show = useSelector((state) => state.showCounter);

   const incrementHandler = () => {
      dispatch({ type: 'increment', amount: 1 });
   };
   const decrementHandler = () => {
      dispatch({ type: 'decrement', amount: 1 });
   };

   const incrementHandlerBy9 = () => {
      dispatch({ type: 'increment', amount: 9 });
   };

   const resetHandler = () => {
      dispatch({ type: 'reset' });
   };

   const toggleCounterHandler = () => {
      dispatch({ type: 'toggle' });
   };
   return (
      <main>
         <h1>Redux Counter</h1>

         <button className='space' onClick={toggleCounterHandler}>
            Toggle Counter
         </button>
         {show && (
            <Fragment>
               <div className='value space'>{counter}</div>

               <br />
               <button onClick={incrementHandler} className='space'>
                  increment++
               </button>

               <button onClick={incrementHandlerBy9} className='space'>
                  increment by 9
               </button>

               <button onClick={decrementHandler} className='space'>
                  decrement--
               </button>

               <button className='space' onClick={resetHandler}>
                  reset
               </button>
            </Fragment>
         )}
      </main>
   );
};

export default ReduxCounter;
