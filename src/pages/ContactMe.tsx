import { useState } from "react";
import Layout from "../components/Layout";

export default function ContactMe() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <h2 className="title">Contact <span className="accent">Me</span></h2>
      <p className="body">Let's get in touch!</p>
      <div className="form">
        <label>Witsanu<input type="text" /></label>
        <label>Kaeokrachangsuk<input type="text" /></label>
        <label>maunfnu2017@gmail.com<input type="email" /></label>
        <label>0967645661<input type="tel" /></label>
        <label className="full">Message<textarea rows={3} /></label>
        <button className="btn" type="button" onClick={() => setSent(true)}>
          {sent ? "Sent" : "Send message"}
        </button>
      </div>
    </Layout>
  );
}
