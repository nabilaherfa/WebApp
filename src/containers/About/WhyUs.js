import React from "react";
import "./WhyUs.css";
import { Container, Image, Card } from "react-bootstrap";
import simple from "../../assets/news.png";
import safety from "../../assets/truck.png";
import affordable from "../../assets/cilinder.png";

export default function WhyUs() {
    return (
        <Container fluid className="bg">
            <b><div className="header-why">WHY <span class="us-txt">US</span> ?</div></b>
            <div className="d-flex justify-content-around" fluid>
                <Card className="card-why">
                    <center><Image className="img-why" src={simple} /></center>
                    <b><div className="judul-why">Kemudahan Akses</div></b>
                    <div className="content-why">Mengedepankan kemudahan bagi siswa seluruh Indonesia dalam mengakses dan menggunakan layanan.</div>
                </Card>
                <Card className="card-why">
                    <center><Image className="img-why" src={safety} /></center>
                    <b><div className="judul-why">Berkualitas</div></b>
                    <div className="content-why">Semua layanan yang Ocademy berikan berkualitas, baik dari segi tutor, soal, maupun materi yang diberikan. </div>
                </Card>
                <Card className="card-why">
                    <center><Image className="img-why" src={affordable} /></center>
                    <b><div className="judul-why">Harga Terjangkau</div></b>
                    <div className="content-why">Harga layanan yang bersahabat bagi kalangan siswa.</div>
                </Card>
            </div>
        </Container>
    )
}
