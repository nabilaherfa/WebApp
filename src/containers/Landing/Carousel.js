import { Carousel, Image, Button } from 'react-bootstrap';
import './Carousel.css';
import Carousel_1 from '../../assets/landocademy.jpg';
import Carousel_2 from '../../assets/maintenance.jpg';
import Carousel_4 from '../../assets/Carousel_4.png';

export default function CarouselImg() {
	return (
		<Carousel style={{ fontFamily: 'Inter' }}>
			<Carousel.Item>
				<Image id="imgg"className='d-block w-100' src={Carousel_1} alt='Carousel_1' />
				<Carousel.Caption>
					<div className='d-flex flex-column text-carousel1'>
						<div id ="kataa"className='title-carousel1 p-2'>
							<span>
								Daftar Try Out Nasional Ocademy<br></br>Berhadiah Total 100 Juta Rupiah!!
							</span>
						</div>
						<div className='subtitle-carousel1 p-2 mb-3'>
							<p>
                    			<Button className="button" href="https://forms.gle/1pn94NWdvFPySoSE7">Daftar Sekarang</Button>
                			</p>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image id="imgg" className='d-block w-100' src={Carousel_2} alt='Carousel_2' />
				<Carousel.Caption>
					<div className='d-flex flex-column text-carousel2'>
						<div id="kataaa"className='title-carousel2 p-2'>
							<span>
								Daftar Memberhsip <br></br>Dapatkan Seluruh Akses Try Out dan Pembahasan Soal
							</span>
						</div>
						<div className='subtitle-carousel2 p-2 mb-3'>
							<p>
                    			<Button className="button2" href="https://forms.gle/1pn94NWdvFPySoSE7">Daftar Sekarang</Button>
                			</p>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			{/* <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={Carousel_3} alt="Carousel_3"
                />
                <Carousel.Caption>
                    <div className="d-flex flex-column justify-content-start align-content-start text1-carousel2">
                        <div className="title1-carousel2 p-2">
                            <span>DOWNLOAD</span>
                        </div>
                        <div className="subtitle1-carousel2 p-2">
                            <span>Our New App</span>
                        </div>
                        <div className="subtitle2-carousel2 p-2 mb-3 mt-2">
                            <span>All over Indonesia just one click away with our service.</span>
                        </div>
                        <a href="https://twitter.com/">
                            <Image
                                className="tombol-gplay ml-2"
                                src={Button_GPlay} alt="Button_GPlay"
                                width="230px"
                                height="67px"
                            />
                        </a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item> */}
			<Carousel.Item>
				<Image className='d-block w-100' src={Carousel_4} alt='Carousel_4' />
				<Carousel.Caption>
					<div className='d-flex flex-column text2-carousel2'>
						<div className='title2-carousel3 p-2'>
							<span>Mobile App</span>
						</div>
						<div className='subtitle2-carousel3 p-2'>
							<span>Development</span>
						</div>
						<div className='subtitle3-carousel3 p-2 my-4'>
							<span>We are launching our app very soon.</span>
						</div>
						{/* <Button className="tombol-more ml-2" href="https://twitter.com/">
                            More Info
                        </Button> */}
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
