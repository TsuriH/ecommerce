import "./Checkout.css";

function Checkout(): JSX.Element {
    return (
        <div className="Checkout">
            <form>
                <div className="billing-details">
                    <label htmlFor="name"></label>
                    <input id="name" />

                    <label htmlFor="name"></label>
                    <input id="name" />

                    <label htmlFor="name"></label>
                    <input id="name" />
                </div>
                <div className="shipping-info"></div>
                <div className="payment-details"></div>
            </form>


        </div>
    );
}

export default Checkout;
