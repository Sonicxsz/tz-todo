import {type Itodo} from './components/todo/Todo';

export type IinitialState = {
	date: string;
	todos: Itodo[];
};
export const initialTodos: IinitialState[] = [
	{
		date: '20/01',
		todos: [
			{color: 'red',
				id: '8',
				description: 'ердце сакристаллленький ик',
				title: 'Fix Dad`s Ipad',
				complete: false},
			{color: 'yellow',
				id: '7',
				description: 'ердце сакристаллленький ик',
				title: 'cocoococcascacwacawiu2i1471284678126ww',
				complete: true},
			{color: 'red',
				id: '6',
				description: 'ердце сакристаллленький икcsacascascascascas',
				title: 'cocoococ',
				complete: false},
		],
	},
	{
		date: '18/01',
		todos: [
			{color: 'red',
				id: '3',
				description: 'ердце сакристаллленький ик',
				title: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
				complete: false},
			{color: 'yellow',
				id: '4',
				description: 'ердце сакристаллленький ик',
				title: 'cocoococ',
				complete: false},
			{color: 'red',
				id: '5',
				description: 'I watched a new film yesterday',
				title: 'cocoococ',
				complete: true},
		],
	},
	{
		date: '17/01',
		todos: [
			{color: 'red',
				id: '1',
				description: 'ердце сакристаллленький ик',
				title: 'cocoococ',
				complete: true},
			{color: 'yellow',
				id: '2',
				description: 'ердце сакристаллленький ик',
				title: 'cocoococ',
				complete: true},
		],
	},
];

