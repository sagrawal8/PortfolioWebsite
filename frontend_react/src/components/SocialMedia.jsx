import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div className="app__social__github">
      <a href='https://github.com/sagrawal8' target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
    <div className="app__social__linkedin">
      <a href='https://www.linkedin.com/in/agrawal-shashank/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div className="app__social__insta">
      <a href='https://www.instagram.com/dfaltd/' target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
