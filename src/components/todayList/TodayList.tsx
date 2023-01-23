import {useContext} from 'react';
import './todayList.css';
import {Todo, type Itodo} from '../todo/Todo';
import {TodoContext} from '../../context';

type InewTodo = {
	todos: Itodo[];
	completeTodo: (id: string) => void;
};

export const TodayList = ({todos, completeTodo}: InewTodo) => {
	const {showToday} = useContext(TodoContext);
	return <>
		{showToday && <div className='newTodo'>
			{todos.map(item => <Todo
				completeTodo={completeTodo}
				key={item.id} id={item.id}
				title={item.title}
				color={item.color}
				description={item.description}
				complete={item.complete} />)}
		</div>}
	</>;
};
