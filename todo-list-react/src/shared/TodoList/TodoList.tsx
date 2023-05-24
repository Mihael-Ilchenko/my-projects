import React, { FC, useState } from 'react';
import { ITodo } from '../../variables/interfaces/ITodo';
import styles from './todoList.scss';
import bootstrap from 'bootstrap';
import { Warning } from '../baseComponent/Warning';

export interface ITodosProps {
  todo: Array<ITodo>;
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>

}

export function TodoList({ todo, setTodo }: ITodosProps) {

  const [edit, setEdit] = useState<string | number>('');
  const [newValue, setNewValue] = useState('');





  function deleteTodo(id: string | number) {
    let newTodo = [...todo].filter(item => item.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id: string | number) {
    let newTodo = [...todo].filter(item => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item
    });
    setTodo(newTodo)
  }

  function saveTodo(id: string | number, e: React.SyntheticEvent) {

    e.preventDefault();

    if (newValue.trim()) {
      let newTodo = [...todo].map(item => {

        if (item.id == id) {
          item.title = newValue;
        }
        return item
      });

      setTodo(newTodo);
      setEdit('');
    }

  }


  function onChange(id: string | number, title: string) {
    setEdit(id);
    setNewValue(title);
  }


  return (
    <ol className={`list-group list-group-numbered ${styles.todoList}`}>

      {todo.map(item =>
        <li key={item.id} className={`d-flex list-group-item ${item.status ? '' : styles.item_success}`} role="group" aria-label="Basic example">

          {edit == item.id ?
            <div>
              <form onSubmit={(e) => saveTodo(item.id, e)}>
                <input type="text" autoFocus value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                <button onClick={(e) => saveTodo(item.id, e)}>Сохранить</button>
              </form>
            </div>
            : <span>{item.title}</span>
          }

          {
            edit != item.id &&
            <div className='d-flex align-items-center'>
              {item.status && <button className='btn btn-danger' onClick={() => deleteTodo(item.id)}>Удалить</button>}
              <button className='btn btn-success' onClick={() => statusTodo(item.id)}>{item.status ? 'Готово' : 'Вернуть к делам'}</button>
              {item.status && <button className='btn btn-warning' onClick={() => onChange(item.id, item.title)}>Редактировать</button>}
            </div>
          }


        </li>
      )}
    </ol>
  )
}
