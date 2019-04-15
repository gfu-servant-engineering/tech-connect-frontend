import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import FormData from 'form-data'
import axios from 'axios';
{/*import ImageUpload from '../components/ImageUpload.js'*/}

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
          project_timeline: '',
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
          project_timeline,
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
            project_timeline: project_timeline,
            project_video: project_video,
            project_github: project_github,
            project_slack: project_slack,
            project_trello: project_trello,
            project_email: project_email,
          }
        });


        let data = new FormData();
        data.append('images', this.state.project_image);

        axios.post('http://techconnect-api.ddns.net:1337/upload', data, {
          onUploadProgress: progressEvent => {
            console.log(progressEvent.loaded / progressEvent.total)
          }
        })

        this.setState({'project_name': ''});
        this.setState({'project_image': ''});
        this.setState({'project_description': ''});
        this.setState({'project_goals': ''});
        this.setState({'project_needs': ''});
        this.setState({'project_origins': ''});
        this.setState({'project_status': ''});
        this.setState({'project_org_description': ''});
        this.setState({'project_holy_goals': ''});

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
          project_timeline,
          project_video,
          project_github,
          project_slack,
          project_trello,
          project_email
                } = this.state;
        return (

          <form onSubmit={this.onSubmit.bind(this)}>
          <div className="columns is-centered is-multiline">

          {/* NAME */}
          <div className="column is-3">
            <br/>
            <label class="label is-medium">Project Name</label>
            <div class="field is-horizontal is-required">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input"
                      class="input"
                      type="text"
                      name="project_name"
                      value={project_name}
                      onChange={this.onChange}
                      placeholder="What is the name of your project?" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* IMAGE UPLOAD */}
          <div className="column is-2 is-centered">
            <br/>
            <label class="label is-medium">Upload an image...</label>
            <div class="field is-horizontal is-centered">
              <div class="file is-centered">
                  <input class="file-input" type="file" name="image" value={project_image} onChange={this.onChange} />
                  <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">Choose a file…</span>
                  </span>
              </div>
            </div>
          </div>

          {/* VIDEO UPLOAD */}
          <div className="column is-2">
            <br/>
            <label class="label is-medium">Upload a video...</label>
            <div class="field is-horizontal">
              <div class="file is-centered">
                  <input class="file-input" type="file" name="image" value={project_video} onChange={this.onChange} />
                  <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">Choose a file…</span>
                  </span>
              </div>
            </div>
          </div>


          <div className="column is-10 is-centered">
            <hr />
            <center>
            <h4 className="has-text-weight-bold is-size-5 has-text-primary">
              If you have any existing accounts, we can link those for you...
            </h4>
            </center>
          </div>
          <div className="column is-1 is-centered">
            {/*this makes me very angry*/}
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
                      class="input"
                      type="text"
                      name="project_github"
                      value={project_github}
                      onChange={this.onChange}
                      placeholder="github/repository" />
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
                      class="input"
                      type="text"
                      name="project_slack"
                      value={project_slack}
                      onChange={this.onChange}
                      placeholder="slack@slack.com" />
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
                      class="input"
                      type="text"
                      name="project_trello"
                      value={project_trello}
                      onChange={this.onChange}
                      placeholder="slack@slack.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="column is-2">
            <br/>
            <label class="label is-medium">Email</label>
            <div class="field is-horizontal is-required">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input"
                      class="input"
                      type="text"
                      name="project_email"
                      value={project_email}
                      onChange={this.onChange}
                      placeholder="slack@slack.com" />
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
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ORIGIN */}
          <div className="column is-5">
            <br/>
            <label class="label is-medium">How did this project come about?</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      type="text"
                      name="project_origins"
                      value={project_origins}
                      onChange={this.onChange}
                      placeholder="Give us a backstory. What inspired you to start this project?
                      This information helps people determine whether or not they'd be a good fit for this project.">
                    </textarea>
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
                  <button type="submit" class="button is-primary is-medium">
                    Submit Project for Review
                  </button>
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
