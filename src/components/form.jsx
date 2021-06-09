import React, { useState } from 'react';

const Form = (props) => {
	const [name, setName] = useState('');

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit =(e) => {
		//to send the task back to the app component
		e.preventDefault();
		props.addTask(name);
		setName('');
	}

	return (
        <>
        <form onSubmit={handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn__primary btn__lg">
           save
          </button>
        </form>
        </>
      );
    }
    
    export default Form;
