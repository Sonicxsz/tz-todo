import './todo.css'
import { Indicator } from '../indicator/Indecator'
import { Switch } from '../switch/Switch'
import { Title } from '../title/Title'
import { cutText } from '../../utils/fn'



export interface ITodo {
    editable?: boolean,
    color?: string,
    description: string,
    title: string,
    complete: boolean,
    id: string
    completeTodo?: (id:string) => void
}

export const Todo = ({ editable=true, color, description, title, complete, id, completeTodo}:ITodo) => {
    const mainText = cutText(description, 26)
    const nameText = cutText(title, 16)
    
    return (
        <div className='todo'>
            <Indicator color={color}/>
            <div className='todo__info'>
            <Title title={nameText} completed={complete}/>
            <p className='todo__description'>
                {mainText}
            </p>
            </div>
            <Switch editable={editable} complete={complete} completeTodo={() => {
                if(completeTodo){
                    completeTodo(id)
                }
            }} />
        </div>
    )
}