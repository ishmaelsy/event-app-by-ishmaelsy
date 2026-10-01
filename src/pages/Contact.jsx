import { useState } from "react";

function Contact() {
  // one state for each input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // error message and success message
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from refreshing

    // check that the form is filled in
    if (name === "" || email === "" || message === "") {
      setError("Please fill in all the fields.");
      setSuccess(false);
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }

    // no backend yet, so we just print it in the console
    console.log("Message:", name, email, message);
    setError("");
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <div className="hero">
        <h1>Contact us</h1>
        <p>Send us a message and we will reply soon.</p>
      </div>

      <div className="section contact">
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Message sent!</p>}

          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea rows="5" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" className="btn">Send message</button>
        </form>

        <div className="card card-info">
          <h3>Contact details</h3>
          <p>Email: hello@ghanaevents.com</p>
          <p>Phone: +233 20 000 0000</p>
          <p>Location: Accra, Ghana</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
