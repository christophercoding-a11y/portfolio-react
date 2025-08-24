import Nav from "./Nav"


const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="col">
                        <h1 className="heading text-capitalize">my portfolio page</h1>
                    </div>
                    <div className="col">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header