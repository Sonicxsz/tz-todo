import {useState} from 'react';
import {Header} from './components/header/Header';
import {OldList} from './components/oldList/OldList';
import {TodayList} from './components/todayList/TodayList';
import {getDate} from './utils/fn';
import {Markquee} from './components/markquee/Markquee';
import {Controller} from './components/controll/Controller';
import {TodoProvider} from './context';
import {type IinitialState, initialTodos} from './data';
import {Modal} from './components/modal/Modal';
import {type Itodo} from './components/todo/Todo';

function App() {
	const [todos, setTodos] = useState<IinitialState[]>(initialTodos);
	const date = getDate();

	const completeTodo = (id: string) => {
		const newTodos = todos.map(item => {
			if (item.date === date) {
				const todos = item.todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo);
				return {...item, todos};
			}

			return item;
		});
		setTodos(newTodos);
	};

	const deleteTodo = (id: string) => {
		const newTodos = todos.map(item => {
			const todos = item.todos.filter(i => i.id !== id);
			return {...item, todos};
		});
		setTodos(newTodos);
	};

	const addTodo = (todo: Itodo) => {
		const isExist = todos.find(item => {
			if (item.date === date) {
				return true;
			}

			return false;
		});

		if (isExist) {
			const newTodos = todos.map(item => {
				if (item.date === date) {
					const todos = [todo, ...item.todos];
					return {...item, todos};
				}

				return item;
			});
			setTodos(newTodos);
		} else {
			const newObj = {date, todos: [todo]};
			setTodos(state => [newObj, ...state]);
		}
	};

	return (
		<TodoProvider>
			<div className='App'>
				<div className='todo-wrapper'>
					<Header name='To Do' />
					<Modal addTodo={addTodo} deleteTodo={deleteTodo}/>

					<Controller />
					{todos.map(item => item.date === date && item.todos.length > 0
						? <TodayList completeTodo={completeTodo} key={item.date} todos={item.todos}/>
						: item.todos.length > 0 && <OldList key={item.date} date={item.date} todos={item.todos} />)}
				</div>
				<Markquee />
			</div>

		</TodoProvider>
	);
}

export default App;
