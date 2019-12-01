import * as React from 'react';

export const ContactForm = () => {
  return (

    <form method="post" action="#">
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" />
      </label>
      <button className="button" type="submit">Send Message</button>
    </form>
  );
};
