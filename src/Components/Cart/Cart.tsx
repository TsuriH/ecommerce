import { ChosenProduct } from "../Products/ChosenProduct/ChosenProduct";
import "./Cart.css";

export function Cart(): JSX.Element {
    return (
        <div className="Cart">
            <div className="cart-container">
                <div className="cart-header">
                    <p>cart<span>(3)</span></p>
                    <button className="remove-all-btn">Remove all</button>
                </div>
                <div className="chosen-products-container">
                    <ChosenProduct />
                    <ChosenProduct />
                    <ChosenProduct />
                </div>

                <div className="total-container">
                    <p>total</p>
                    <p className="final-money-to-pay">$5,396</p>
                </div>

                <button className="checkout-btn">checkout</button>
            </div>
        </div>

    );
}
