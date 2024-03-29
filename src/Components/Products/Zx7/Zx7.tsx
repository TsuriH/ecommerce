import "./Zx7.css";

import Zx7Image from "../../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"

import zx9Image from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import xx99MarkOne from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import manWithHeadphone from "../../../assets/shared/tablet/image-best-gear.jpg"

import blackHeadphones from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"

import xx59 from "../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

import zx9 from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

import zx7EnvironmentPicture from "../../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg"

export function Zx7(): JSX.Element {
    return (
        <div className="Zx7">

            <div className="single-products-container">

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={Zx7Image} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2> zx7 speaker</h2>
                    <p className="product-description">
                        Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                    </p>
                    <p className="product-price">$3,500</p>
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
                        Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
                    </p>

                    <p className="lower-features-description"> The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.

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


                    <div className="picture-container-speaker">
                        <img src={zx7EnvironmentPicture} className="zx7-environment-picture" />
                    </div>


                </div>

                <div className="you-may-also-like-container">
                    <h2>you may also like</h2>

                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={zx9Image} alt="" />
                        </div>
                        <h2 className="product-name">zx9 speaker </h2>
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
