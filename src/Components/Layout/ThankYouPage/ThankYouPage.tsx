import "./ThankYouPage.css";
import vimage from "../../../assets/checkout/icon-order-confirmation.svg"
import productImage from "../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
export function ThankYouPage(): JSX.Element {
    return (
        <div className="ThankYouPage">
            <div className="header">
                <img src={vimage} alt="" />
                <p className="thank-you">THANK YOU <br></br>
                    FOR YOUR ORDER</p>
                <p className="you-will-receive">You will receive an email confirmation shortly.</p>
            </div>
            <div className="order-details">
                <div className="products">
                    <div className="products-details">
                        <img src={productImage} alt="" className="product-image" />
                        <div className="product-details">
                            <p className="type">xx99 mk ||</p>
                            <p>$2,999</p>
                        </div>
                        <p className="quantity">X1</p>
                    </div>
                    <hr />
                    <p className="other-items">and 2 other item(s)</p>
                </div>

            </div>
            <div className="grand-total">
                <p className="grand">grand total</p>
                <p>$5,446</p>
            </div>

            <button>back to home</button>
        </div>
    );
}
