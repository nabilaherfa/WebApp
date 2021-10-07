import React from 'react';
import Investorlayout from './Contents/layout';
import Description from './Contents/description';
import Packages from './Contents/Packages';

export default function Investor() {
	return (
		<Investorlayout>
			<Description />
			<div>
				<Packages />
			</div>
		</Investorlayout>
	);
}
