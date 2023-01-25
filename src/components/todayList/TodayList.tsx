import {useContext, useMemo} from 'react';
import './todayList.css';
import {Todo, type Itodo} from '../todo/Todo';
import {TodoContext} from '../../context';

type InewTodo = {
	todos: Itodo[];
	completeTodo: (id: string) => void;
};

export const TodayList = ({todos, completeTodo}: InewTodo) => {
	const {showToday} = useContext(TodoContext);

	const todoComponents = useMemo(() => todos.map(item => <Todo
		completeTodo={completeTodo}
		key={item.id} id={item.id}
		title={item.title}
		color={item.color}
		description={item.description}
		complete={item.complete} />), [todos]);

	return <>
		{showToday && <div className='today-list'>
			{todoComponents}
		</div>}
	</>;
};
