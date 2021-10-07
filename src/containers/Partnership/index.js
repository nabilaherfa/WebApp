import React from 'react';
import Offer from './Contents/Offer';
import Why from './Contents/Why';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Partnership() {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<Offer />
			</div>
			<div>
				<Why />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
