import { Button, Input } from '@mui/material'
import {useState, useContext} from 'react'
import cn from 'classnames'
import { nanoid } from 'nanoid'
import SendIcon from '@mui/icons-material/Send';
import { TodoContext } from '../../context'
import './modal.css'
import { ColorPicker } from '../colorPicker/ColorPicker'
import { ITodo } from '../todo/Todo'


export const Modal = ({addTodo}:{addTodo: (todo:ITodo) => void}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('#2aa8b0')
    const {showModal, setShowModal} = useContext(TodoContext)
   
    const handleClose = () => {
        if(setShowModal)
        setShowModal(false)
    }

    
    const handleChangeColor = (newValue: string) => {
        setColor(newValue)
    }
    const readyForm = title.length >= 2 && description.length >= 2
    
    const handleAddTodo = () => {
       if(readyForm){
        const todo:ITodo = {
            id: nanoid(),
            title,
            description,
            color,
            complete:false
        }
        addTodo(todo)
        setTitle('')
        setDescription('')
        handleClose()
       }
    }

    return(
        <div className={cn('modal', {"modal-active":showModal})}>
            <span>Title</span>
            <Input 
            size='small'
            className='modal__input'  
            placeholder="enter title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
                
            <span> Description </span>
            <Input  
            size='small'
            className='modal__input'  
            placeholder="enter description" 
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
           

            <ColorPicker color={color} handleChange={handleChangeColor} name={'Color'}/>
            <div className='modal__buttons'>
                <Button 
                onClick={handleClose}
                variant="contained" 
                color="error">Cancel</Button>
                <Button disabled={!readyForm} onClick={handleAddTodo} variant="contained" endIcon={<SendIcon />}>Add</Button>
            </div>

        </div>
    )
    
    
}