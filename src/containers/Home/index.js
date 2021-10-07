import Header from "../../components/Header"
import Hero from "./Hero"
import Content from "./Content"
import Footer from "../../components/Footer"

export default function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
