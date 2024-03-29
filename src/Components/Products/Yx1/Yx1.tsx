import "./Yx1.css";

import Yx1Image from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

import xx99MarkTwo from "../../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"

import xx99MarkOne from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import manWithHeadphone from "../../../assets/shared/tablet/image-best-gear.jpg"

import blackHeadphones from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"

import xx59 from "../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

import zx9 from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

import yx1GalleryOne from "../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg"

import yx1GalleryTwo from "../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg"

import yx1GalleryThree from "../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg"


export function Yx1(): JSX.Element {
    return (
        <div className="Yx1">

            <div className="single-products-container">

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={Yx1Image} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2> yx1 wireless earphones</h2>
                    <p className="product-description">
                        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <p className="product-price">$599</p>
                    <div className="quantity-and-add">
                        <div className="quantity-container">
                            <p className="minus">-</p>
                            <p className="quantity">1</p>
                            <p className="minus">+</p>
                        </div>
                        <button>add to cart</button>
                    </div>


                </div>
                <div className="features-container">
                    <h2>features</h2>
                    <p className="upper-features-description">
                        Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                    </p>

                    <p className="lower-features-description"> Discover  The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.

                    </p>
                </div>

                <div className="in-the-box-container">
                    <h2>in the box</h2>
                    <div className="accessories">
                        <p>2x</p>
                        <p>earphone unit</p>
                        <p>6x</p>
                        <p>multi-size earplugs</p>
                        <p>1x</p>
                        <p>user manual</p>
                        <p>1x</p>
                        <p>usb-c charging cable</p>
                        <p>1x</p>
                        <p>travel pouch</p>


                    </div>

                </div>
                <div className="design-break-container">

                    <div className="smaller-environment-image-container">
                        <img src={yx1GalleryOne} />

                    </div>

                    <div className="smaller-environment-image-container">
                        <img src={yx1GalleryTwo} />

                    </div>

                    <div className="environment-image-container">
                        <img src={yx1GalleryThree} />

                    </div>


                </div>

                <div className="you-may-also-like-container">
                    <h2>you may also like</h2>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={xx99MarkOne} alt="" />
                        </div>
                        <h2 className="product-name">x99 mark |</h2>
                        <button>see product</button>
                    </div>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={xx59} alt="" />
                        </div>
                        <h2 className="product-name">xx59</h2>
                        <button>see product</button>
                    </div>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={zx9} alt="" />
                        </div>
                        <h2 className="product-name">zx9 speaker</h2>
                        <button>see product</button>
                    </div>

                </div>

                <div className="products-categories">

                    <div className="single-category-container">
                        <div className="category-image-container">
                            <img src={headphonesCategory} alt="" />
                        </div>
                        <p className="category-name">headphones</p>
                        <div className="shop-btn-container">
                            <button className="shop">shop</button>
                            <p><i className="arrow-right"></i></p>
                        </div>
                        <div className="lower-bg"></div>
                    </div>

                    <div className="single-category-container">
                        <div className="category-image-container">
                            <img src={speakersCategory} alt="" />
                        </div>
                        <p className="category-name">headphones</p>
                        <div className="shop-btn-container">
                            <button className="shop">shop</button>
                            <p><i className="arrow-right"></i></p>
                        </div>
                        <div className="lower-bg"></div>
                    </div>

                    <div className="single-category-container">
                        <div className="category-image-container">
                            <img src={earphonesCategory} alt="" />
                        </div>
                        <p className="category-name">headphones</p>
                        <div className="shop-btn-container">
                            <button className="shop">shop</button>
                            <p><i className="arrow-right"></i></p>
                        </div>
                        <div className="lower-bg"></div>
                    </div>

                </div>




            </div>

        </div>
    );
}
