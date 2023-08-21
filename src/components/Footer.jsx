import React from 'react'
import footerImg from '../icons_assets/footer_logo.png'
import '../style/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <footer>
            <img src={footerImg} alt=''/>
            <div className='footer-text'>
            <div className='doormat'>
            <h4>Doormat Navigation</h4>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <a href='#about'><li>About</li></a>
                    <Link to="menu/main-courses"><li>Menu</li></Link>
                    <Link to="reserve-table"><li>Reservation</li></Link>
                    <Link to="menu/main-courses"><li>Order Online</li></Link>
                </ul>
            </div>
            <div className='contact'>
            <h4>Contact</h4>
                <ul>
                    <li>Address: Address</li>
                    <li>Phone number<br/>+00 000 000 0000</li>
                    <li>email:<br/>littlelemon@gmail.com</li>
                </ul>
            </div>
            <div className='social-media-links'>
            <h4>Social Media Links</h4>
                <ul>
                    <li><a target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100071207536307'>Facebook</a></li>
                    <li><a target='_blank' rel='noreferrer' href='https://twitter.com/Lil_Lemon_LoL'>Twiter</a></li>
                    <li><a target='_blank' rel='noreferrer' href='https://www.instagram.com/littlelemon81/'>Instagram</a></li>
                </ul>
            </div>
            </div>
        </footer>
    </div>
  )
}
