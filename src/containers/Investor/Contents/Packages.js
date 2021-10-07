import React from 'react';
import './Packages.css';
import CardPackage from './CardPackage';

export default function Packages() {
	return (
		<div className="container-package">
			<div className="inner-package">
				<div className="txt">Packages</div>
				<div className="conpackages"></div>
				<CardPackage
					title="Lorem Ipsum"
					article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh purus, lacinia vellaaara."
				/>
				<CardPackage
					title="Lorem Ipsum"
					article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh purus, lacinia vellaaara."
					style={{ left: '38%' }}
				/>
				<CardPackage
					title="Lorem Ipsum"
					article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh purus, lacinia vellaaara."
					style={{ left: '66%' }}
				/>
			</div>
		</div>
	);
}
