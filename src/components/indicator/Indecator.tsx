import './indecator.css';

type Iindicator = {
	color?: string;
};
export const Indicator = ({color = '#A9A9A9'}: Iindicator) => (
	<div className='indicator' style={{backgroundColor: color}}></div>
);
