import {Button} from '@mui/material';
import {useTodoContext} from '../../context';
import {type Itodo} from '../todo/Todo';
import './fullTodo.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const FullTodo = ({deleteTodo}: {deleteTodo: (id: string) => void}) => {
	const {activeTodo, setShowModal} = useTodoContext();

	const {title, description, id, color} = activeTodo as Itodo;
	const handleClose = () => {
		setShowModal(false);
	};

	const handleDelete = () => {
		deleteTodo(id);
		handleClose();
	};

	return (
		<Card sx={{maxWidth: '100%', minWidth: '100%'}}>
			<CardMedia
				sx={{height: 20,
					background: color,
				}}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div' sx={{
					wordWrap: 'break-word',
				}}>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary' sx={{
					wordWrap: 'break-word',
				}}>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button onClick={handleClose} size='small'>Close</Button>
				<Button color='error' onClick={handleDelete} size='small'>Delete</Button>
			</CardActions>
		</Card>

	);
};
