import React from 'react'
import { Link, withPrefix } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <img
              src={withPrefix('img/atom.svg')}
              alt="Logo"
              style={{ width:"240px","height":"70px" }}
            />
          </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns is-centered">
              <div className="column is-4">
                <section className="menu">
                    <Link to="/" className="navbar-item">
                      Create a Project
                    </Link>
                </section>
              </div>
              <div className="column is-4">
                <section>
                    <Link className="navbar-item" to="/projects" style={{textAlign:'centered'}}>
                      View All Projects
                    </Link>
                </section>
              </div>
              <div className="column is-4">
                <section>
                    <Link className="navbar-item" to="/about">
                      About Us
                    </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
