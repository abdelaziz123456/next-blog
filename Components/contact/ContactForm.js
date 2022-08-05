import { useState, useEffect } from "react";

import classes from "./contactFilrm.module.css";

import Notification from "../ui/notification";
function ContactForm() {
  async function sendContactData(contactDetails) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "something went wrong");
    }
  }
  const [enteredEmail, setEmail] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredMessage, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); //pending ,success,error
  const [requestError, setRequestError] = useState();

  useEffect(()=>{
if(requestStatus ==='success' || requestStatus==='error'){
    setTimeout(()=>{
setRequestStatus(null) 
setRequestError(null)
   },3000)
}


  },[requestStatus ])
  async function formhandler(e) {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEmail('')
      setMessage('')
      setName('')
    } catch (err) {
      setRequestStatus("error");
      setRequestError(err.message);


    }

  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <div className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={formhandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </div>
  );
}

export default ContactForm;
