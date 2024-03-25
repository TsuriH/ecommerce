import "./Main.css";
import proProductImage from "../../../assets/home/mobile/image-header.jpg"
import earphonesCategory from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg-preview.png"
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
                            <img src={earphonesCategory} alt="" />
                        </div>
                        <p className="category-name">headphones</p>
                        <div className="shop-btn-container">
                            <button className="shop">shop</button>
                            <p><i className="arrow-right"></i></p>
                        </div>
                        <div className="lower-bg"></div>
                    </div>

                    <div className="single-category-container">
                        <img src="" alt="" />
                        <p className="category-name"></p>
                        <button className="shop"></button>
                        <div className="lower-bg"></div>
                    </div>

                    <div className="single-category-container">
                        <img src="" alt="" />
                        <p className="category-name"></p>
                        <button className="shop"></button>
                        <div className="lower-bg"></div>
                    </div>

                </div>
                <div className="single-products">this is the single products</div>
            </div>
        </div>
    );
}
