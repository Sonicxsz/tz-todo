import './header.css'
import { Settings } from '../settings/settings'
export const Header = ({name}) => {
    return (
        <div className='header'>
            <h1>{name}</h1>
            <Settings />
        </div>
    )
}