import React from 'react';
import { Link } from 'react-router-dom';

import './headers.css';

const Header = () => {
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
								<Link to={`/expense-tracker`}>Expense Tracker</Link>
								<Link to={`/add-user`}>Add User</Link>
								<Link to={`/todo-list`}>Todo List</Link>
								<Link to={`/test`}>StateRefs</Link>
								<Link to={`/form-handling`}>Form Handling</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
