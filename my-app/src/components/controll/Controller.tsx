import {useContext} from 'react';
import {Checkbox} from '@mui/material';
import {grey} from '@mui/material/colors';
import {Title} from '../title/Title';
import {TodoContext} from '../../context';
import './controller.css';

export const Controller = () => {
	const {showToday, setShowToday} = useContext(TodoContext);
	const handleChange = () => {
		if (setShowToday) {
			setShowToday(!showToday);
		}
	};

	return (
		<div className='controller'>
			<Checkbox onClick={ handleChange } checked={showToday} color='default' size='medium'
				sx={{
					color: grey[800],
					'&.Mui-checked': {
						color: grey[100],
					},
				}}
			/>
			<Title title={'Today Tasks:'} />
		</div>
	);
};
