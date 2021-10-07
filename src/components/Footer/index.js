import './index.css';
import { Image } from 'react-bootstrap';
import Logo from '../../assets/ocademy.png';
import Facebook from '../../assets/Footer/ContactUs/facebook.png';
import Tiktok from '../../assets/Footer/ContactUs/tiktok.png';
import Instagram from '../../assets/Footer/ContactUs/instagram.png';
import Youtube from '../../assets/Footer/ContactUs/youtube.png';

export default function Footer() {
	return (
		<div className="footer-body container-fluid">
			<div className="row py-4 px-5 px-md-5 py-md-5">
				<div className="col-12 col-lg-6 px-2 px-md-5 mb-4 mb-lg-2">
					<h4 className="mb-4 d-flex justify-content-center justify-content-lg-start">
						Kontak
					</h4>
					<div className="d-flex">
						<Image src={Logo} className="footer-logo" alt="Logo VisitInd" />
						<p className="ml-3 mt-2">
							Be A Golden Generation with Ocademy!
							<br></br>
							<br></br>
							Nikmati produk & layanan kami dengan <br></br> mudah, aman, dan nyaman.
						</p>
					</div>
				</div>
				<div className="col-12 d-flex align-items-center mb-4 mb-lg-2 col-lg-2 align-items-lg-start flex-column">
					<h4 className="mb-4 d-flex justify-content-left">Menu</h4>
					<div className="mt-lg-0 d-flex justify-content-left">
						<ul className="link">
							<a href="/home">
								<li className="mb-3 links">Home</li>
							</a>
							<a href="/about">
								<li className="mb-3 links">About Us</li>
							</a>
							<a href="/lomba">
								<li className="mb-3 links">Product</li>
							</a>
							<a href="https://forms.gle/1pn94NWdvFPySoSE7">
								<li className="mb-3 links">Register Try Out</li>
							</a>
							<a href="/article">
								<li className="mb-3 links">Artikel</li>
							</a>
							<a href="/">
								<li className="mb-3 links">Others</li>
							</a>
						</ul>
					</div>
				</div>
				<div className="col-12 d-flex align-items-center col-lg-2 align-items-lg-start flex-column">
					<h4 className="mb-lg-4">Ikuti Kami</h4>
					<ul class="contact-list icons">
						<a href="https://www.tiktok.com/ocademyofficial">
							<li className="mb-3 links">
								<Image src={Tiktok} className="mr-2" alt="Logo Twitter" />
								<span>ocademy.id</span>
							</li>
						</a>
						<a href="/">
							<li className="mb-3 links">
								<Image src={Facebook} className="mr-2" alt="Logo Facebook" />
								<span>Ocademy Official</span>
							</li>
						</a>
						<a href="https://www.instagram.com/ocademy.id/">
							<li className="mb-3 links">
								<Image src={Instagram} className="mr-2" alt="Logo Instagram" />
								<span>ocademy.id</span>
							</li>
						</a>
						<a href="/">
							<li className="mb-3 links">
								<Image src={Youtube} className="mr-2" alt="Logo Youtube" />
								<span>Ocademy Official</span>
							</li>
						</a>
					</ul>
				</div>
			</div>
			<div className="d-flex justify-content-center px-1 px-md-5 py-1">
				<p>Copyright © 2020 Ocademy</p>
			</div>
		</div>
	);
}
