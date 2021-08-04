import React from 'react';
import './styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer__sections">
                <h3>ABOUT</h3>
                <ul>
                    <li>How Airbnb works</li>
                    <li>Newsroom</li>
                    <li>Airbnb Plus</li>
                    <li>Airbnb Luxe</li>
                    <li>HotelTonight</li>
                    <li>Airbnb for Work</li>
                    <li>Olympics</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="footer__sections">
                <h3>COMMUNITY</h3>
                <ul>
                    <li>Diversity & Belonging</li>
                    <li>Accessibility</li>
                    <li>Airbnb Associates</li>
                    <li>Frontline Stays</li>
                    <li>Invite friends</li>
                    <li>Airbnb.org</li>
                </ul>
            </div>
            <div className="footer__sections">
                <h3>HOST</h3>
                <ul>
                    <li>Host your home</li>
                    <li>Host an Online Experience</li>
                    <li>Host an Experience</li>
                    <li>Responsible hosting</li>
                    <li>Resource Centre</li>
                    <li>Community Centre</li>
                </ul>
            </div>
            <div className="footer__sections">
                <h3>SUPPORT</h3>
                <ul>
                    <li>Our COVID-19 Response</li>
                    <li>Help Centre</li>
                    <li>Cancellation options</li>
                    <li>Neighbourhood Support</li>
                    <li>Trust & Safety</li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright">
            <p>© 2020 Airbnb Clone, Inc. No rights reserved{"  "}·{"  "}Privacy{"  "}·{"  "}Terms{"  "}·{"  "}Sitemap</p>
            <div className="footer__copyrightIcons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
        </>
    )
}

export default Footer;
