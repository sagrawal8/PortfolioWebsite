import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/sagrawal8' target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/agrawal-shashank/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/dfaltd/' target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
