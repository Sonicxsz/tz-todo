import {type Itodo} from './components/todo/Todo';

export type IinitialState = {
	date: string;
	todos: Itodo[];
};
export const initialTodos: IinitialState[] = [
	{
		date: '23/01',
		todos: [
			{color: 'red',
				id: '8',
				description: 'I need to do smth',
				title: 'Fix Dad`s Ipad',
				complete: false},
			{color: 'yellow',
				id: '7783',
				description: 'I need to do smth more than yesterday',
				title: 'milililililJSREactJS',
				complete: true},
			{color: 'blue',
				id: '6888888',
				description: 'i want to khow, why i didt use the framer motion in this project',
				title: 'framer motion',
				complete: false},
		],
	},
	{
		date: '22/01',
		todos: [

			{color: 'red',
				id: '11',
				description: 'js js js js react react framer motion',
				title: 'cocoococ',
				complete: false},
			{color: 'green',
				id: '85',
				description: 'nawoqo[qiown[icw[nq',
				title: 'Fix Dad`s Ipad',
				complete: false},
			{color: 'yellow',
				id: '768',
				description: 'js ts react memo',
				title: 'why why why hwyhhyhwyh',
				complete: true},
			{color: 'red',
				id: '6875877',
				description: 'have you ever been in the USA',
				title: 'no no no nono nonono',
				complete: false},
		],
	},
];

