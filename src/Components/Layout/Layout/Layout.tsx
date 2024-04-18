import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import "./Layout.css";
import { Footer } from "../Footer/Footer";
import { HeadphonesSection } from "../HeadphonesSection/HeadphonesSection";
import { SpeakersSection } from "../SpeakersSection/SpeakersSection";
import { EarphoneSection } from "../EarphoneSection/EarphoneSection";
import { Xx99MarkTwo } from "../../Products/Xx99MarkTwo/Xx99MarkTwo";
import { Xx99MarkOne } from "../../Products/Xx99MarkOne/Xx99MarkOne";
import { Xx59 } from "../../Products/Xx59/Xx59";
import { Zx9 } from "../../Products/Zx9/Zx9";
import { Zx7 } from "../../Products/Zx7/Zx7";
import { Yx1 } from "../../Products/Yx1/Yx1";
import { Cart } from "../../Cart/Cart";
import Checkout from "../../Checkout/Checkout";
import { ThankYouPage } from "../ThankYouPage/ThankYouPage";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            {/* <Cart /> */}
            <header>
                <Header />
            </header>

            <main>
                <Main />
                {/* <HeadphonesSection /> */}
                <Main /> 
                <HeadphonesSection />
                {/* <SpeakersSection /> */}
                {/* <EarphoneSection /> */}
                {/* <Xx99MarkTwo /> */}
                {/* <Xx99MarkOne /> */}
                {/* <Xx59 /> */}
                {/* <Zx9 /> */}
                {/* <Zx7 /> */}
                {/* <Yx1 /> */}
                {/* <Checkout /> */}
                {/* <ThankYouPage /> */}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
