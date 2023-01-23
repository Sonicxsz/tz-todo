import './indecator.css';

export const Indicator = ({color = '#A9A9A9'}: {color?: string}) => (
	<div className='indicator' style={{backgroundColor: color}}></div>
);
