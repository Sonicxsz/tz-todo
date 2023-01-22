import { useContext } from 'react';
import { TodoContext } from '../../context';
import AddIcon from '@mui/icons-material/Add';
import './header.css'
import { Settings } from '../settings/settings'
export const Header = ({name}) => {
    const {showModal, setShowModal} = useContext(TodoContext)

    const handleClickModal = () => {
        if(setShowModal){
            setShowModal(!showModal)
        }
    }


    return (
        <div className='header'>
            <h1>{name}</h1>
            <div className='d-flex'>
                <button onClick={handleClickModal} className='add__button'><AddIcon fontSize='large'/></button>
                <Settings />
            </div>
        </div>
    )
}