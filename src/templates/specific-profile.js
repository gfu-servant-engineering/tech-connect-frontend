import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import Tabs from '../components/Tabs/Tabs.js'
import LinesEllipsis from 'react-lines-ellipsis'

const ProfileTemplate = ({ data }) => (
    <Layout>
      <section className="section">
        <div className="columns is-centered is-multiline">
            <div className="column is-full-mobile is-two-thirds-tablet is-half-desktop" style={{maxWidth:'400px'}}>
                <PreviewCompatibleImage imageInfo={data.strapiProfile.profile_image}/>
            </div>
          <div className="column is-full-mobile is-two-thirds-tablet is-half-desktop">
              <div style={{display:'inline', padding: '5%'}}>
                <h1 className="has-text-weight-bold is-size-2">{data.strapiProfile.profile_name}</h1>
                <div className="is-italic">
                {data.strapiProfile.profile_location}
                </div>
                <hr className="horizontal-rule" />
                <div className="column is-12">
                    {data.strapiProfile.profile_bio}
                </div>
              </div>
            </div>
        </div> <br/>

        <div>
        <Tabs>
          <div label="Skills" icon="FaCheck">
            <center>{data.strapiProfile.skills.map(skill => (
                <div>
                <br/>
                <div>
                  {skill.skill_name}
                  <br />
                </div>
                </div>
            ))}</center>
            <br /><br />
          </div>


          <div label="Experience" icon="FaUser">

              <div className="columns is-multiline is-centered">
                {data.strapiProfile.experiences.map(experience => (
                    <div className="column is-12">
                        <div className="has-text-weight-bold is-size-5">
                            {experience.experience_title} <br />
                        </div>
                        <div>
                            {experience.experience_description}
                        </div>
                    </div>
                ))}
              </div> <br /><br />
          </div>

          <div label="Projects" icon="FaPagelines">
              <div className="columns is-8 is-multiline is-centered">
                {data.strapiProfile.projects.map(project => (
                    <div className="column is-8- mobile is-10-tablet is-4-desktop is-4-widescreen">
                    <Link to={`/Project_${project.id}`}><PreviewCompatibleImage imageInfo={project.project_image} /></Link>
                    <h3 className="has-text-weight-bold is-size-5">
                      <Link className="has-text-primary" style={{display:'inline-block'}} to={`/Project_${project.id}`}>{project.project_name}</Link>
                    </h3>
                    <Link className="has-text-primary" to={`/Project_${project.id}`}><LinesEllipsis
                      text={project.project_description}
                      maxLine='2'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                      /></Link>
                    </div>
                ))}
              </div>
          </div>
        </Tabs>
      </div>
      </section>
    </Layout>
)

export default ProfileTemplate

export const pageQuery = graphql`
  query ProfileTemplate ($id: String!) {
    strapiProfile(id: {eq: $id}) {
      profile_name
      profile_bio
      profile_location
      profile_image {
         childImageSharp {
            fluid(maxHeight:400, maxWidth:400, quality:90, toFormat:JPG) {
               ...GatsbyImageSharpFluid
            }
          }
        }
      skills {
        skill_name
      }
      experiences {
        experience_title
        experience_description
      }
      projects {
        id
        project_name
        project_image {
           childImageSharp {
              fluid(maxHeight:200, maxWidth:400, quality:90, toFormat:JPG) {
                 ...GatsbyImageSharpFluid
              }
            }
          }
          project_description
        }
      }
    }
  `
