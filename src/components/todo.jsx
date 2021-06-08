import { useState } from 'react';

const Todo = (props) => {
	// const

	return (
		<>
			<input
				id={props.id}
				type='checkbox'
                className='todo-container'
				defaultChecked={props.completed}
				onChange={() => props.toggleTaskCompleted(props.id)}
			/>

			<button
				type='button'
				className='delete-btn'
				onClick={() => props.deleteTask(props.id)}
			>
				delete <span className='visually-hidden'>{props.name}</span>
			</button>

            <button
				type='button'
				className='edit-btn'
				onClick={() => props.editTask(props.id)}
			>
				edit<span className='visually-hidden'>{props.name}</span>
			</button>
		</>
	);
};

export default Todo;
