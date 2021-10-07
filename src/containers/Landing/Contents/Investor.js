import { Container, Card, Button } from "react-bootstrap";
import Investor from "../../../assets/investor.png"
import "./Investor.css"

export default function ContentInvestor() {
    return (
        <Container style={{ fontFamily: 'Inter' }}>
            <div className="logo d-flex justify-content-around flex-wrap my-5">
                <Card className="my-2" style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={Investor} alt="Investor" />
                </Card>

                <Card className="my-2" style={{ width: '25rem' }}>
                    <Card.Body className="text-center">
                        <Card.Title className="card-title-investor">
                            Produk Kami
                        </Card.Title>
                        <Card.Text className="card-subtitle-investor">
                            Daftar Try Out Gratis Ocademy sekarang juga!
                        </Card.Text>
                        <Button className="button-selengkapnya" href="/lomba">
                            Daftar sekarang
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
