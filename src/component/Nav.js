import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item "><Link className="nav-link active" to="/todo">ToDo</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/cards">FoodCards</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Nav