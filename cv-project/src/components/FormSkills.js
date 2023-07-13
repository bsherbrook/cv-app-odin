import React, { Component } from 'react';

class MyForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Skills:
          <input
            type="text"
            name="skills"
            id='skillsInput'
            value={this.props.state.skills}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
      </form>
    );
  }
}

export default MyForm;