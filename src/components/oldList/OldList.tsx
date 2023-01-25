import cn from 'classnames';
import {useState, useMemo} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './oldList.css';
import {Indicator} from '../indicator/Indecator';
import {Title} from '../title/Title';
import {Todo, type Itodo} from '../todo/Todo';

type IoldTodo = {
	date: string;
	todos: Itodo[];
};

export const OldList = ({date, todos}: IoldTodo) => {
	const [showTodos, setShowTodos] = useState(false);

	const handleChangeShow = () => {
		setShowTodos(!showTodos);
	};

	const todoComponents = useMemo(() => todos.map(item => <Todo key={item.id}
		editable={false}
		id={item.id}
		title={item.title}
		color={item.color}
		description={item.description}
		complete={item.complete} />), [todos]);

	return (
		<div className={cn('old-todo', {'old-todo-open': showTodos})}>
			<div className='old-todo__panel'>
				<Indicator />
				<Title title={`${date} Tasks`} />
				<div onClick={handleChangeShow}
					className={cn('old-todo__button', {'old-todo__button-active': showTodos})}>
					<KeyboardArrowDownIcon fontSize='small'/>
				</div>
			</div>
			{ showTodos && <div className='old-todo__todos'>
				{todoComponents}
			</div> }
		</div>
	);
};
