import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import './FormStyle.css';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true);

		if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			return;
		}
	};

	console.log(enteredName.length, 'length');

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);

		if (e.target.value.trim() !== '') {
			setEnteredNameIsValid(true);
		}
	};

	useEffect(() => {
		if (enteredNameIsValid) {
			console.log('name input is valid');
		}
	}, [enteredNameIsValid]);

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			setEnteredNameTouched(true);
			return;
		}
		setEnteredNameIsValid(true);
		setEnteredNameTouched(true);
		console.log(enteredName);
	};

	return (
		<Card>
			<form onSubmit={formSubmitHandler}>
				<div className={nameInputClasses}>
					<label htmlFor='name'>Your Name</label>
					<input
						type='text'
						id='name'
						value={enteredName}
						onChange={nameInputChangeHandler}
						onBlur={nameInputBlurHandler}
					/>
					{nameInputIsInvalid && <p>Name must not be empty.</p>}
				</div>
				<div className='form-actions'>
					<button>Submit</button>
				</div>
			</form>
		</Card>
	);
};

export default SimpleInput;
