import bgDesktop from "/images/bg-header-desktop.svg";
import bgMobile from "/images/bg-header-mobile.svg";

export default function Header() {
    return (
        <header className="header">
            <picture className="header__mobile">
                <img src={bgMobile} alt="" />
            </picture>
            <picture className="header__desktop">
                <img src={bgDesktop} alt="" />
            </picture>
        </header>
    );
}
