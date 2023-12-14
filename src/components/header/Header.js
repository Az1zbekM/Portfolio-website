import './style.css';

const Header = () => {
    return (<header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Azizbek</em></strong><br />
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Y5z0l51svbjZKW92d4A4fh6AEoVjNNjt/view?usp=sharing" download="frontend.pdf" className="btn">Download CV</a>
        </div>
    </header> );
}
 
export default Header;