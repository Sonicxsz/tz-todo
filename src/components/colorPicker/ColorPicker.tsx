import './colorPicker.css';
import {
	MuiColorInput,
	type MuiColorInputFormat,
} from 'mui-color-input';

type IcolorPicker = {
	color: string;
	handleChange: (newValue: string) => void;
	name: string;

};
export const ColorPicker = ({color, handleChange, name}: IcolorPicker) => {
	const format: MuiColorInputFormat = 'hex';
	return (<>
		<MuiColorInput
			fullWidth
			className='color-picker'
			size='small'
			variant='outlined'
			value={color}
			onChange={handleChange}
			format={format}
			name='color'/>

	</>
	);
};
