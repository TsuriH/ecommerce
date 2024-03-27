import "./EarphoneSection.css";
import yx1 from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"


import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

export function EarphoneSection(): JSX.Element {
    return (
        <div className="EarphoneSection">

            <div className="single-products-container">

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={yx1} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2>xx99 mark || headphones</h2>
                    <p className="product-description">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                    </p>
                    <button>see product</button>
                </div>

            </div>

            <div className="category-product-container">

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
    );
}
