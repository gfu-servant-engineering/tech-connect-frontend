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
                <a href="/create-project"><button class="button is-white">Create A Project</button></a>
              </div>
              <div className="column is-one-third">
              <a href="/projects"><button class="button is-white">View All Projects</button></a>
              </div>
              <div className="column is-one-third">
                <a href="/about"><button class="button is-white">About Us</button></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
