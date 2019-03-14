import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <Img fixed={this.props.data.file.childImageSharp.fixed} alt="atom"/>
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
        <Link className="navbar-item" to="/">
          Create a Project
        </Link>
        <Link className="navbar-item" to="/">
          View All Projects
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end has-text-centered">
        <Link className="navbar-item" to="/">
          Create Account
        </Link>
        <Link className="navbar-item" to="/">
          Sign In
        </Link>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar

export const navbarQuery = graphql`
  query {
    file(relativePath: { eq: "../../static/img/atom.svg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
