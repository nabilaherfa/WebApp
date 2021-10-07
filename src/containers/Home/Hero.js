import { Button, Image } from "react-bootstrap";
import "./Hero.css";
import Background from '../../assets/landocademy.jpg'

export default function Hero() {
    return (
        <div className="Hero">
            <Image src={Background} alt="Background" className="image" />
            <div className="text">
                <h1 className="title">Be A Golden Generation</h1>
                <h1 className="title">Be A Gold Medalist</h1>
                <p className="subtitle">
                    Semua persiapan KSN dalam satu platform!
                </p>
                <p>
                    <Button className="button" href="/lomba">Lihat Produk Kami</Button>
                </p>
            </div>
        </div>
    );
}
