import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { AddTodo } from './shared/AddTodo/AddTodo';
import { TodoList } from './shared/TodoList/TodoList';
import { defaultDataTodo } from './data/defaultDataTodo';


import { Warning } from './shared/baseComponent/Warning';



function AppComponent() {

const [ todo, setTodo ] = useState(defaultDataTodo);
  return (

    <Layout>
   <Header />
   <AddTodo todo={todo} setTodo={setTodo} />
   <TodoList todo={todo} setTodo={setTodo}/>
   <Warning title='gh bdfmdplfhmfjdipf  mhl' />
    </Layout>

  )
}
export const App = hot(() => <AppComponent />)

