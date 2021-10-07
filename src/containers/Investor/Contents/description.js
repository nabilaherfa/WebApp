import React from 'react';
import './description.css';
import { Card } from 'react-bootstrap';
import Pic from '../../../assets/investor.png';

export default function Description() {
	return (
		<div className="description">
			<div className="desc1">
				<Card>
					<Card.Body className="cons-info">
						<Card.Title className="con">Deskripsi</Card.Title>
						<Card.Text className="desctext1 card-subtitle-package1 text-left">
							Lorem ipsum do lor sit amet, consectetur adipiscing elit.
							Suspendisse nibh purus, lacinia vel tempor interdum, finibus ac
							nulla. Vestibulum consectetur magna eu eros consectetur, vel
							commodo sem vestibulum.
						</Card.Text>
						<Card.Text className="desctext1 card-subtitle-package1 text-left">
							Aliquam ut dui non lacus condimentum cursus. Nulla facilisi. Donec
							vestibulum, libero quis scelerisque mattis, nisi dolor interdum
							tellus, id scelerisque leo sapien id libero.
						</Card.Text>
					</Card.Body>
				</Card>
				<div className="inves">
					<Card.Img variant="top" src={Pic} alt="pic" />
				</div>
			</div>
		</div>
	);
}
