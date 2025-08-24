const Footer =()=> {

    return (
        <footer className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
            <h2 className="contact-logo text-uppercase text-center text-sm-start">contact me</h2>
                    <ul className="contacts-list list-unstyled text-center text-sm-start">
                        <li><a href="tel:6014549412" className="PhoneNumber">Call Me</a></li>
                        <li><a href="mailto:christopherjack14@gmail.com" className="Email">Email Me</a></li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center text-sm-end social-item text-uppercase">socials</h2>
                    <nav className="nav social-nav justify-content-center justify-content-sm-end ">
                        <a href="https://github.com/christophercoding-a11y"target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="bi bi-github icons"></i>
                            <span className="visually-hidden">github</span>
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="bi bi-linkedin icons"></i>
                            <span className="visually-hidden">linkedin</span>
                        </a>
                        <a href="https://x.com/chriscode167957" target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="bi bi-twitter icons"></i>
                            <span className="visually-hidden">twitter</span>
                        </a>
                    </nav>
                </div>
            </div>
                <p className="colophon text-center">Site by Christopher Jackson</p>
                <p className="text-center"><a href="#header" className="BT">back to Top</a></p>
        </div>
    </footer>
    )
}

export default Footer