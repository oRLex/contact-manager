import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
  const {brand} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <a href="/" className="navbar-brand">{brand}</a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link"> <i className="fa fa-home" aria-hidden="true"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link"> <i className="fa fa-plus" aria-hidden="true"></i> Add</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link"> <i className="fa fa-info" aria-hidden="true"></i> About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.defaultProps ={
  brand: 'My App'
}

Header.propTypes = {
  brand: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'green',
//   fontSize: '20px'
// }

export default  Header;