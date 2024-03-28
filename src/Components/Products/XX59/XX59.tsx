import "./Xx99MarkOne.css";

import xx99MarkOne from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import xx99MarkTwo from "../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"

import manWithHeadphone from "../../../assets/shared/tablet/image-best-gear.jpg"

import blackHeadphones from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
// import xx99MarkOne from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import xx59 from "../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

import zx9 from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"


export function Xx99MarkOne(): JSX.Element {
    return (
        <div className="Xx99MarkOne">

            <div className="single-products-container">

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={xx99MarkOne} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2>xx99 mark | headphones</h2>
                    <p className="product-description">
                        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                    </p>
                    <p className="product-price">$1,750</p>
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
                        As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
                    </p>

                    <p className="lower-features-description">From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.

                    </p>
                </div>

                <div className="in-the-box-container">
                    <h2>in the box</h2>
                    <div className="accessories">
                        <p>1x</p>
                        <p>headphone unit</p>
                        <p>2x</p>
                        <p>replacement earcups</p>
                        <p>1x</p>
                        <p>user manual</p>
                        <p>1x</p>
                        <p>3.5mm 5m audio cable</p>


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
                        <h2 className="product-name">xx99 mark || </h2>
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
