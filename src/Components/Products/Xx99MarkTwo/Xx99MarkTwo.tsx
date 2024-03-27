import "./Xx99MarkTwo.css";
import xx99MarkTwo from "../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
import manWithHeadphone from "../../../assets/shared/mobile/image-best-gear.jpg"

export function Xx99MarkTwo(): JSX.Element {
    return (
        <div className="Xx99MarkTwo">

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
                    <p className="product-price">$2,999</p>
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
                        Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                    </p>

                    <p className="lower-features-description">The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.

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
                        <p>1x</p>
                        <p>travel bag</p>
                        
                    </div>
                </div>

                <div className="environment-image-man-headphone-container">
                <img src={manWithHeadphone} alt="" />

            </div>

            </div>

           



        </div>
    );
}
