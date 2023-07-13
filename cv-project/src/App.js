import "./styles/formHead.css";
import React, { Component } from "react";
import FormHead from "./components/FormHead";
import FormMiddle from "./components/FormMiddle";
import FormEnd from "./components/FormEnd";
import FormSkills from "./components/FormSkills";
import Resume from "./components/Resume";


class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEdit= this.handleEdit.bind(this);
    
    this.state = {
      name: "",
      currentRole: "",
      email: "",
      phone: "",
      school: "",
      major: "",
      dates: "",
      skills: "",
      company: "",
      city: "",
      from: "",
      to: "",
      formerRole: "",
      description: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleClear = (event) => {
    document.getElementById('nameInput').value= '';
    document.getElementById('currentRoleInput').value= '';
    document.getElementById('emailInput').value= '';
    document.getElementById('phoneInput').value= '';
    document.getElementById('schoolInput').value= '';
    document.getElementById('majorInput').value= '';
    document.getElementById('datesInput').value= '';
    document.getElementById('companyInput').value= '';
    document.getElementById('cityInput').value= '';
    document.getElementById('fromInput').value= '';
    document.getElementById('toInput').value= '';
    document.getElementById('formerRoleInput').value= '';
    document.getElementById('descriptionInput').value= '';
    document.getElementById('skillsInput').value= '';
  }
  handleEdit = (event) => {
    let cvElement= event.target.id;
    let inputElement= document.getElementById(`${cvElement}Input`);
    let resumeElement= document.getElementById(cvElement);
    inputElement.focus();
    inputElement.value=resumeElement.textContent;  
  }
  render(){
    return (
      <>
        <div id="poop">
          <div id="fart">
            <FormHead
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              state={this.state}
            />
            <FormMiddle
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              state={this.state}
            />
            <FormSkills
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              state={this.state}
            />
            <FormEnd
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleClear={this.handleClear}
              state={this.state}
            />
          </div>
          <div id="shart">
            <Resume
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
              state={this.state}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
