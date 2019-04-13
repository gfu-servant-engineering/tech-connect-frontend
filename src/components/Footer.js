import React from 'react'
import { Link, withPrefix } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white has-text-black-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <img
              src={withPrefix('img/atom.svg')}
              alt="Logo"
              style={{ width:"240px","height":"70px" }}
            />
          </Link>
        </div>
        <div className="content has-text-centered has-text-black-ter">
          <div className="container has-text-black-ter" >
            <div className="columns">
              <div className="column is-one-third">
                <Link to="/create-project"><button className="button is-white">Create A Project</button></Link>
              </div>
              <div className="column is-one-third">
              <Link to="/projects"><button className="button is-white">View All Projects</button></Link>
              </div>
              <div className="column is-one-third">
              <Link to="/about"><button className="button is-white">About Us</button></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
