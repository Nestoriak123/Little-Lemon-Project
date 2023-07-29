import React from 'react'
import footerImg from '../icons_assets/footer_logo.png'
import '../style/Footer.css'

export default function Footer() {
  return (
    <div>
        <footer>
            <img src={footerImg} alt=''/>
            <div className='footer-text'>
            <div className='doormat'>
            <h4>Doormat Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
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
                    <li>Facebook</li>
                    <li>Twiter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            </div>
        </footer>
    </div>
  )
}
