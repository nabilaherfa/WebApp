import React, { Component } from 'react';
import { Container, Carousel, Image} from "react-bootstrap"
import './Service.css'
import tourist from '../../assets/tourist.png'
import lodge from '../../assets/lodge.png'
import transport from '../../assets/transport.png'
import vtour from '../../assets/vtour.png'
import ftrip from '../../assets/ftrip.png'
import honeymoon from '../../assets/honeymoon.png'

export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            direction: null,
            nextIcon: <span aria-hidden="true" className="carousel-control-next-icon carousel-layanan" />,
            prevIcon: <span aria-hidden="true" className="carousel-control-prev-icon carousel-layanan" />
        }
    }
    render(){
    const {nextIcon,prevIcon}=this.state;
    return(
        <Container>
            <b><div className="header-layanan">Bidang KSN</div></b>
            <Carousel indicators={false} nextIcon ={nextIcon} prevIcon={prevIcon}>
                <Carousel.Item>
                    <Image className="d-block w-100" src={tourist}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Matematika</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={lodge}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Fisika</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={transport}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Kimia</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={vtour}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Biologi</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={ftrip}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Geografi</div>
                        <div className="content-layanan"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={honeymoon}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Kebumian</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={honeymoon}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Astronomi</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={honeymoon}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Komputer</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={honeymoon}/>
                    <Carousel.Caption>
                        <div className="title-layanan">Bidang Ekonomi</div>
                        <div className="content-layanan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh purus, lacinia vellaaara.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse nibh purus, lacinia
                        vellaaara.</div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
}