import React from 'react';
import './styles.scss';
import { ReactHttpRequest } from '../../utils/http';
import { ParticleWrapper, TagWrapper, Input, Button } from '../common';

const submitForm = async () => {
  // @ts-ignore
  const name: string = document.forms['contactForm']['name'].value;
  // @ts-ignore
  const email: string = document.forms['contactForm']['email'].value;
  // @ts-ignore
  const subject: string = document.forms['contactForm']['subject'].value;
  // @ts-ignore
  const message: string = document.forms['contactForm']['message'].value;

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

const ContactPage = () => {
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
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>
          <form
            className="form"
            name="contactForm"
            onSubmit={() => submitForm()}
            method="post"
          >
            <div className="div-2fr">
              <Input placeholder="Name" name="name" type="text" isRequired />
              <Input placeholder="Email" name="email" type="email" isRequired />
            </div>
            <Input
              placeholder="Subject"
              name="subject"
              type="text"
              isRequired
            />
            <Input
              placeholder="Message"
              name="message"
              type="text-area"
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
};

export default ContactPage;
