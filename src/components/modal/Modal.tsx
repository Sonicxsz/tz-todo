import {AddModal} from '../addModal/AddModal';
import {useContext} from 'react';
import cn from 'classnames';
import {TodoContext} from '../../context';
import './modal.css';
import {type Itodo} from '../todo/Todo';
import {FullTodo} from '../fullTodo/FullTodo';

type Imodal = {
	addTodo: (todo: Itodo) => void;
	deleteTodo: (id: string) => void;
};

export const Modal = ({addTodo, deleteTodo}: Imodal) => {
	const {showModal, modalType} = useContext(TodoContext);
	const Component = modalType === 'addTodo' ? <AddModal addTodo={addTodo} /> : <FullTodo deleteTodo={deleteTodo}/>;

	return (
		<div className={cn('modal', {'modal-active': showModal})}>
			{Component}
		</div>
	);
};
