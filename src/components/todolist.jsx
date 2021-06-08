import { useState } from 'react';
import Button './components/button';  //i don't know why this is throwing an error
import './style/index.css';

const TodoList = () => {
    const [items, setItems] = useState([
        {title: 'item 1', quantity: 2},
        {title: 'item 2', quantity: 3},
        {title: 'item 3', quantity: 4},
    ]);

    const [inputValue, setInputValue] = useState('');

    const buttonHandler = () => {
        const newItem = {
            item: inputValue
        };

        const newItems = [...items, newItem];  //to push a new array back into state
        setItems(newItems);
        setInputValue('');  //to clear input firld so user can enter new items

        const buttonHandler = (event) => {
            event.preventDefault()  //to preventthe form from refreshing
        };
    }



    const strikeItem = () => {
        // this is where code to strike out item from todo is inserted
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');

        const styleObject = {text-decoration: 'line-through'}

    };


    const editItem = () => {
        // this is where code to return item on todo list back to input
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');

    }


    return (
        <>
            <div className='item-container'>
                <div className='todo-input'>
                    <form>
                        <input
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)} //to set the input value to what user has typed
                            className='add-item-input'
                            name='title'
                            type='text'
                            placeholder='item name'
                        />

                        <input
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)} //to set the input value to what user has typed
                        className='add-item-input'
                        name='item'
                        type='text'
                        placeholder='quantity'
                    />
                    </form>

                    <button className='save-button' onClick={buttonHandler}>
                        save
					</button>
                </div>



                <div className='main-list'> {/*item done*/}
                    <ul>
                        {listShoppedItems}
                    </ul>
                </div>

            </div>



            <Button className='completed' onClick={strikeItem}>
                done
			</Button>
            <Button onClick={editItem}>edit</Button>

        

		</>
	);

}

export default TodoList;
