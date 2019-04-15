import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import { v4 } from 'uuid'

const ProfileTemplate = ({ data }) => (
    <Layout>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-5">
          </div>
          <div className="column is-5">
              <div style={{display:'inline', padding: '5%'}}>
                <h1 className="has-text-weight-bold is-size-2">{data.strapiProfile.profile_name}</h1>
                <hr style={{
                    color:'#1C2833',
                    backgroundColor: '#1C2833',
                    height: 2
                  }}/>
                <br/>
                <br/>
				<br/>
                <br/>
              </div>
            </div>
        </div>
        <div className="columns is-centered is-multiline">
          <div className="column is-10">
            <br/>
            <h4 className="has-text-weight-bold is-size-3">My Experiences</h4>
              <div>{data.strapiProfile.experiences.map(experience => (
				  <div>
				  <br/>
					<div className="has-text-weight-bold is-size-5">
					  {experience.experience_title}
					  <br />
					</div>
					<div>
					  {experience.experience_description}
					</div>
				  </div>
				))}</div>
          </div>
          <div className="column is-10">
              <br/>
              <h4 className="has-text-weight-bold is-size-3">My Skills</h4>
              <p>{data.strapiProfile.skills.map(skill => (
				  <div>
				  <br/>
					<div>
					  {skill.skill_name}
					  <br />
					</div>
				  </div>
				))}</p>
          </div>
          <div className="column is-10">
              <br/>
              <h4 className="has-text-weight-bold is-size-3">Projects I have worked on</h4>
              <p>{data.strapiProfile.projects.map(project => (
				  <div>
				  <br/>
					<div>
					  <Link to={`/Project_${project.id}`}>{project.project_name}</Link>
					  <br />
					</div>
				  </div>
				))}</p>
          </div>
        </div>
      </section>
    </Layout>
)

export default ProfileTemplate

export const pageQuery = graphql`
  query ProfileTemplate ($id: String!) {
    strapiProfile(id: {eq: $id}) {
      profile_name
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
	  }
     }
  }
  `
