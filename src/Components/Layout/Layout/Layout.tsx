import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import "./Layout.css";
import { Footer } from "../Footer/Footer";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                <Main />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
