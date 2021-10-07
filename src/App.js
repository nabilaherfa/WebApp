import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Landing from './containers/Landing';
import Home from './containers/Home';
import About from './containers/About';
import Partnership from './containers/Partnership';
import Investor from './containers/Investor';
import Article from './containers/Article';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/lomba' component={Partnership} />
				<Route path='/investor' component={Investor} />
				<Route path='/article' component={Article} />
			</Switch>
		</Router>
	);
}
