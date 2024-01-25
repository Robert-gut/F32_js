import './Header.scss'

import { Link } from "react-router-dom"

const Header = () =>{
  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to='/'>
                  Contact List
                </Link>
                <Link className="navbar-brand" to='/new-contact'>
                  Add new
                </Link>
              </div>
              <div className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header