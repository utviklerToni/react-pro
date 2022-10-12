import React from 'react';
import { Link } from 'react-router-dom';

import './headers.css';

const Header = (props) => {
   return (
      <div>
         <nav className='nav-color'>
            <div className='nav container'>
               <div>
                  <Link to='/' className='nav-links'>
                     utviklerToni
                  </Link>
               </div>

               <div className='nav-links drop-down'>
                  <div className='dropdown'>
                     <button className='dropbtn'>
                        Projects
                        <i className='fa fa-caret-down'></i>
                     </button>

                     <div className='dropdown-content'>
                        <Link to={`/`}>User Overview</Link>
                        <Link to={`/expenseTracker`}>Expense Tracker</Link>
                        <Link to={`/addUser`}>Add User</Link>
                        <Link to={`/todoList`}>Todo List</Link>
                        <Link to={`/addMessage`}>Add Context</Link>
                        <Link to={`/loginApp`}>Login via Context</Link>
                        <Link to={`/reduxCounter`}>Redux Counter</Link>
                     </div>
                  </div>
               </div>
               {props.isLoggedIn && <div>Logout</div>}
            </div>
         </nav>
      </div>
   );
};

export default Header;
