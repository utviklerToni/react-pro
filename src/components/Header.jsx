import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className='nav-color'>
				<div className='nav container'>
					<div>
						<Link to='/' className='nav-links'>
							Home
						</Link>
					</div>
					<div>
						<Link to='/selected' className='nav-links'>
							Selected
						</Link>
					</div>
					<div>
						<Link to='/in-process' className='nav-links'>
							In process
						</Link>
					</div>
					<div>
						<Link to='/add-user' className='nav-links'>
							Add user
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
