import React, { Component } from 'react';

class MyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            id='companyInput'
            name="company"
            value={this.props.state.company}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            id='cityInput'
            value={this.props.state.city}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          From:
          <input
            type="text"
            name="from"
            id='fromInput'
            value={this.props.state.from}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          To:
          <input
            type="text"
            name="to"
            id='toInput'
            value={this.props.state.to}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            type="text"
            name="formerRole"
            id='formerRoleInput'
            value={this.props.state.formerRole}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            rows='4'
            columns='30'
            type="text"
            id='descriptionInput'
            name="description"
            value={this.props.state.description}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" onClick={this.props.handleClear}/>
      </form>
    );
  }
}

export default MyForm;