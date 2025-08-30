import React from "react";
import "./page.css";
function Contact() {
  return (
    <>
      <div className="wrapperContainer">
        <h2>Contact Form</h2>
        <div className="wrapper">
          <div className="formContainer">
            <form>
              <ul>
                Write Us
              </ul>
              <ul>
                <input type="text" name="" id="" placeholder="Name" />
              </ul>
              <ul>
                <input type="text" name="" id="" placeholder="Email"/>
              </ul>
              <ul>
                <input type="text" name="" id="" placeholder="Subject"/>
              </ul>
              <ul></ul>
              <button type="submit">Send</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
