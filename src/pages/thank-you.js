import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { FaCheck} from 'react-icons/fa'

const ThankYouPage = () => (
  <Layout>
    <div className="container" style={{height:"450px"}}>
      <center> <br/>
        <span className="icon is-medium"><FaCheck size={"4em"} style={{color:"green"}}/></span>
          <h1 className="has-text-weight-bold is-size-1 has-text-primary">Thank you!</h1>
          <p>Now that you've created a project, see the rest of the site!</p> <br/><br/>
          <div className="columns is-centered">
              <div className="column is-3">
                  <Link to="/projects">
                    <button className="button is-primary-invert is-large">
                        Explore Projects!
                    </button>
                  </Link>
              </div>
              <div className="column is-3">
                  <Link to="/create-project">
                    <button className="button is-primary-invert is-large">
                        Create Another Project!
                    </button>
                  </Link>
               </div>
              <div className="column is-3">
                  <Link to="/about">
                    <button className="button is-primary-invert is-large">
                        Learn About Us!
                    </button>
                  </Link>
              </div>
          </div>
        </center>
    </div>
  </Layout>
)

export default ThankYouPage
