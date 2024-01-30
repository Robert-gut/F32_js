import './Header.scss'

import { Link } from "react-router-dom"

const Header = () =>{
  return(
    <nav className="container rounded">
      <div className="row">
        <div className="col-4">
          <Link className="navbar-brand fs-3" to='/'>
            Contact List
          </Link>
          <Link className="navbar-brand fs-5 ms-4" to='/new-contact'>
            Add new
          </Link>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <input type="text" className="form-control fs-6" placeholder="Search"/>
        </div>
      </div>
    </nav>
  )
}

export default Header