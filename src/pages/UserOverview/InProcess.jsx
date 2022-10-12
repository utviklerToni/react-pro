import React, { useState } from 'react';

const InProcess = () => {
	const [input, setInput] = useState('');

	const inputHandler = (event) => {
		setInput(event.target.value);
	};

	return (
		<div className='process-page'>
			<div className='container'>
				<div className='add-user'>
					<div className='input-wrapper'>
						<input
							type='text'
							placeholder='type user name'
							value={input}
							onChange={inputHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InProcess;
