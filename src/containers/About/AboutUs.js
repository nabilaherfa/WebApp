import React from "react";
import "./AboutUs.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import ocademy from "../../assets/ocademy.png";

export default function About() {
    return (
        <Container>
            <b><div className="header-about">Tentang Kami</div></b>
            <Row>
                <Col>
                    <Image className="logo-about justify-content-between" width="317" src={ocademy} />
                </Col>
                <Col>
                    <Row>
                        <b><div className="title-about">Ocademy adalah platform penyedia layanan pelatihan dan pembimbingan Kompetisi Sains Nasional yang berkualitas, terjangkau, dan online.</div></b>
                    </Row>
                    <Row>
                        <div className="content-about mt-4">Ocademy hadir menjadi solusi pelatihan KSN yang mudah, menyenangkan, berkualitas, dan terjangkau. Ocademy menjadi nafas segar bagi para pejuang medalist KSN di tengah pandemi Covid-19. Layanan Ocademy meliputi Try Out, Crash Course, serta Lomba KSN yang diadakan secara online.</div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
