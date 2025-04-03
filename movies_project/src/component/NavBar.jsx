import { Link } from "react-router-dom";
import '../css/Navbar.css'


function NavBar() {

    return (

        <>
            <div className="navbar">
                <div className="nav-brand">
                    <Link to="/"><img className="logo" src={"logo.jpeg"} alt="MoviesVibe"/></Link>
                </div>
                <div className="navbar-link">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/favorites" className="nav-link">Favorites</Link>
                </div>

            </div>
        </>
    )
}



export default NavBar