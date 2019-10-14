import React, { Component } from 'react';
//import FormData from 'form-data'
import axios from 'axios';
import { Link } from 'gatsby'

    class ProjectForm extends Component {
      constructor() {
        super();
        this.state = {
          project_name: '',
          project_image: '',
          project_description: '',
          project_goals: '',
          project_needs: '',
          project_origins: '',
          project_status: '',
          project_org_description: '',
          project_holy_goals: '',
          project_video: '',
          project_github: '',
          project_slack: '',
          project_trello: '',
          project_email: '',
        };
      }


      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {

        e.preventDefault();
        // get our form data out of state
        const {
          project_name,
          project_image,
          project_description,
          project_goals,
          project_needs,
          project_origins,
          project_status,
          project_org_description,
          project_holy_goals,
          project_video,
          project_github,
          project_slack,
          project_trello,
          project_email

                } = this.state;

        axios({
          method: 'post',
          url: 'http://techconnect-api.ddns.net:1337/projects',
          data: {
            project_name: project_name,
            project_image: project_image,
            project_description: project_description,
            project_goals: project_goals,
            project_needs: project_needs,
            project_origins: project_origins,
            project_status: project_status,
            project_org_description: project_org_description,
            project_holy_goals: project_holy_goals,
            project_video: project_video,
            project_github: project_github,
            project_slack: project_slack,
            project_trello: project_trello,
            project_email: project_email,
          }
        })
        .then((result) => {
            //access the results here....
            alert('Your project creation was successful!')
          });

       /*
        { Image upload which is currently broken
        let data = new FormData();
        data.append('images', this.state.project_image);

        axios.post('http://techconnect-api.ddns.net:1337/upload', data, {
          onUploadProgress: progressEvent => {
            console.log(progressEvent.loaded / progressEvent.total)
          }
        })
        .then((result) => {
            //access the results here....
            alert('Your project creation was successful!')
          });
          }*/

        this.setState({'project_name': ''});
        this.setState({'project_image': ''});
        this.setState({'project_description': ''});
        this.setState({'project_goals': ''});
        this.setState({'project_needs': ''});
        this.setState({'project_origins': ''});
        this.setState({'project_status': ''});
        this.setState({'project_org_description': ''});
        this.setState({'project_holy_goals': ''});
        this.setState({'project_github': ''});
        this.setState({'project_slack': ''});
        this.setState({'project_trello': ''});
        this.setState({'project_email': ''});
        this.setState({'project_video': ''});
      }



      render() {
        const {
          project_name,
          project_image,
          project_description,
          project_goals,
          project_needs,
          project_origins,
          project_status,
          project_org_description,
          project_holy_goals,
          project_video,
          project_github,
          project_slack,
          project_trello,
          project_email
                } = this.state;
        const isEnabled = project_name.length > 0
                && project_image.length > 0
                && project_description.length > 0
                && project_goals.length > 0
                && project_needs.length > 0
                && project_origins.length > 0
                && project_status.length > 0
                && project_org_description.length > 0
                && project_holy_goals.length > 0;

        return (
          <form onSubmit={this.onSubmit.bind(this)}>

          <div className="columns is-centered is-multiline">
          {/* NAME */}
          <div className="column is-3">
            <br/>
            <label className="label is-large">Project Name</label>
            <div className="field is-horizontal required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="text"
                      name="project_name"
                      value={project_name}
                      onChange={this.onChange}
                      placeholder="What is the name of your project?" />
                      <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIDEO LINK */}
          <div className="column is-3">
            <br/>
            <label class="label is-medium">A link to a video</label>
            <div class="field is-horizontal required">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input"
                      type="text"
                      name="project_video"
                      value={project_video}
                      onChange={this.onChange}
                      placeholder="youtube.com/your/video/link" />
                      <p className="help">If you have a video thats explains more about your project, link it here!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* IMAGE UPLOAD */}
          <div className="column is-2 is-centered">
            <br/>
            <label class="label is-medium">Upload an image...</label>
            <div className='buttons fadein'>
            <div className='button'>
              <label htmlFor='single'></label>
              <input type='file' id='single' name="project_image" value={project_image} onChange={this.onChange} />
            </div>
            <p className="help">This field is required</p>
          </div>
          </div>
          </div>

          <div className="columns is-centered is-multiline">
          {/* ACCTS HEADER */}
          <div className="column is-10 is-centered">
            <hr />
            <center>
            <h4 className="has-text-weight-bold is-size-5 has-text-primary">
              If you have any existing accounts, we can link those for you...
            </h4>
            </center>
          </div>
          </div>

          <div className="columns is-centered is-multiline">

            {/* EMAIL */}
            <div className="column is-2">
              <br/>
              <label class="label is-medium">Email</label>
              <div class="field is-horizontal is-required">
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input"
                        type="text"
                        name="project_email"
                        value={project_email}
                        onChange={this.onChange}
                        placeholder="youremail@example.com" />

                        <p className="help">This field is required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          {/* GITHUB */}
          <div className="column is-2">
            <br/>
            <label class="label is-medium">Github</label>
            <div class="field is-horizontal is-required">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input"
                      type="text"
                      name="project_github"
                      value={project_github}
                      onChange={this.onChange}
                      placeholder="github.com/repository" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLACK */}
          <div className="column is-2">
            <br/>
            <label class="label is-medium">Slack</label>
            <div class="field is-horizontal is-required">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input"
                      type="text"
                      name="project_slack"
                      value={project_slack}
                      onChange={this.onChange}
                      placeholder="workspace.slack.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRELLO */}
          <div className="column is-2">
            <br/>
            <label class="label is-medium">Trello</label>
            <div class="field is-horizontal is-required">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input"
                      type="text"
                      name="project_trello"
                      value={project_trello}
                      onChange={this.onChange}
                      placeholder="trello.com/your/trellolink" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* DESC */}
          <div className="column is-10">
            <hr />
            <br />
            <label class="label is-medium">Describe your project. What problem does this project attempt to solve?</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_description"
                      value={project_description}
                      onChange={this.onChange}
                      placeholder="Is this a new problem?
                      If not, have others attempted to solve it in the past?
                      What is the cause of the problem? How are you aiming to solve it?">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GOALS */}
          <div className="column is-5">
            <br/>
            <label class="label is-medium">What are your main goals?</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_goals"
                      value={project_goals}
                      onChange={this.onChange}
                      placeholder="Describe both long term and short term goals.
                      Be specific about the kind of help you need.">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEEDS */}
          <div className="column is-5">
            <br/>
            <label class="label is-medium">What do you need?</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_needs"
                      value={project_needs}
                      onChange={this.onChange}
                      placeholder="Tell us about the type of person you think would be most helpful to you">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ORIGIN */}
          <div className="column is-5">
            <br/>
            <label className="label is-medium">How did this project come about?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-medium"
                      type="text"
                      name="project_origins"
                      value={project_origins}
                      onChange={this.onChange}
                      placeholder="Give us a backstory. What inspired you to start this project?
                      This information helps people determine whether or not they'd be a good fit for this project.">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATUS */}
          <div className="column is-5">
            <br/>
            <label class="label is-medium">
              What's the current status of your project?
            </label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_status"
                      value={project_status}
                      onChange={this.onChange}
                      placeholder="Tell us what you have done so far to complete this project.
                      Don't worry, a large foundation isn't required to submit a project.
                      Just let us know where you're at.">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ORGANIZATION */}
          <div className="column is-5">
            <br/>
            <label class="label is-medium">Tell us about yourself!</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_org_description"
                      value={project_org_description}
                      onChange={this.onChange}
                      placeholder="What organization do you work for if any?">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HOLY GOALS */}
          <div className="column is-5">
            <br/>
            <label class="label is-medium">How does this project further the Kindgom of God?</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_holy_goals"
                      value={project_holy_goals}
                      onChange={this.onChange}
                      placeholder="Furthering the Kingdom of God is Tech Connect's main mission.
                      It is imperative that your project's main mission is the same in one way or another.">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div class="field is-horizontal column is-10">
            <div class="field-body">
              <div class="field">
                <div class="control">

                {/* This button is what submits the form to the Strapi backend.
                    This is commented out to allow people to try out our site.
                    When this button is pressed, everything posts to the backend
                    other than the image, so that will need to be fixed.

                    <button type="submit" disabled={!isEnabled} class="button is-primary is-medium">
                      Submit Project for Review
                    </button>
                  */}

                  {/* This button is a placeholder for the expo*/}
                  <Link to="/thank-you">
                      <button disabled={!isEnabled} class="button is-primary is-medium">
                        Submit Project for Review
                      </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>


        );
      }
    }
    export default ProjectForm;
