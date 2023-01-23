import {useContext} from 'react';
import {TodoContext} from '../../context';
import './header.css';
import {Settings} from '../settings/settings';
import {Fab} from '@mui/material';
import ModeIcon from '@mui/icons-material/Mode';

type Iheader = {
	name: string;
};

export const Header = ({name}: Iheader) => {
	const {showModal, setShowModal, setModalType} = useContext(TodoContext);

	const handleClickModal = () => {
		if (setShowModal && setModalType) {
			setShowModal(!showModal);
			setModalType('addTodo');
		}
	};

	return (
		<div className='header'>
			<h1>{name}</h1>
			<div className='d-flex'>
				<Fab onClick={handleClickModal}
					size='small'
					color='secondary'
					aria-label='edit' sx={{
						width: '35px',
						height: '35px',
						zIndex: '0',

					}}>
					<ModeIcon />
				</Fab>
				<Settings />
			</div>
		</div>
	);
};
