import "./Zx9.css";

import Zx9Speaker from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import xx99MarkTwo from "../../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"

import xx99MarkOne from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import manWithHeadphone from "../../../assets/shared/tablet/image-best-gear.jpg"

import blackHeadphones from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"

import xx59 from "../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

import zx9 from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"


export function Zx9(): JSX.Element {
    return (
        <div className="Zx9">

            <div className="single-products-container">

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={Zx9Speaker} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2> zx9 speaker</h2>
                    <p className="product-description">
                        Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                    </p>
                    <p className="product-price">$4,500</p>
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
                        Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                    </p>

                    <p className="lower-features-description"> Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.

                    </p>
                </div>

                <div className="in-the-box-container">
                    <h2>in the box</h2>
                    <div className="accessories">
                        <p>2x</p>
                        <p>speaker unit</p>
                        <p>2x</p>
                        <p>speaker cloth panel</p>
                        <p>1x</p>
                        <p>user manual</p>
                        <p>1x</p>
                        <p>3.5mm 5m audio cable</p>
                        <p>1x</p>
                        <p>10m optical cable</p>


                    </div>

                </div>
                <div className="design-break-container">

                    <div className="grey-square">
                    </div>

                    <div className="grey-square">
                    </div>

                    <div className="grey-square-longer">

                    </div>


                </div>

                <div className="you-may-also-like-container">
                    <h2>you may also like</h2>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={xx99MarkTwo} alt="" />
                        </div>
                        <h2 className="product-name">zx7 speaker </h2>
                        <button>see product</button>
                    </div>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={xx99MarkOne} alt="" />
                        </div>
                        <h2 className="product-name">xx99 mark |</h2>
                        <button>see product</button>
                    </div>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={xx59} alt="" />
                        </div>
                        <h2 className="product-name">xx59</h2>
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
