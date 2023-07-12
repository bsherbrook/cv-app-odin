import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access form values using this.state.name and this.state.email
    console.log('Skills:', this.state.skills);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Skills:
          <input
            type="text"
            name="skills"
            value={this.state.skills}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;