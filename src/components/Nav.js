import { Link } from "react-router";

const Nav = () => {
    return (
        <div className="text-center mt-3">
            <div className="dropdown d-lg-none mb-5">
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="navDropdown" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    select tab
                </button>
                <ul className="dropdown-menu" aria-labelledby="navDropdown">
                    <li><Link to="/" className="dropdown-item">Home</Link></li>
                    <li><Link to="/projects" className="dropdown-item">Projects</Link></li>
                </ul>
            </div>
            <nav className="d-none d-lg-flex justify-content-center">
                <Link to="/" className="btn btn-link">Home</Link>
                <Link to="/projects" className="btn btn-link">Projects</Link>
            </nav>
        </div>
    )
}

export default Nav;