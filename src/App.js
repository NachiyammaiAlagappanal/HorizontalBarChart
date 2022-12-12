import { React } from 'react';
import './App.scss';
import data from './services/data';
import BarChart from './components/BarChart';

const App = (context) =>
	<div className="App">
		<BarChart { ...{ ...context, data } }/>
	</div>;

export default App;
