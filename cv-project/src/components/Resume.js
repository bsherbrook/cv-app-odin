import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div id='cvBox'>
        <div id='cvHead'>
          <div id="name" onClick={this.props.handleEdit}>{this.props.state.name}</div>
          <div id="currentRole" onClick={this.props.handleEdit}>{this.props.state.currentRole}</div>
          <div id="email" onClick={this.props.handleEdit}>{this.props.state.email}</div>
          <div onClick={this.props.handleEdit} id="phone">{this.props.state.phone}</div>
          <div onClick={this.props.handleEdit} id="school">{this.props.state.school}</div>
          <div onClick={this.props.handleEdit} id="major">{this.props.state.major}</div>
          <div onClick={this.props.handleEdit} id="dates">{this.props.state.dates}</div>
          <div onClick={this.props.handleEdit} id="skills">{this.props.state.skills}</div>
          <div onClick={this.props.handleEdit} id="company">{this.props.state.company}</div>
          <div onClick={this.props.handleEdit} id="city">{this.props.state.city}</div>
          <div onClick={this.props.handleEdit} id="from">{this.props.state.from}</div>
          <div onClick={this.props.handleEdit} id="to">{this.props.state.to}</div>
          <div onClick={this.props.handleEdit} id="formerRole">{this.props.state.formerRole}</div>
          <div onClick={this.props.handleEdit} id="description">{this.props.state.description}</div>
        </div>
      </ div>
    );
  }
}

export default Resume;