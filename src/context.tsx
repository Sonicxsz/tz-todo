import React, {useContext, useState} from 'react';
import {type Itodo} from './components/todo/Todo';

type Icontext = {
	showToday: boolean;
	showSettings: boolean;
	showMarquee: boolean;
	showModal: boolean;
	modalType: string;
	activeTodo: Itodo | Record<string, unknown>;
	setShowToday: (val: boolean) => void;
	setShowMarquee: (val: boolean) => void;
	setShowSettings: (val: boolean) => void;
	setShowModal: (val: boolean) => void;
	setModalType: (val: string) => void;
	setActiveTodo: (val: Itodo) => void;

};

const TodoContext = React.createContext<Icontext | undefined>(undefined);

export const AppProvider = TodoContext.Provider;

export const TodoProvider = ({children}: {children: React.ReactNode}) => {
	const [showToday, setShowToday] = useState(false);
	const [showMarquee, setShowMarquee] = useState(true);
	const [showSettings, setShowSettings] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState('');
	const [activeTodo, setActiveTodo] = useState<Itodo | Record<string, unknown>>({});

	const context: Icontext = {
		showToday,
		showMarquee,
		setShowMarquee,
		showSettings,
		setShowSettings,
		setShowToday,
		showModal,
		setShowModal,
		modalType,
		setModalType,
		activeTodo,
		setActiveTodo,
	};
	return <TodoContext.Provider value={context}>
		{children}
	</TodoContext.Provider>;
};

export const useTodoContext = () => {
	const data = useContext(TodoContext);
	if (!data) {
		throw new Error('Can not use `TodoContext` outside of the `TodoProvider`');
	}

	return data;
};

