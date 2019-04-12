import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import Disqus from 'disqus-react'
import { FaGithub, FaTrello, FaRegEnvelope, FaSlack} from 'react-icons/fa'


const ProjectTemplate = ({ data }) => (
    <Layout>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-5">
            <PreviewCompatibleImage imageInfo={data.strapiProject.project_image} />
          </div>
          <div className="column is-5">
              <div style={{display:'inline', padding: '5%'}}>
                <h1 className="has-text-weight-bold is-size-2">{data.strapiProject.project_name}</h1>
                <hr style={{
                    color:'#1C2833',
                    backgroundColor: '#1C2833',
                    height: 2
                  }}/>
                <Link style={{color: '#1C2833', paddingBottom: '20px'}} to={`/${data.strapiProject.profiles.profile_name}`}>Sponsored by {data.strapiProject.profiles.profile_name}</Link>
                <br/>
                <br/>
                <Link className="button has-text-centered" href='/' type="default" block>
                  Contact Sponsor
                </Link>
              </div>
            </div>
        </div>
        <div className="columns is-centered is-multiline">
          <div className="column is-10">
            <br/>
            <h4 className="has-text-weight-bold is-size-4">Describe your project ...</h4>
              {data.strapiProject.project_description}
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4">What are your goals?</h4>
              <p>{data.strapiProject.project_goals}</p>
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4">This project exemplifies the Kingdom of God by ...</h4>
              <p>{data.strapiProject.project_holy_goals}</p>
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4">What do you need?</h4>
              <p>{data.strapiProject.project_goals}</p>
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4">Our timeline looks like ...</h4>
              <p>{data.strapiProject.project_holy_goals}</p>
        </div>
        <div className=" is-centered column is-10">
        
         <p>
        {data.strapiProject.project_github !== "" &&
         <a href={data.strapiProject.project_github}><FaGithub size={"6em"}/></a>}
        {data.strapiProject.project_trello !== "" &&
         <a href={data.strapiProject.project_trello}><FaTrello size={"6em"}/></a>}
        {data.strapiProject.project_slack !== "" &&
         <a href={data.strapiProject.project_slack}><FaSlack size={"6em"}/></a>}
        {data.strapiProject.project_email !== "" &&
         <a href={"mailto:" + data.strapiProject.project_email}><FaRegEnvelope size={"6em"}/></a>}</p>
        </div>
          <div className="column is-10">
            <br />
            <Disqus.DiscussionEmbed shortname="tech-connect" />  
          </div>
        </div>
      </section>
    </Layout>
)

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectTemplate ($id: String!) {
    strapiProject(id: {eq: $id}) {
      project_name
      project_description
      profiles {
        profile_name
      }
      project_goals
      project_holy_goals
      project_timeline
      project_github
      project_trello
      project_slack
      project_email
      project_image {
         childImageSharp {
            fluid(maxWidth:700, maxHeight:470, quality:90, toFormat:JPG) {
	             ...GatsbyImageSharpFluid
            }
          }
        }
     }
  }
  `
