import "./ChosenProduct.css";
import productCheckout from "../../../assets/cart/image-xx59-headphones.jpg"
export function ChosenProduct(): JSX.Element {
    return (
        <div className="ChosenProduct">

            <div className="product-container-image">
                <img src={productCheckout} alt="" />
            </div>

            <div className="products-details">
                <p className="product-name">xx99 mk ||</p>
                <p className="product-price">$2,999</p>
            </div>

            <div className="quantity">
                <button className="minus">-</button>
                <p className="quantity-number">1</p>
                <button className="plus">+</button>
            </div>

        </div>

    );
}


