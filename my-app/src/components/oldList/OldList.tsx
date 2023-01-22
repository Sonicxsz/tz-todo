import cn from 'classnames'
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './oldList.css'
import { Indicator } from '../indicator/Indecator';
import { Title } from '../title/Title';
import { Todo, ITodo } from '../todo/Todo';

interface IOldTodo {
    date: string,
    todos:  ITodo[]
}

export const OldList = ({date, todos}:IOldTodo) => {
    const [showTodos, setShowTodos] = useState(false)
    
    const handleChangeShow = () => {
        setShowTodos(!showTodos)
    }

    return(
        <div className={cn('old-todo', {'old-todo-open':showTodos})}>
            <div className='old-todo__panel'>
                <Indicator />
                <Title title={`${date} Tasks`} />
                <div onClick={handleChangeShow} className={cn('old-todo__button', {"old-todo__button-active":showTodos})}>
                    <KeyboardArrowDownIcon fontSize='small'/>
                </div>
            </div>
          { showTodos && <div className='old-todo__todos'>
            {todos.map(item => {
                return <Todo key={item.id} 
                             editable={false}  
                             id={item.id} 
                             title={item.title} 
                             color={item.color} 
                             description={item.description} 
                             complete={item.complete} />
            })}
            </div> }
        </div>
    )
}