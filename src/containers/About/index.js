import Header from '../../components/Header';
import AboutUs from './AboutUs';
import WhyUs from './WhyUs';
import CarouselAbout from './CarouselAbout';
import Service from './Service';
import Footer from '../../components/Footer';

export default function About() {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<AboutUs />
			</div>
			<div>
				<Service />
			</div>
			<div>
				<WhyUs />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
