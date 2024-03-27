import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import "./Layout.css";
import { Footer } from "../Footer/Footer";
import { HeadphonesSection } from "../HeadphonesSection/HeadphonesSection";
import { SpeakersSection } from "../SpeakersSection/SpeakersSection";
import { EarphoneSection } from "../EarphoneSection/EarphoneSection";
import { Xx99MarkTwo } from "../../Products/Xx99MarkTwo/Xx99MarkTwo";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                {/* <Main /> */}
                {/* <HeadphonesSection /> */}
                {/* <SpeakersSection /> */}
                {/* <EarphoneSection /> */}
                <Xx99MarkTwo />
            </main>

            <footer>
                <Footer />
                
            </footer>
        </div>
    );
}
