import "./Main.css";
import proProductImage from "../../../assets/home/mobile/image-header.jpg"
import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
import zx9Speaker from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import zx7Speaker from "../../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg"
import yx1Earphones from "../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
export function Main(): JSX.Element {
    return (
        <div className="Main">
            <div className="container">

                <div className="promoted-product-cover">
                    <div className="pro-product-image-container">
                        <img className="pro-product-image" src={proProductImage} alt="" />
                    </div>

                    <div className="pro-product-info-container">
                        <p>new product</p>
                        <h2 className="product-name">XX99 Mark II HeadphoneS</h2>
                        <p className="product-description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
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

                <div className="single-products">

                    <div className="xz9-speaker-product">
                        <div className="zx9-image-container">
                            <img src={zx9Speaker} />
                        </div>
                        <h2>zx9 <span>speaker</span></h2>
                        <p className="speaker-info">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button>see product</button>
                        <div className="big-circle"></div>
                    </div>

                    <div className="zx7-speakers-product">
                        <div className="zx7Speaker-image-container">
                            <img src={zx7Speaker} />
                        </div>
                        <h2>zx7 speaker</h2>
                        <button>see product</button>
                    </div>

                    <div className="yx1-earphones-product-image">
                        <div className="yx1Earphones-image-container">
                            <img src={yx1Earphones} />
                        </div>
                    </div>
                    <div className="earphone-name-and-btn">
                        <h2>yx1 earphones</h2>
                        <button>see product</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
