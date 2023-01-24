import {useContext} from 'react';
import {TodoContext} from '../../context';
import './todo.css';
import {Indicator} from '../indicator/Indecator';
import {Switch} from '../switch/Switch';
import {Title} from '../title/Title';
import {cutText} from '../../utils/fn';

export type Itodo = {
	editable?: boolean;
	color?: string;
	description: string;
	title: string;
	complete: boolean;
	id: string;
	completeTodo?: (id: string) => void;
};

export const Todo = ({editable = true, color, description, title, complete, id, completeTodo}: Itodo) => {
	const {setActiveTodo, setModalType, showModal, setShowModal} = useContext(TodoContext);
	const mainText = cutText(description, 26);
	const nameText = cutText(title, 16);
	const handleComplete = () => {
		if (completeTodo) {
			completeTodo(id);
		}
	};

	const handleSetActive = () => {
		const todo = {color, description, title, complete, id};
		if (setActiveTodo && setModalType && setShowModal) {
			setActiveTodo(todo);
			setModalType('activeTodo');
			setShowModal(!showModal);
		}
	};

	return (
		<div className='todo'>
			<Indicator color={color}/>
			<div className='todo__info' onClick={handleSetActive}>
				<Title title={nameText} completed={complete}/>
				<p className='todo__description'>
					{mainText}
				</p>
			</div>
			<Switch editable={editable} value={complete} setValue={handleComplete} />
		</div>
	);
};
