import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      city:'',
      from: '',
      to: '',
      role:'',
      description:''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Company:', this.state.company);
    console.log('City:', this.state.city);
    console.log('From:', this.state.from);
    console.log('To:', this.state.to);
    console.log('Role:', this.state.role);
    console.log('Description:', this.state.description);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          From:
          <input
            type="text"
            name="from"
            value={this.state.from}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          To:
          <input
            type="text"
            name="to"
            value={this.state.to}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            rows='4'
            columns='30'
            type="text"
            name="description"
            value={this.state.description}
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