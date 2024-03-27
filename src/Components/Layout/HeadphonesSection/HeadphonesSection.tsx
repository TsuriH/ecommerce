import "./HeadphonesSection.css";
import xx99MarkTwo from "../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
import xx99MarkOne from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import xx59 from "../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

import headphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import speakersCategory from "../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import earphonesCategory from "../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

export function HeadphonesSection(): JSX.Element {
    return (
        <div className="HeadphonesSection">

            <div className="single-products-container">

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={xx99MarkTwo} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2>xx99 mark || headphones</h2>
                    <p className="product-description">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                    </p>
                    <button>see product</button>
                </div>

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={xx99MarkOne} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2>xx99 mark | headphones</h2>
                    <p className="product-description">
                        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                    </p>
                    <button>see product</button>
                </div>

                <div className="single-headphones-container">

                    <div className="image-container">
                        <img src={xx59} alt="" />
                    </div>
                    <p className="new">new product</p>
                    <h2>XX59
                        Headphones</h2>
                    <p className="product-description">
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
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
