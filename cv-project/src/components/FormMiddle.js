import React, { Component } from 'react';

class MyForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          School:
          <input
            type="text"
            name="school"
            id='schoolInput'
            value={this.props.state.school}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="major"
            id='majorInput'
            value={this.props.state.major}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          Dates:
          <input
            type="text"
            name="dates"
            id='datesInput'
            value={this.props.state.dates}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
      </form>
    );
  }
}

export default MyForm;