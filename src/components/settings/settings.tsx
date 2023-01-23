import {useContext} from 'react';
import cn from 'classnames';
import './settings.css';
import SettingsIcon from '@mui/icons-material/Settings';
import {TodoContext} from '../../context';
import {Switch} from '../switch/Switch';

export const Settings = () => {
	const {showSettings, setShowSettings, showMarquee, setShowMarquee} = useContext(TodoContext);

	const handleClickSettings = () => {
		if (setShowSettings) {
			setShowSettings(!showSettings);
		}
	};

	const handleClickMarkquee = () => {
		if (setShowMarquee) {
			setShowMarquee(!showMarquee);
			handleClickSettings();
		}
	};

	return (
		<div className='settings'>
			<button onClick={handleClickSettings} className='settings__button'>
				<SettingsIcon fontSize='large' color='inherit'/>
			</button>
			<div className={cn('settings__items', {'settings__items-active': showSettings})}>
				<div className='p-5'>
					<Switch setValue={handleClickMarkquee} value={showMarquee!} editable={true}/>
				</div>
			</div>
		</div>
	);
};

