import {Button, Input, TextField} from '@mui/material';
import {useState, useContext} from 'react';
import {nanoid} from 'nanoid';
import SendIcon from '@mui/icons-material/Send';
import {ColorPicker} from '../colorPicker/ColorPicker';
import {type Itodo} from '../todo/Todo';
import {useTodoContext} from '../../context';

export const AddModal = ({addTodo}: {addTodo: (todo: Itodo) => void}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [color, setColor] = useState('#2aa8b0');
	const {setShowModal} = useTodoContext();

	const handleChangeColor = (newValue: string) => {
		setColor(newValue);
	};

	const readyForm = title.length >= 2 && description.length >= 2;

	const handleClose = () => {
		setShowModal(false);
	};

	const handleAddTodo = () => {
		if (readyForm) {
			const todo: Itodo = {
				id: nanoid(),
				title,
				description,
				color,
				complete: false,
			};
			addTodo(todo);
			setTitle('');
			setDescription('');
			handleClose();
		}
	};

	return (
		<div className='modal__content'>
			<Input
				fullWidth={true}
				placeholder='enter title'
				value={title}
				onChange={event => {
					setTitle(event.target.value);
				}}
			/>
			<TextField
				multiline={true}
				maxRows={4}
				fullWidth
				id='outlined-basic'
				label='enter description'
				variant='standard'
				value={description}
				onChange={event => {
					setDescription(event.target.value);
				}}
			/>

			<ColorPicker color={color} handleChange={handleChangeColor} name={'Color'}/>
			<div className='modal__buttons'>
				<Button
					onClick={handleClose}
					variant='contained'
					color='error'>Cancel</Button>
				<Button
					disabled={!readyForm}
					color='success'
					onClick={handleAddTodo}
					variant='contained'
					endIcon={<SendIcon />}>Add</Button>
			</div>
		</div>
	);
};
