import Nav from "./Nav"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="heading text-capitalize">my portfolio webpage</h1>
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