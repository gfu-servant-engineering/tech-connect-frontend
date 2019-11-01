import React from 'react'
import Layout from '../components/Layout.js'
import SearchForm from '../components/SearchForm.js'

const ProjectSearchTemplate = ({ data }) => (
  <Layout>
    <section>
      <div class="hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title" className="has-text-weight-bold is-size-1" style={{color: '#1C2833'}}>
              Search for a Project
            </h1>
            <h2 class="subtitle">
              Enter project name
            </h2>
          </div>
        </div>
      </div>
    </section>
    <SearchForm />
  </Layout>
)

export default ProjectSearchTemplate