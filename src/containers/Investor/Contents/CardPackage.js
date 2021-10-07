import { Card, Button } from 'react-bootstrap';
import Truck from '../../../assets/truck.png';
import './CardPackage.css';

export default function CardPackage(props) {
	return (
		<Card className="crd1" style={props.style}>
			<Card.Body>
				<div className="concard">
					<div className="pict">
						<Card.Img variant="top" src={Truck} alt="truck" />
					</div>
					<Card.Title className="title-icon">{props.title}</Card.Title>
					<Card.Title className="subtitle-icon">{props.article}</Card.Title>
					<Button variant="primary" className="btn-package">
						Selengkapnya
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}
