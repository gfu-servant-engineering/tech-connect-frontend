import React from 'react'
import Layout from '../components/Layout'
import ProjectForm from '../components/ProjectForm'
import Hero from '../components/RedirectHero'
import { login, isAuthenticated, getProfile } from "../utils/auth"


const ProjectFormTemplate = ({ data }) => {
  if (!isAuthenticated()) {
    login()
    return (
       <Layout>
         <Hero title="Redirecting to login..." />
       </Layout>
    )
  }

  return (
    <Layout>
      <section>
        <div className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title" className="has-text-weight-bold is-size-1" style={{color: '#1C2833'}}>
                Create a Project
              </h1>
              <h2 className="subtitle">
                Ensure your projects needs are fulfilled by answering a couple questions.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <ProjectForm />
    </Layout>
  )
}

export default ProjectFormTemplate
