import Header from "../../components/Header";
import Headline from "./Headline";
import Content from "./Content";
import Footer from "../../components/Footer";

export default function Article(){
    return(
        <div>
            <div><Header /></div>
            <div><Headline /></div>
            <div><Content /></div>
            <div><Footer /></div>
        </div>
    )
}