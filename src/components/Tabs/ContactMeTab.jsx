import Link from "next/link";
import React from "react";

const contacts = [
  {
    social: "Github",
    link: "https://github.com/RizSensei",
  },
  {
    social: "Facebook",
    link: "https://www.facebook.com/riz.mhrzn",
  },
  {
    social: "Instagram",
    link: "https://www.instagram.com/en_riz101/",
  },
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/rijanmaharzan/",
  },
];

const ContactMeTab = () => {
  return (
    <div className="text-white">
      <div className="text-darkPurple">&lt;html&gt;</div>
      <div className="text-darkPurple ml-3">&lt;body&gt;</div>
      {contacts.map((contact, idx) => {
        return (
          <div key={idx} className="ml-6">
            <span className="text-red-700">&lt;h1&gt;</span>
            <span className="text-orange-600">&nbsp;{contact.social}:</span>
            <span className="ml-2 text-blue-600"><Link href={contact.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{contact.link}</Link>&nbsp;</span>
            <span className="text-red-700">&lt;/h1&gt;</span>
          </div>
        );
      })}

      <div className="text-darkPurple ml-3">&lt;/body&gt;</div>
      <div className="text-darkPurple">&lt;/html&gt;</div>
    </div>
  );
};

export default ContactMeTab;
