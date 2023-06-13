import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../redux/action';
import { useDispatch } from 'react-redux';

const TodoForm = () => {

    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) =>{
        setText(e.target.value);
    }

  return (
    <div className='todoForm' >
        <form className='form' onSubmit={onFormSubmit} >
            <input type="text" placeholder='Enter new Todo...' className='input' onChange={onInputChange}  value={text}/>
        </form>
    </div>
  )
}

export default TodoForm