import "./Checkout.css";
import productCheckout from "../../assets/cart/image-xx59-headphones.jpg"
function Checkout(): JSX.Element {
    return (
        <div className="Checkout">
            <form>
                <h1>Checkout</h1>
                <div className="billing-details">
                    <h2 className="billing-details">billing details</h2>
                    <label htmlFor="name">name</label>
                    <input id="name" type="text" placeholder="alexel ward" />

                    <label htmlFor="email">email address</label>
                    <input id="email" type="email" placeholder="alexei@mail.com" />

                    <label htmlFor="phone-num">phone number</label>
                    <input id="phone-num" type="number" placeholder="+1202-555-0136" />
                </div>

                <div className="shipping-info">
                    <h2>shipping info</h2>
                    <label htmlFor="street">your address</label>
                    <input id="street" placeholder="1137 williams avenue" />

                    <label htmlFor="zip-code">ZIP code</label>
                    <input id="zip-code" type="number" placeholder="10001" />

                    <label htmlFor="country">country</label>
                    <input id="country" type="text" placeholder="united states" />

                    <label htmlFor="city">cityWh</label>
                    <input id="city" type="text" placeholder="new york" />
                </div>

                <div className="payment-details">
                    <h2 className="payment-details">payment details</h2>

                    <label>payment method</label>
                    <label htmlFor="e-money" className="payment-method"><span>
                        e-Money</span>
                        <input id="e-money" type="radio" name="payment-method" />
                    </label>

                    <label htmlFor="cash-on-delivery" className="payment-method"><span>Cash on Delivery</span>
                        <input id="payment-method" type="radio" name="payment-method" />
                    </label>

                    <label htmlFor="e-money-number" className="e-money-number">e-money number</label>
                    <input type="number" id="e-money-number" />

                    <label htmlFor="e-money-pin">e-money pin</label>
                    <input type="number" id="e-money-pin" />
                </div>
            </form>

            <div className="summary">
                <h2>summary</h2>
                <div className="products-container">
                    <div className="product-container">
                        <img src={productCheckout} alt="" />
                        <div className="mini-container-descr">
                            <p>xx99 mk ||</p>
                            <p>$2,999</p>
                        </div>
                        <p className="quantity">x1</p>
                    </div>

                    <div className="product-container">
                        <img src={productCheckout} alt="" />
                        <div className="mini-container-descr">
                            <p>xx59</p>
                            <p>$899</p>
                        </div>
                        <p className="quantity">x2</p>
                    </div>

                    <div className="product-container">
                        <img src={productCheckout} alt="" />
                        <div className="mini-container-descr">

                            <p>yx1</p>
                            <p>$599</p>
                        </div>
                        <p className="quantity">x1</p>
                    </div>
                </div>

                <div className="recap">
                    <p>total</p>
                    <p className="price">$5396</p>

                    <p>shipping</p>
                    <p className="price">$50</p>

                    <p>vat (included)</p>
                    <p className="price">$1079</p>

                    <p>grand total</p>
                    <p className="price">$5446</p>
                </div>

            </div>

                <button>continue & pay</button>

        </div>
    );
}

export default Checkout;