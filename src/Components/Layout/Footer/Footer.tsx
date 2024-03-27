import "./Footer.css";
import manWithHeadphones from "../../../assets/shared/mobile/image-best-gear.jpg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



export function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="company-details">
                <div className="footer-image-container">
                    <img src={manWithHeadphones} className="manWithHeadphones" />
                </div>
                <p className="slogan">Bringing you the <span>best</span> audio gear</p>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

        

            <div className="nav-and-info">
                <h2>audiophile</h2>
                <nav>
                    <a>home</a>
                    <a>headphones</a>
                    <a>speakers</a>
                    <a>earphones</a>
                </nav>

                <p className="company-info">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>

                <p className="copyrights">
                    Copyright 2021. All Rights Reserved
                </p>

                <div className="social-icons">

                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>

            </div>
        </div>
    );
}
