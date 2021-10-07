import { Card, Container } from 'react-bootstrap';
import './WhyVisitind.css';
import VisitindLogo from '../../../assets/ocademy.png';
import News from '../../../assets/news.png';
import Truck from '../../../assets/truck.png';
import Cilinder from '../../../assets/cilinder.png';

export default function ContentWhyVisitind() {
	return (
		<Container style={{ fontFamily: 'Inter' }}>
			<div className="ml-3 mt-4">
				<h3 className="title-whyvisitind">Why Ocademy?</h3>
			</div>
			<div className="d-flex justify-content-between flex-wrap mb-5">
				<Card className="mt-5 p-3 d-flex" style={{ width: '17rem' }}>
					<Card.Img
						src={VisitindLogo}
						alt="VisitindLogo"
						width="180"
						height="180"
						className="icon-logo"
					/>
					<Card.Body className="text-left visitind-p">
						<Card.Text clasName="subtitle-icon">
							Platform All in One yang hadir untuk menjadi solusi permasalahan siswa dalam mencari pelatihan dan pembimbingan KSN yang berkualitas, terjangkau, dan menyenangkan.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-5 p-3" style={{ width: '17rem' }}>
					<Card.Img
						variant="top"
						src={News}
						alt="News"
						width="100"
						height="70"
						className="icon-news"
					/>
					<Card.Body className="text-left">
						<Card.Title className="title-icon">Berkualitas</Card.Title>
						<Card.Text clasName="subtitle-icon">
							Menyediakan tutor terbaik dari berbagai bidang. Menyediakan soal-soal latihan yang sesuai kurikulum KSN dan HOTS.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-5 p-3" style={{ width: '17rem' }}>
					<Card.Img
						variant="top"
						src={Truck}
						alt="Truck"
						width="100"
						height="70"
						className="icon-news"
					/>
					<Card.Body className="text-left">
						<Card.Title className="title-icon">Terjangkau</Card.Title>
						<Card.Text clasName="subtitle-icon">
							Produk yang kami jual terjangkau untuk kantong siswa.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-5 p-3" style={{ width: '17rem' }}>
					<Card.Img
						variant="top"
						src={Cilinder}
						alt="Cilinder"
						width="100"
						height="70"
						className="icon-news"
					/>
					<Card.Body className="text-left">
						<Card.Title className="title-icon">Menyenangkan</Card.Title>
						<Card.Text clasName="subtitle-icon">
							Metode pembelajaran yang kami gunakan menyenangkan, enjoy, dan mudah dimengerti.
						</Card.Text>
					</Card.Body>
				</Card>

			</div>
		</Container>
	);
}
