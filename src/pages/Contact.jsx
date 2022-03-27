import React, { useState } from "react";
import { Footer } from "../components/Footer";
import "../style/contact.css";

export const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, subject);
    alert("function currently unnavailable, please contact me on my telegram @unix123");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };


  return (
    <div>
      <div className="projects">
        <div className="projects__container">
          <div className="wrapper">
            <div className="projects__title">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="contact__group">
            <div className="contact__info">
              <p>Phone Number: +7(708)582-94-52</p>
              <p>Email: bekzot.abdyldayev@gmail.com</p>
              <p>Telegram: @unix123</p>
              <p>Location: Almaty, KZ</p>
            </div>
            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <div className="form__left">
                  <input type="text" placeholder="Name" value={name} onChange={handleName}/>
                  <input type="email" placeholder="Email" value={email} onChange={handleEmail}/>
                  <input type="text" placeholder="Subject" value={subject} onChange={handleSubject}/>
                </div>
                <div className="form__right">
                  <textarea placeholder="Message" value={message} onChange={handleMessage}/>
                </div>
                <button className="btn cv form__button" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
