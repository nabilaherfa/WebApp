import HeadlinePhoto from "../../assets/ArticlePage/Headline.png"
import { Container, Image } from "react-bootstrap"
import "./Headline.css"

export default function Headline(){
    return(
        <Container style={{ fontFamily: 'Inter' }}>
            <Image 
                className="headline-photo"
                src={HeadlinePhoto}
                alt="HeadlinePhoto"
            />
            <p className="headline-subtitle mt-1">
                Created by Visit Indonesia | June 10, 2021 - 13.00 WIB | 3 min read
            </p>
        </Container>
    )
}