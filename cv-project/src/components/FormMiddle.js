import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      major:'',
      dates: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('School:', this.state.school);
    console.log('Major:', this.state.major);
    console.log('Dates:', this.state.dates);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          School:
          <input
            type="text"
            name="school"
            value={this.state.school}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="major"
            value={this.state.major}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Dates:
          <input
            type="text"
            name="dates"
            value={this.state.dates}
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