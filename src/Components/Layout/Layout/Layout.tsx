import { CoverProduct } from "../CoverProduct/CoverProduct";
import { Header } from "../Header/Header";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>


            <main>
                <CoverProduct />
                {/* componenet of categories */}
                {/* componenet of single products */}

            </main>
            <footer>
                {/* contain the image and info */}

            </footer>
        </div>
    );
}
