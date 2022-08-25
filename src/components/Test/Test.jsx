// using refs for input form,
// NOTE: refs will make the inputs uncontrolled unlike state wise

import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
// import ErrorModal from '../UI/ErrorModal';
import './test.css';
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const Test = () => {
	const [msg, setMsgList] = useState([]);

	const onAddMsg = (name, msg) => {
		setMsgList((prevMsg) => {
			return [...prevMsg, { name, msg, id: Math.random().toString() }];
		});
	};

	// console.log(props);
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
		onAddMsg(enteredName, enteredMsg);
	};

	const errorHandler = () => {
		setError(null);
	};

	const h = 'Can you change me?';
	const p = 'Can you turn me to header?';

	const [heading, setHeading] = useState(h);
	const [para, setPara] = useState(p);

	const changeHeading = () => {
		setHeading('I have mastered state.');
	};

	const changePara = () => {
		setPara('I am heading now.');
	};

	const resetHeading = () => {
		setHeading(h);
		setPara(p);
	};

	return (
		<div className=''>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
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

				<ul className='form-container d-flex flex-dir'>
					{msg.map((single) => (
						<li key={single.id}>
							<h3>
								{single.name}, {single.msg}
							</h3>
						</li>
					))}
				</ul>
			</Card>

			{/* state test */}

			<div className='form-container'>
				<p>Learning state</p>
				<br />
				<h3>{heading}</h3>

				<div className='d-flex flex-dir'>
					<Button onClick={changeHeading}>Try it!</Button>
					<br />

					<h3>{para}</h3>
					<Button onClick={changePara}>Turn it into a para</Button>
					<br />
					<Button onClick={resetHeading}>Reset all</Button>
				</div>
			</div>
		</div>
	);
};

export default Test;
