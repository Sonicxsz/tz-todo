import {useContext} from 'react'
import './todayList.css'
import { Todo, ITodo } from '../todo/Todo'
import { TodoContext } from '../../context'

interface INewTodo {
    todos:  ITodo[],
    completeTodo: (id:string) => void
}

export const TodayList = ({ todos, completeTodo}:INewTodo) => {
    const {showToday} = useContext(TodoContext)
    return <>
    {showToday && <div className="newTodo">
            {todos.map(item => {
                return <Todo 
                        completeTodo={completeTodo} 
                        key={item.id} id={item.id} 
                        title={item.title} 
                        color={item.color} 
                        description={item.description} 
                        complete={item.complete} />
            })}
        </div>}
    </>
}