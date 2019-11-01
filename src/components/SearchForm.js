import React, { Component } from 'react'

 
class SearchForm extends Component {
  constructor() {
        
        super();
        this.state = {
          project_name: '',
          results: [],
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

  render() {
     const {
          project_name
        } = this.state;
    return (
      <div className="columns is-centered is-multiline">
          {/* NAME */}
          <div className="column is-1">
            <br/>
            <label class="label is-large">Project Name</label>
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
          </div>
    );

  }
  /*
  getSearchResults(project_name) {
    if (!project_name || !window.__LUNR__) return []
    const results = window.__LUNR__.index.search(project_name)
    return results.map(({ ref }) => window.__LUNR__.store[ref])
  }

  search = event => {
    const project_name = event.target.value
    const results = this.getSearchResults(project_name)
    this.setState({ results, project_name})
  }
  */
}
export default SearchForm
