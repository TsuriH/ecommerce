import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';


export function Header(): JSX.Element {
    return (
        <div className="Header">
			<FontAwesomeIcon icon={faBars} className="hamburger-menu"/>
            <h1>audiophile</h1>
			<FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}
