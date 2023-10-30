import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav class="navbar bg-danger">
            <div class="d-flex justify-content-center align-items-center align-content-cente">
                <Link to="/">
                    <a class="navbar-brand" href="#" >Home</a>
                </Link>

                <Link to="Favoritos">
                    <a class="navbar-brand" href="#">Favoritos</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar