import './Content.css';
import { Card, Container, Image } from 'react-bootstrap'
import jatimpark2 from '../../assets/jatimpark2.png'
import danautoba from '../../assets/jatimpark2.png'
import pasarrayabandung from '../../assets/jatimpark2.png'
import ocademy_logo_circle from '../../assets/ocademy.png'
import news from '../../assets/news.png'
import truck from '../../assets/truck.png'
import cilinder from '../../assets/cilinder.png'

export default function Content() {
    return (
        <Container className="my-5">
        <div className="mt-5 mb-4">
                <h3>Why Ocademy?</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="d-flex">
                        <Image src={ocademy_logo_circle} alt="ocademy_logo_circle" className="content-logo"></Image>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <p className="ml-4">
                        <b>Platform All in One Persiapan KSN</b><br></br>
                        Platform All in One yang hadir untuk menjadi solusi permasalahan siswa dalam mencari pelatihan dan pembimbingan KSN yang berkualitas, terjangkau, dan menyenangkan.
                        <br></br> <br></br>
                        Menyediakan tutor terbaik dari berbagai bidang. Menyediakan soal-soal latihan yang sesuai kurikulum KSN dan HOTS. Produk yang kami jual terjangkau untuk kantong siswa.
                        Metode pembelajaran yang kami gunakan menyenangkan, enjoy, dan mudah dimengerti.
                    </p>
                </div>
            </div>

            <div className="destinasi d-flex justify-content-around flex-wrap my-5">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={news} alt="visitind_logo_circle" width="100" height="80" className="icon-news" />
                    <Card.Body className="text-center">
                        <Card.Title className="home-title">Berkualitas</Card.Title>
                        <Card.Text  >
                            Menyediakan tutor terbaik dari berbagai bidang. Menyediakan soal-soal latihan yang sesuai kurikulum KSN dan HOTS.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={truck} alt="visitind_logo_circle" width="100" height="80" className="icon-news" />
                    <Card.Body className="text-center">
                        <Card.Title className="home-title">Terjangkau</Card.Title>
                        <Card.Text >
                            Produk yang kami jual terjangkau untuk kantong siswa.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cilinder} alt="visitind_logo_circle" width="100" height="80" className="icon-news" />
                    <Card.Body className="text-center">
                        <Card.Title className="home-title">Menyenangkan</Card.Title>
                        <Card.Text >
                            Metode pembelajaran yang kami gunakan menyenangkan, enjoy, dan mudah dimengerti.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-5 mb-4">
                <h3>Tutor-Tutor Ocademy</h3>
            </div>
            <div className="destinasi d-flex justify-content-between flex-wrap my-5">
                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jatimpark2} alt="jatimpark2" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={danautoba} alt="danautoba" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pasarrayabandung} alt="pasarrayabandung" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="destinasi d-flex justify-content-between flex-wrap my-5">
                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jatimpark2} alt="jatimpark2" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={danautoba} alt="danautoba" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pasarrayabandung} alt="pasarrayabandung" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="destinasi d-flex justify-content-between flex-wrap my-5">
                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jatimpark2} alt="jatimpark2" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={danautoba} alt="danautoba" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pasarrayabandung} alt="pasarrayabandung" />
                    <Card.Body>
                        <Card.Text className="card-title text-center">
                            Nabila
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}
