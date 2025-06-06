import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
      <div>
          <nav className={`navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top shadow-sm py-3`}>
              <div className="container-fluid">
                  <Link className="navbar-brand fw-bold text-uppercase" to="/">Makola</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="features">Features</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="pricing">Pricing</Link>
                          </li>
                          <FaCartShopping/>
                          <li className="nav-item">
                              <Link className="nav-link disabled">Disabled</Link>
                          </li>
                      </ul>
                  </div>
                </div>
          </nav>
    </div>
  )
}

export default NavBar