
import cn from 'classnames';
import './settings.css';
import SettingsIcon from '@mui/icons-material/Settings';
import {useTodoContext} from '../../context';
import {Switch} from '../switch/Switch';

export const Settings = () => {
	const {showSettings, setShowSettings, showMarquee, setShowMarquee} = useTodoContext();

	const handleClickSettings = () => {
		setShowSettings(!showSettings);
	};

	const handleClickMarkquee = () => {
		setShowMarquee(!showMarquee);
		handleClickSettings();
	};

	return (
		<div className='settings'>
			<button onClick={handleClickSettings} className='settings__button'>
				<SettingsIcon fontSize='large' color='inherit'/>
			</button>
			<div className={cn('settings__items', {'settings__items-active': showSettings})}>
				<div className='p-5'>
					<Switch setValue={handleClickMarkquee} value={showMarquee} editable={true}/>
				</div>
			</div>
		</div>
	);
};

