// create form with button
// when form is filled and button is clicked,
// detailsof form gets converted to an item that gets added to a todo list
// each tiem in todo list to have 2 buttons: done & edit
// when done button is clicked, item should fade from list
// when edit is clicked, item gets inserted back into form


import React, { useState } from 'react';
import { nanoid } from "nanoid";
import Form from './components/form';
import Todo from './components/todo';


const App = () => {

const [tasks, setTasks] = useState(props.tasks);

const toggleTaskCompleted = (id) => {
  const updatedTasks = tasks.map(task => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
}

const deleteTask = (id) => {
  const remainingTasks = tasks.filter(task => id !== task.id);
  setTasks(remainingTasks);
}

const editTask = () => {
  this.setState({
    editing: true,
  })

  let viewMode = {}
let editMode = {}

if (this.state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}
}

const taskList = tasks.map(task => (
<Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
  />
)
);

const addTask = (name) => {
  const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
  setTasks([...tasks, newTask]);
}


const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun} remaining`;


    return (
<>
    
<Form />
<Todo />
    
  
</>
  );
}

export default App;
