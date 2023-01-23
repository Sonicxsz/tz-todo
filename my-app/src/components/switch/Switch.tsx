import cn from 'classnames';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import './switch.css';

type Iswitch = {
	value: boolean;
	setValue: () => void;
	editable: boolean;
};

export const Switch = ({value, setValue, editable}: Iswitch) => {
	const Icon = value ? <DoneIcon color='action' fontSize='small'/> : <ClearIcon color='action' fontSize='small'/>;
	const handleSwitch = () => {
		if (editable) {
			setValue();
		}
	};

	return (
		<div onClick={handleSwitch}
			className={cn('switch', {'active-background': value, 'switch-editable': !editable})}>
			<div className={cn('switch__thumb', {'active-thumb': value})}>
				{Icon}
			</div>
		</div>
	);
};

