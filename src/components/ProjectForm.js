import React, { Component } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby'
import { getAuthJWT } from '../utils/auth.js';

    class ProjectForm extends Component {
      constructor() {
        super();
        this.state = {
          sponsor_name: '',
          sponsor_website: '',
          sponsor_image: '',
          project_name: '',
          project_image: '',
          project_description: '',
          desc_state: RichTextEditor.createEmptyValue(),
          short_description: '',
          goal_state: RichTextEditor.createEmptyValue(),
          project_goals: '',
          needs_state: RichTextEditor.createEmptyValue(),
          project_needs: '',
          origins_state: RichTextEditor.createEmptyValue(),
          project_origins: '',
          status_state: RichTextEditor.createEmptyValue(),
          project_status: '',
          org_state: RichTextEditor.createEmptyValue(),
          project_org_description: '',
          holy_goals_state: RichTextEditor.createEmptyValue(),
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

      descOnChange = (value) => {
      	const data = value.toString('markdown');
	  	this.setState({project_description: data});
	  	this.setState({desc_state: value});
	  	console.log(this.state.project_description)
 	  }

 	  goalsOnChange = (value) => {
	  	const data = value.toString('markdown');
	  	this.setState({project_goals: data});
	  	this.setState({goal_state: value});
 	  }

 	  needOnChange = (value) => {
	  	const data = value.toString('markdown');
	  	this.setState({project_needs: data});
	  	this.setState({needs_state: value});
 	  }

 	  originOnChange = (value) => {
	  	const data = value.toString('markdown');
	  	this.setState({project_origins: data});
	  	this.setState({origins_state: value});
 	  }

 	  statusOnChange = (value) => {
	    const data = value.toString('markdown');
	  	this.setState({project_status: data});
	  	this.setState({status_state: value});
 	  }

 	  orgOnChange = (value) => {
	  	const data = value.toString('markdown');
	  	this.setState({project_org_description: data});
	  	this.setState({org_state: value});
 	  }

 	  holyGoalsOnChange = (value) => {
	    const data = value.toString('markdown');
	  	this.setState({project_holy_goals: data});
	  	this.setState({holy_goals_state: value});
 	  }

      onSubmit = (e) => {
        e.preventDefault();

        // if allowed to submit projects
        if (process.env.GATSBY_SUBMIT_PROJECT === 'true') {
          // get our form data out of state
          const {
            sponsor_name,
            sponsor_website,
            sponsor_image,
            project_name,
            project_description,
            short_description,
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

          
          // get jwt from auth0
          const token = getAuthJWT();

          // create project
          axios({
            method: 'post',
            url: `${process.env.GATSBY_STRAPI_HOST}/projects`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              sponsor_name: sponsor_name,
              sponsor_website: sponsor_website,
              project_name: project_name,
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
          }).then((result) => {

            // current project id number
            const refId = result.data.id;


            // if given sponsor image put that upload here
            if (!!sponsor_image) {

              // sponsor image upload and link to current project
              let data = new FormData();
              data.append('refId', refId);
              data.append('field', 'sponsor_image');
              data.append('ref', 'project');
              data.append('files', document.getElementById("sponsor_image").files[0]);

              axios({
                method: 'post',
                url: `${process.env.GATSBY_STRAPI_HOST}/upload`,
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data'
                },
                data: data,
                onUploadProgress: progressEvent => {
                  console.log(progressEvent.loaded / progressEvent.total)
                }
              })
            }

            // project image upload and link to current project
            let data2 = new FormData();
            data2.append('refId', refId);
            data2.append('field', 'project_image');
            data2.append('ref', 'project');
            data2.append('files', document.getElementById("project_image").files[0]);

            axios({
              method: 'post',
              url: `${process.env.GATSBY_STRAPI_HOST}/upload`,
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
              },
              data: data2,
              onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
              }
            }).then((result) => {
              //access the results here....
              navigate('/thank-you');
            });


            this.setState({'sponsor_name': ''});
            this.setState({'sponsor_website': ''});
            this.setState({'sponsor_image': ''});
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
          }).catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
          });
        }
        // if not allowed to submit, navigate to thank you page
        else {
          navigate('/thank-you');
        }
      }


      render() {
        const {
          sponsor_name,
          sponsor_website,
          sponsor_image,
          project_name,
          project_image,
          project_description,
          desc_state,
          short_description,
          project_goals,
          goal_state,
          project_needs,
          needs_state,
          project_origins,
          origins_state,
          project_status,
          status_state,
          project_org_description,
          org_state,
          project_holy_goals,
          holy_goals_state,
          project_video,
          project_github,
          project_slack,
          project_trello,
          project_email
                } = this.state;
        const isEnabled = project_name.length > 0
                && project_image.length > 0
                && sponsor_name.length > 0
                && sponsor_website.length > 0
                && project_description.length > 0
                && short_description.length > 0
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
            <label htmlFor="project_name" className="label is-medium">Project Name</label>
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
            <label htmlFor="project_video" className="label is-medium">A link to a video</label>
            <div className="field is-horizontal required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
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
            <label htmlFor="project_image" className="label is-medium">Upload an image...</label>
            <div className='buttons fadein'>
            <div className='button'>
              <input type='file' id='project_image' name="project_image" value={project_image} onChange={this.onChange} />
            </div>
            <p className="help">This field is required</p>
          </div>
          </div>
          </div>

      <div className="columns is-centered is-multiline">
          {/* DIVIDER BEFORE PROJECT */}
          <div className="column is-10 is-centered">
            <hr />
            <center>
            <h4 className="has-text-weight-bold is-size-5 has-text-primary">
            </h4>
            </center>
          </div>
          </div>
      
      <div className="columns is-centered is-multiline">
      {/* SPONSOR NAME */}
          <div className="column is-3">
            <br/>
            <label htmlFor="sponsor_name" className="label is-medium">Project Sponsor</label>
            <div className="field is-horizontal required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="text"
                      name="sponsor_name"
                      value={sponsor_name}
                      onChange={this.onChange}
                      placeholder="Who is the sponsor of your project?" />
                      <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* SPONSOR WEBSITE */}
          <div className="column is-3">
            <br/>
            <label htmlFor="sponsor_website" className="label is-medium">Link to Sponsor's Website</label>
            <div className="field is-horizontal is-required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="text"
                      name="sponsor_website"
                      value={sponsor_website}
                      onChange={this.onChange}
                      placeholder="sponsor-website.com" />
            <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* SPONSOR IMAGE */}
          <div className="column is-2 is-centered">
            <br/>
            <label htmlFor="sponsor_image" className="label is-medium">Sponsor image...</label>
            <div className='buttons fadein'>
            <div className='button'>
              <input type='file' id='sponsor_image' name="sponsor_image" value={sponsor_image} onChange={this.onChange} />
            </div>
            <p className="help">Optional Sponsor logo</p>
          </div>
          </div>
          </div>

          <div className="columns is-centered is-multiline">
          {/* ACCTS HEADER */}
          <div className="column is-10 is-centered">
            <hr />
            <center>
            <h4 className="has-text-weight-bold is-size-5 has-text-primary">
              If you have any existing accounts for your project, we can link those for you...
            </h4>
            </center>
          </div>
          </div>

          <div className="columns is-centered is-multiline">

            {/* EMAIL */}
            <div className="column is-2">
              <br/>
              <label htmlFor="project_email" className="label is-medium">Email</label>
              <div className="field is-horizontal is-required">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input className="input"
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
            <label htmlFor="project_github" className="label is-medium">Github</label>
            <div className="field is-horizontal is-required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
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
            <label htmlFor="project_slack" className="label is-medium">Slack</label>
            <div className="field is-horizontal is-required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
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
            <label htmlFor="project_trello" className="label is-medium">Trello</label>
            <div className="field is-horizontal is-required">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input"
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
          <div className="column is-7">
            <hr />
            <br />
            <label htmlFor="desc_state" className="label is-medium">Describe your project. What problem does this project attempt to solve?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                  <RichTextEditor
            		value={desc_state}
                    onChange={this.descOnChange}
          		  />
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* Short_DESC */}
          <div className="column is-6">
            <hr />
            <br />
            <label htmlFor="short_description" className="label is-medium">Give a brief summary of your project?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-medium"
                      type="text"
                      name="short_description"
                      value={short_description}
                      onChange={this.onChange}
                      placeholder="Give a short description of your project to be displayed">
                    </textarea>
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GOALS */}
          <div className="column is-7">
            <br/>
            <label htmlFor="goal_state" className="label is-medium">What are your main goals?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <RichTextEditor
            		value={goal_state}
                    onChange={this.goalsOnChange}
          		  />
          		     <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEEDS */}
          <div className="column is-7">
            <br/>
            <label htmlFor="needs_state" className="label is-medium">What do you need?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <RichTextEditor
            		value={needs_state}
                    onChange={this.needOnChange}
          		  />
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ORIGIN */}
          <div className="column is-7">
            <br/>
            <label htmlFor="origins_state" className="label is-medium">How did this project come about?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <RichTextEditor
            		value={origins_state}
                    onChange={this.originOnChange}
          		  />
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATUS */}
          <div className="column is-7">
            <br/>
            <label htmlFor="status_state" className="label is-medium">
              What's the current status of your project?
            </label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <RichTextEditor
            		value={status_state}
                    onChange={this.statusOnChange}
          		  />
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ORGANIZATION */}
          <div className="column is-7">
            <br/>
            <label htmlFor="org_state" className="label is-medium">Tell us about yourself!</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <RichTextEditor
            		value={org_state}
                    onChange={this.orgOnChange}
          		  />
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HOLY GOALS */}
          <div className="column is-7">
            <br/>
            <label htmlFor="holy_goals_state" className="label is-medium">How does this project further the Kindgom of God?</label>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <RichTextEditor
            		value={holy_goals_state}
                    onChange={this.holyGoalsOnChange}
          		  />
                    <p className="help">This field is required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="field is-horizontal column is-10">
            <div className="field-body">
              <div className="field">
                <div className="control">

                  {/* This button is what submits the form to the Strapi backend.
                    When this button is pressed, everything posts to the backend
                    Uses an environment variable to determine if project can be submitted.
                  */}
                    <button type="submit" disabled={!isEnabled} className="button is-primary is-medium">
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
