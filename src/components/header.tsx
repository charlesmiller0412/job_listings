import bgDesktop from "/images/bg-header-desktop.svg";
import bgMobile from "/images/bg-header-mobile.svg";

export default function Header() {
    return (
        <div className="header">
            <div className="header__mobile">
                <img src={bgMobile} />
            </div>
            <div className="header__desktop">
                <img src={bgDesktop} />
            </div>
        </div>
    );
}
