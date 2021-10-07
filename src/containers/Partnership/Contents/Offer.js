import React from 'react';
import './Offer.css';
import { Card, Button } from 'react-bootstrap';
import Pic from '../../../assets/sebastian.png';

export default function Offer() {
	return (
		<div className="offer">
			<Card className="my-2">
				<Card.Body>
					<Card.Title className="card-offer-title">
						Lomba Nasional Ocademy
					</Card.Title>
					<Card.Text className="card-subtitle-package1 text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse nibh purus, lacinia
						vellaaara.
					</Card.Text>
					<Card.Text className="card-subtitle-package2 text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse nibh purus, lacinia
						vellaaara.
					</Card.Text>
					<div className="btn">
						<a
							href="https://forms.gle/1pn94NWdvFPySoSE7"
							target="_blank"
							rel="noreferrer"
						>
							<Button className="btn-offer" variant="primary">
								Daftar Lomba
							</Button>
						</a>
					</div>
				</Card.Body>
			</Card>
			<div className="pic">
				<Card.Img variant="top" src={Pic} alt="pic" />
			</div>
		</div>
	);
}
