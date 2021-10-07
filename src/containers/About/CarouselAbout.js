import { Carousel, Image} from "react-bootstrap"
import Carousel_1 from '../../assets/website.png'
import Carousel_2 from '../../assets/app.png'

export default function CarouselAbout(){
    return(
        <Carousel controls={false}>
            <Carousel.Item>
                <Image className="d-block w-100 h-100" src={Carousel_1} alt="Carousel_1"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 h-100" src={Carousel_2} alt="Carousel_2"/>
            </Carousel.Item>
        </Carousel>
    )
}