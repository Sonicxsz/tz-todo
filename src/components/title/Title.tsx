import './title.css';
import cn from 'classnames';

type Ititle = {
	title: string;
	completed?: boolean;
};

export const Title = ({title, completed}: Ititle) => (
	<h2 className={cn('title', {'title-completed': completed})}>{title}</h2>
);
