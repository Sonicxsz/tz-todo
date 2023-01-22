import { useState } from 'react';
import { Header } from './components/header/Header';
import { OldList } from './components/oldList/OldList';
import { TodayList } from './components/todayList/TodayList';
import { getDate } from './utils/fn';
import { Markquee } from './components/markquee/Markquee';
import { Controller } from './components/controll/Controller';
import { TodoProvider } from './context';
import { IInitialState, initialTodos } from './data';
import { Modal } from './components/modal/Modal';
import { ITodo } from './components/todo/Todo';

function App() {
  const [todos, setTodos] = useState<IInitialState[]>(initialTodos)
  const date = getDate()

  const completeTodo = (id:string) => {
      const newTodos = todos.map(item => {
        if(item.date === date){
          const todos = item.todos.map(todo => {
            return todo.id === id ? {...todo, complete:!todo.complete} : todo
          })
          return {...item, todos}
        }else{
          return item
        }
      })
      setTodos(newTodos)
  }
  const addTodo = (todo: ITodo) => {
    const isExist = todos.find(item => {
      if(item.date === date){
        return true
      }
    })
    if(isExist){
      const newTodos = todos.map(item => {
        if(item.date === date){
          const todos = [todo, ...item.todos]
          return {...item, todos}
        }else{
          return item
        }
      })
      setTodos(newTodos)
    }else{
      const newObj = {date, todos: [todo]}
      setTodos(state => [newObj, ...state])
    }
    
    
  }
  
  return (
    <TodoProvider>
      <div className="App">
       <div className='todo-wrapper'>
       <Header name="To Do" />
       <Modal addTodo={addTodo}/>
        <Controller />
          {todos.map(item => {
            return item.date === date 
                  ? <TodayList completeTodo={completeTodo} key={item.date}  date={item.date} todos={item.todos}/> 
                  : <OldList key={item.date} date={item.date} todos={item.todos} />
          })}
       </div>
        <Markquee /> 
      </div>
      
      
    </TodoProvider>
  );
}

export default App;
