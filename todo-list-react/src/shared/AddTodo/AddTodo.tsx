import React, { Dispatch, SetStateAction, useState } from 'react';
import { ITodo } from '../../variables/interfaces/ITodo';
import { ITodosProps } from '../TodoList/TodoList';
import { generateRandomString } from '../utils/react/generateRandomIndex';


interface IAddTodoProps extends ITodosProps {
}


export function AddTodo({ todo, setTodo }: IAddTodoProps) {

  const [value, setValue] = useState('');

  function saveTodo(e: React.SyntheticEvent) {
    e.preventDefault()
    if(value.trim()) {
      const newTodo = {
      id: generateRandomString(),
      status: true,
      title: value
    }
    setTodo([...todo, newTodo]);
    setValue('')
    }

  }

  return (
    <form onSubmit={saveTodo}>

      <div className="input-group mb-5">

        <input className="form-control "
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Введите новое дело"  >
        </input>
        <button className='btn btn-primary' type='submit' onClick={saveTodo}>Сохранить</button>

      </div>

    </form>
  )
}
