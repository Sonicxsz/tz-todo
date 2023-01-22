import { useContext } from 'react';
import cn from 'classnames'
import './settings.css'
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import CommentIcon from '@mui/icons-material/Comment';
import { TodoContext } from '../../context';


export const Settings = () => {
    const {showSettings, setShowSettings, showMarquee, setShowMarquee, showModal, setShowModal} = useContext(TodoContext)

    const handleClickSettings = () => {
        if(setShowSettings){
            setShowSettings(!showSettings)
        }
    }

    const handleClickMarkquee = () => {
        if(setShowMarquee){
            setShowMarquee(!showMarquee)
            handleClickSettings()
        }
    }
    const handleClickModal = () => {
        if(setShowModal){
            setShowModal(!showModal)
            handleClickSettings()
        }
    }
    return(
        <div className='settings'>
            <button onClick={handleClickSettings} className='settings__button'>
                            <SettingsIcon fontSize='large' color='inherit'/>
            </button>
            <div className={cn('settings__items', {'settings__items-active':showSettings})}>
                <button onClick={handleClickModal} className='items__button'><AddIcon fontSize='medium'/></button>
                <button onClick={handleClickMarkquee} className='items__button'>
                    {showMarquee 
                            ? <CommentIcon fontSize='medium' color='inherit'/>
                            : <CommentsDisabledIcon fontSize='medium' color='inherit'/>
                    }
                </button>

            </div>
        </div>
    )
}

