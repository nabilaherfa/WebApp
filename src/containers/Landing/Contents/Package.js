import './Package.css';
import { Container, Card } from 'react-bootstrap';
import Traveler5 from '../../../assets/traveler5.png';
import Traveler6 from '../../../assets/traveler6.png';

export default function Content2() {
	return (
		<Container style={{ fontFamily: 'Inter' }}>
			<div className="container-title-package mb-4 text-center">
				<p>Visi dan Misi</p>
			</div>
			<div className="tips1 d-flex justify-content-around flex-wrap my-5">
				<Card className="my-2" style={{ width: '20rem' }}>
					<Card.Img variant="top" src={Traveler5} alt="Traveler5" />
				</Card>

				<Card className="my-2" style={{ width: '25rem' }}>
					<Card.Body>
						<Card.Title className="card-title-package text-left">
							Visi
						</Card.Title>
						<Card.Text className="card-subtitle-package text-left">
							Menjadi platform bimbingan kompetisi yang menarik, mudah, dan nyaman digunakan serta menjadi top of mind competition edutech yang melahirkan generasi emas untuk Indonesia 
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="my-2" style={{ width: '20rem' }}></Card>
			</div>

			<div className="tips2 d-flex justify-content-around flex-wrap">
				<Card className="my-2" style={{ width: '20rem' }}></Card>

				<Card className="my-2" style={{ width: '25rem' }}>
					<Card.Body>
						<Card.Title className="card-title-package text-left">
							Misi
						</Card.Title>
						<Card.Text className="card-subtitle-package text-left">
							Platform bimbingan kompetisi yang menarik, mudah, dan nyaman digunakan serta menjadi top of mind competition edutech yang melahirkan generasi emas untuk Indonesia
						</Card.Text>
					</Card.Body>
				</Card>

				<Card className="my-2" style={{ width: '20rem' }}>
					<Card.Img variant="top" src={Traveler6} alt="Traveler6" />
				</Card>
			</div>
		</Container>
	);
}
