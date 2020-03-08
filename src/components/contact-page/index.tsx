import React, { Component } from 'react';
import './styles.scss';
import { ReactHttpRequest } from '../../utils/http';
import { ParticleWrapper, TagWrapper, Input, Button } from '../common';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onFormSubmit = async (event: any) => {
    event.preventDefault();
    const { name, email, message, subject } = this.state;
    await ReactHttpRequest.post(
      'https://us-central1-mywebsite-2k.cloudfunctions.net/sendEmail',
      {
        name,
        email,
        subject,
        message,
      },
    ).then(
      res => {
        alert('Message Sent');
        return true;
      },
      err => {
        alert('something went wrong');
        return false;
      },
    );
  };

  handleNameChange = (e: any) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e: any) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubjectChange = (e: any) => {
    this.setState({
      subject: e.target.value,
    });
  };

  handleMessageChange = (e: any) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div className="contact-page">
        <ParticleWrapper type="snow" />
        <TagWrapper>
          <div className="left-pane">
            <div className="code">&lt;h1&gt;</div>
            <div className="brand">
              <span className="spunge">C</span>
              <span className="spunge">o</span>
              <span className="spunge">n</span>
              <span className="spunge">t</span>
              <span className="spunge">a</span>
              <span className="spunge">c</span>
              <span className="spunge">t</span>&nbsp;
              <span className="spunge">m</span>
              <span className="spunge">e</span>
            </div>
            <div className="code">&lt;h1/&gt;</div>
            <p>
              I am interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to contact me using below form either.
            </p>
            <form
              className="form"
              name="contactForm"
              onSubmit={this.onFormSubmit}
              method="post"
            >
              <div className="div-2fr">
                <Input
                  placeholder="Name"
                  name="name"
                  type="text"
                  onChange={this.handleNameChange}
                  isRequired
                />
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleEmailChange}
                  isRequired
                />
              </div>
              <Input
                placeholder="Subject"
                name="subject"
                type="text"
                isRequired
                onChange={this.handleSubjectChange}
              />
              <Input
                placeholder="Message"
                name="message"
                type="text-area"
                onChange={this.handleMessageChange}
                isRequired
              />
              <div className="flex">
                <div className="flex-auto" />
                <Button name="send" type="submit" />
              </div>
            </form>
          </div>
          <div className="right-pane">
            <img src="contact.svg" alt="Contact" />
          </div>
        </TagWrapper>
      </div>
    );
  }
}

export default ContactPage;
