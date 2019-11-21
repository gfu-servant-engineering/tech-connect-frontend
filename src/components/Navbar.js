import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { login, logout, isAuthenticated } from "../utils/auth"


function loginButton() {
  return (
    <a className="navbar-item"
      href="#logout"
      onClick={e => {
        login()
        e.preventDefault()
      }}
    >
      Login
    </a>
  )
}

function logoutButton() {
  return (
    <a className="navbar-item"
      href="#logout"
      onClick={e => {
        logout()
        e.preventDefault()
      }}
    >
      Logout
    </a>
  )
}


const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  

 render() {
   let accountButton
   if(!isAuthenticated()) accountButton = loginButton()
   else accountButton = logoutButton()


   return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={withPrefix('img/atom.svg')} alt="atom" style={{ width: '35px' }} />
          </Link>
          {/* Hamburger menu */}
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/create-project">
              Create a Project
            </Link>
            <Link className="navbar-item" to="/projects">
              View All Projects
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            {accountButton}
          </div>
        </div>
      </div>
    </nav>
  )}
}

export default Navbar
