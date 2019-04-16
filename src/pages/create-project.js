import React from 'react'
import Layout from '../components/Layout.js'
import ProjectForm from '../components/ProjectForm.js'

const ProjectFormTemplate = ({ data }) => (
  <Layout>
    <section>
      <div class="hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title" className="has-text-weight-bold is-size-1" style={{color: '#1C2833'}}>
              Create a Project
            </h1>
            <h2 class="subtitle">
              Ensure your projects needs are fulfilled by answering a couple questions.
            </h2>
          </div>
        </div>
      </div>
    </section>
    <ProjectForm />
  </Layout>
)

export default ProjectFormTemplate
