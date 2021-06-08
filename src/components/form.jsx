import React, { useState } from 'react';

const Form = (props) => {
	const [name, setName] = useState('');

	const handleChange = (e) => {
		setName(e.target.value);
	}

	function handleSubmit(e) {      //to send the task back to the app component
		e.preventDefault();
		props.addTask(name);
		setName('');
	}
	return (
        <>
		<form className='todo-input' onSubmit={handleSubmit}>
			<h2 id="list-heading">{headingText}</h2>
			<input
				type='text'
				id='new-todo-input'
				className='input'
				name='text'
				autoComplete='off'
				value={name}
				onChange={handleChange}
			/>
			<button type='submit' className='submit-btn'>
				save
			</button>
		</form>
        </>
	);
}

export default Form;
