import { useState } from "react"
import cn from 'classnames'
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import './switch.css'


interface ISwitch{
    complete: boolean,
    completeTodo: () => void,
    editable:boolean,
}

export const Switch = ({complete, completeTodo, editable}: ISwitch) => {
    const Icon = complete ? <DoneIcon color="action" fontSize="small"/> : <ClearIcon color="action" fontSize="small"/>
    const handleSwitch = () => {
        if(editable){
            completeTodo()
        }
    }
    return (
        <div onClick={handleSwitch} className={cn('switch', {'active-background': complete, "switch_editable":!editable})}>
            <div className={cn('switch__thumb', {'active-thumb': complete})}>
                    {Icon}
            </div>
        </div>
    )
}






