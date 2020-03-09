import React, { Component } from 'react';
import './styles.scss';
import { ReactHttpRequest } from '../../utils/http';
import { ParticleWrapper, TagWrapper, Input, Button, Alert } from '../common';

class ContactPage extends Component {
  state = {
    name: null,
    email: null,
    subject: null,
    message: null,
    isLoading: false,
  };

  onFormSubmit = async () => {
    const { name, email, message, subject } = this.state;
    this.setState({ isLoading: true });
    Alert({ type: 'loading' });
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
        this.setState({
          isLoading: false,
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        Alert({ type: 'success' });
        return true;
      },
      err => {
        this.setState({ isLoading: false });
        Alert({ type: 'error' });
        return false;
      },
    );
  };

  isAllFieldsSet = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { name, email, message, subject } = this.state;
    if (
      name &&
      email &&
      message &&
      subject &&
      typeof name === 'string' &&
      typeof email === 'string' &&
      typeof subject === 'string' &&
      typeof message === 'string'
    ) {
      return regex.test(String(email).toLowerCase());
    }
    return false;
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
    const { isLoading, name, message, subject, email } = this.state;
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
            <div className="form">
              <div className="div-2fr">
                <Input
                  placeholder="Name"
                  name="name"
                  value={name}
                  type="text"
                  onChange={this.handleNameChange}
                  isRequired
                />
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleEmailChange}
                  isRequired
                />
              </div>
              <Input
                placeholder="Subject"
                name="subject"
                type="text"
                value={subject}
                isRequired
                onChange={this.handleSubjectChange}
              />
              <Input
                placeholder="Message"
                name="message"
                type="text-area"
                value={message}
                onChange={this.handleMessageChange}
                isRequired
              />
              <div className="flex">
                <div className="flex-auto" />
                <Button
                  name="send"
                  onClick={this.onFormSubmit}
                  disabled={!this.isAllFieldsSet()}
                  isLoading={isLoading}
                />
              </div>
            </div>
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
