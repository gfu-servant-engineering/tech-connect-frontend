import React from 'react'
import Layout from '../components/Layout.js'

const ProjectFormTemplate = ({ data }) => (
  <Layout>
    <section className="section">
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
      <div className="columns is-centered is-multiline">
        <div className="column is-10">
          <br/>
          <label class="label">Describe your project. What problem does this project attempt to solve?</label>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea 
                    class="textarea" 
                    placeholder="Is this a new problem? 
                    If not, have others attempted to solve it in the past? 
                    What is the cause of the problem? How are you aiming to solve it?">
                  </textarea>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div className="column is-5">
          <br/>
          <label class="label">How did this project come about?</label>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea 
                    class="textarea" 
                    placeholder="Give us a backstory. What inspired you to start this project? 
                    This information helps people determine whether or not they'd be a good fit for this project.">
                  </textarea>
                </div>
              </div>
            </div>          
          </div>
        </div>
        <div className="column is-5">
          <br/>
          <label class="label">
            What's the current status of your project?
          </label>              
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea 
                    class="textarea" 
                    placeholder="Tell us what you have done so far to complete this project. 
                    Don't worry, a large foundation isn't required to submit a project. 
                    Just let us know where you're at.">
                  </textarea>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div className="column is-5">
          <br/>
          <label class="label">
            What are your main goals and what kind of help do you need?
          </label>              
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea 
                    class="textarea" 
                    placeholder="Describe both long term and short term goals. 
                    Be specific about the kind of help you need.">
                  </textarea>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div className="column is-5">
          <br/>
          <label class="label">How does this project further the Kindgom of God?</label>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea 
                    class="textarea" 
                    placeholder="Furthering the Kingdom of God is Tech Connect's main mission. 
                    It is imperative that your project's main mission is the same in one way or another.">
                  </textarea>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary is-medium">
                  Submit Project for Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ProjectFormTemplate
