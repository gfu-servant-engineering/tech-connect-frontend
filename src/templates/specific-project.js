import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import Disqus from 'disqus-react'
import { FaGithub, FaTrello, FaRegEnvelope, FaSlack} from 'react-icons/fa'
import ResponsiveEmbed from 'react-responsive-embed'
import ReactMarkdown from "react-markdown"

const ProjectTemplate = ({ data }) => (
    <Layout>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-5">
          {data.strapiProject.project_video !== "" &&
               <ResponsiveEmbed src={data.strapiProject.project_video}
               style={{top:0, left:0, width:"100%", height:"100%"}}
           />}
          {data.strapiProject.project_video === "" &&
               <PreviewCompatibleImage imageInfo={data.strapiProject.project_image} />
          }
          </div>
          <div className="column is-5">
              <div style={{display:'inline', padding: '5%'}}>
                <h1 className="has-text-weight-bold is-size-2 has-text-primary">{data.strapiProject.project_name}</h1>
                <hr className="horizontal-rule" />
                <p className="has-text-primary" style={{paddingBottom: '20px'}}>Sponsored by <a className="is-link" href={data.strapiProject.sponsor_website}>{data.strapiProject.sponsor_name}</a></p>
                <br/>
                <br/>
                <br/>
              <div className="columns is-flex" >
                  {data.strapiProject.project_github !== "" &&
                   <div className="column is-2 is-flex">
                    <a href={data.strapiProject.project_github}><FaGithub size={"3em"}/></a></div>}
                  {data.strapiProject.project_trello !== "" &&
                   <div className="column is-2 is-flex">
                   <a href={data.strapiProject.project_trello}><FaTrello size={"3em"}/></a></div>}
                  {data.strapiProject.project_slack !== "" &&
                   <div className="column is-2 is-flex">
                   <a href={data.strapiProject.project_slack}><FaSlack size={"3em"}/></a></div>}
                  {data.strapiProject.project_email !== "" &&
                   <div className="column is-2 is-flex">
                   <a href={"mailto:" + data.strapiProject.project_email}><FaRegEnvelope size={"3em"}/></a></div>}
                   <div className="column is-one-fifth is-flex"> </div>
                   <div className="column is-5 is-flex"> </div>
              </div>
              </div>
         </div>
        </div>
        <div className="columns is-centered is-multiline">
          <div className="column is-10">
            <br/>
            <h4 className="has-text-weight-bold is-size-4 has-text-primary">Describe your project ...</h4>
              <ReactMarkdown source={data.strapiProject.project_description} />
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4 has-text-primary">What are your goals?</h4>
              <ReactMarkdown source={data.strapiProject.project_goals} />
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4 has-text-primary">What do you need?</h4>
              <ReactMarkdown source={data.strapiProject.project_needs} />
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4 has-text-primary">What inspired this project?</h4>
              <ReactMarkdown source={data.strapiProject.project_origins} />
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4 has-text-primary">This project is currently...</h4>
              <ReactMarkdown source={data.strapiProject.project_status} />
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4 has-text-primary">Tell us about yourself!</h4>
              <ReactMarkdown source={data.strapiProject.project_org_description} />
          </div>
          <div className="column is-5">
              <br/>
              <h4 className="has-text-weight-bold is-size-4 has-text-primary">This project exemplifies the Kingdom of God by ...</h4>
              <ReactMarkdown source={data.strapiProject.project_holy_goals} />
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
      sponsor_name
      sponsor_website
      project_image {
        childImageSharp {
          fluid(maxWidth:700, maxHeight:470, quality:90, toFormat:JPG) {
             ...GatsbyImageSharpFluid
          }
        }
      }
      project_description
      project_goals
      project_needs
      project_origins
      project_status
      project_org_description
      project_holy_goals
      project_timeline
      project_blurb
      project_video
      project_github
      project_trello
      project_slack
      project_email
   }
 }
 `
