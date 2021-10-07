import { Navbar, Nav, Image } from 'react-bootstrap';
import './index.css';
import ocademy_logo from '../../assets/ocademy.png';

export default function Header() {
    return (
        <Navbar className='Navbar justify-content-start py-2' activeKey='/home' fixed='top'>
            <Nav.Item>
                <a href='/home'>
                    <Image
                        src={ocademy_logo}
                        width='90'
                        height='60'
                        className='logo_ocademy align-left'
                        alt='Logo VisitInd'
                    />
                </a>
            </Nav.Item>
            <div className='header-link d-flex justify-content-end w-100'>
                <Nav.Item>
                    <Nav.Link className='nav-link-home' href='/home'>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-link-partner' href='/about'>
                        About Us
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-link-career' href='/lomba'>
                        Product
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-link-career' href='https://ocademyofficial.net/login/index.php'>
                        Login
                    </Nav.Link>
                </Nav.Item>
            </div>
        </Navbar>
    );
}