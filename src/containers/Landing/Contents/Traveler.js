import './Traveler.css';
import { Container, Card, Button } from 'react-bootstrap';
import Traveler from '../../../assets/traveler.png';
import Traveler2 from '../../../assets/traveler2.png';
import Traveler3 from '../../../assets/traveler3.png';
import Traveler4 from '../../../assets/traveler.png';

export default function Content1() {
	return (
		<Container style={{ fontFamily: 'Inter' }}>
			<div className="container-title-content1 mb-4 text-center">
				<p>
					How Can We Help You<br></br>?
				</p>
			</div>
			<div className="d-flex justify-content-around flex-wrap mt-5">
				<Card
					className="my-2"
					style={{ width: '22rem' }}
					width="364"
					height="260"
				>
					<Card.Img variant="top" src={Traveler} alt="Traveler" />
					<Card.Body>
						<Card.Title className="card-title-content1 text-center">
							Try Out KSN
						</Card.Title>
						<Card.Text className="card-subtitle-content1 text-center card-title-info">
							Kerjakan Try Out yang diadakan Ocademy secara gratis dan dapatkan hadiah dengan total 100 juta rupiah!
						<br></br>
						<Button className="buttondaftar" href="https://forms.gle/1pn94NWdvFPySoSE7">Daftar Sekarang</Button>
						</Card.Text>
					</Card.Body>
				</Card>

				<Card
					className="my-2"
					style={{ width: '22rem' }}
					width="364"
					height="260"
				>
					<Card.Img variant="top" src={Traveler2} alt="Traveler2" />
					<Card.Body>
						<Card.Title className="card-title-content1 text-center">
							Membership
						</Card.Title>
						<Card.Text className="card-subtitle-content1 text-center card-title-info">
							Daftar sebagai Member dan dapatkan akses Try Out, Video Pembelajaran, serta Video & PDF Pembahasan Soal oleh Ocademy
						<br></br>
						<Button className="buttondaftar" href="https://forms.gle/1pn94NWdvFPySoSE7">Daftar Sekarang</Button>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className="tips2 d-flex justify-content-around flex-wrap">
				<Card
					className="my-2"
					style={{ width: '22rem' }}
					width="364"
					height="260"
				>
					<Card.Img variant="top" src={Traveler3} alt="Traveler3" />
					<Card.Body>
						<Card.Title className="card-title-content1 text-center">
							Tutor Berkualitas
						</Card.Title>
						<Card.Text className="card-subtitle-content1 text-center card-title-info">
							Ocademy juga menyediakan banyak tutor yang memiliki banyak pengalaman akademis dan mengajar.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card
					className="my-2"
					style={{ width: '22rem' }}
					width="364"
					height="260"
				>
					<Card.Img variant="top" src={Traveler4} alt="Traveler4" />
					<Card.Body>
						<Card.Title className="card-title-content1 text-center mt-3">
							Pembahasan Soal KSN
						</Card.Title>
						<Card.Text className="card-subtitle-content1 text-center card-title-info">
							Lakukan pembelian pembahasan soal-soal KSN berbentuk PDF setelah pengerjaan Try Out!
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}
