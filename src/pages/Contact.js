import React, { useState } from "react";
import linkedin from '/Users/katymolony/Desktop/myProjects/portfolio2023/src/assets/linkedin.svg';
import github from '/Users/katymolony/Desktop/myProjects/portfolio2023/src/assets/GitHub_icon.svg';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/107c00d0-bd32-11ed-9193-d9c3535809f7";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <p>I would love to hear from you!</p>
        <p>Reach me at
          <a href="mailto:k8molony@att.net"> k8molony(at)att(dot)net</a>
        </p>
        <p>Or fill out the form below:</p>

      </div>
      <div className="mb-3 pt-10">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
      <p>Find me on:</p>
    <div className="mb-3 pt-0">
      <a href="https://github.com/k8molony">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/k8molony">
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </div>
    </form>
  );
};

export default ContactForm;