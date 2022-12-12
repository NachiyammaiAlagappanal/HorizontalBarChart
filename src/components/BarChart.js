import { React } from 'react';

const BarChart = ({ data: states }) =>
	states.map(({ state, estimate2022: population }, index) =>
		<div key={ index } className="parent">
			<span className="size">{state}</span>
			<span style={ { width: `${ population }%` } } className="barStyle"/>
			<span className="size">{population}</span></div>);

export default BarChart;
