import { Card, Container } from 'react-bootstrap';
import './Why.css';
import News from '../../../assets/news.png';
import Truck from '../../../assets/truck.png';
import Cilinder from '../../../assets/cilinder.png';

export default function Why() {
	return (
		<Container className="why">
			<div className="text1">
				<h3 className="title-partner">Kenapa harus ikut lomba Ocademy?</h3>
			</div>
			<div className="d-flex justify-content-around flex-wrap">
				<Card className="mt-5" style={{ width: '17rem' }}>
					<Card.Img
						variant="top"
						src={News}
						alt="News"
						width="100"
						height="70"
						className="icon-news"
					/>
					<Card.Body className="text-center">
						<Card.Title className="title-icon">Gratis</Card.Title>
						<Card.Text clasName="subtitle-icon">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-5" style={{ width: '17rem' }}>
					<Card.Img
						variant="top"
						src={Truck}
						alt="Truck"
						width=" 100"
						height="70"
						className="icon-news"
					/>
					<Card.Body className="text-center">
						<Card.Title className="title-icon">Soal Berkualitas</Card.Title>
						<Card.Text clasName="subtitle-icon">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-5" style={{ width: '17rem' }}>
					<Card.Img
						variant="top"
						src={Cilinder}
						alt="Cilinder"
						width="100"
						height="70"
						className="icon-news"
					/>
					<Card.Body className="text-center">
						<Card.Title className="title-icon">Tersedia Pembahasan Soal</Card.Title>
						<Card.Text clasName="subtitle-icon">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<div className="con-have">
				<Card.Body className="text-center">
					<Card.Title className="subtitle-icon">
						<div className="question">
							<p>Have more questions?</p>
							<p>
								Contact us at<span> ocademyofficial@gmail.com</span>
							</p>
						</div>
					</Card.Title>
				</Card.Body>
			</div>
		</Container>
	);
}
