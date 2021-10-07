import Header from "../../components/Header"
import CarouselImg from "./Carousel"
import ContentWhyVisitind from "./Contents/WhyVisitind"
import ContentTraveler from "./Contents/Traveler"
import ContentPackage from "./Contents/Package"
import ContentRoadmap from "./Contents/Roadmap"
import ContentInvestor from "./Contents/Investor"
import Sponsor from "./Sponsor"
import Footer from "../../components/Footer"

export default function Landing() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <CarouselImg />
            </div>
            <div>
                <ContentWhyVisitind />
            </div>
            <div>
                <ContentTraveler />
            </div>
            <div>
                <ContentPackage />
            </div>
            <div>
                <ContentRoadmap />
            </div>
            <div>
                <ContentInvestor />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
