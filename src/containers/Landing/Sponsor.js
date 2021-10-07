import './Sponsor.css'
import LogoSponsor from '../../assets/sponsor.png'
import { Image } from 'react-bootstrap'

export default function Sponsor() {
    return (
        <div className="d-flex justify-content-center">
            <Image className="foto-sponsor p-5" src={LogoSponsor} alt="LogoSponsor" fluid />
        </div>
    )
}
