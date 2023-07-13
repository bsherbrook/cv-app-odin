import React, { Component } from 'react';

class MyForm extends Component {
 
  render() {
    return (
      <div id='formHead'>
       <div id='formBox'>
        <form onSubmit={this.props.handleSubmit} id='form'>
          <label>
            Name:
            <input
              type="text"
              name="name"
              id='nameInput'
              value={this.props.state.name}
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <label>
            Role:
            <input
              type="text"
              name="currentRole"
              id='currentRoleInput'
              value={this.props.state.currentRole}
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              id='emailInput'
              value={this.props.state.email}
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              id='phoneInput'
              value={this.props.state.phone}
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          </form>
         </div>
      </ div>
    );
  }
}

export default MyForm;