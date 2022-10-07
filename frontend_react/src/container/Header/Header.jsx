import React, {Component} from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

class Header extends Component {

  componentDidMount() {
    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    this.anchorX = rekt.left + rekt.width/2;
    this.anchorY = rekt.top + rekt.height/2;
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleDeg = this.angle(mouseX, mouseY, this.anchorX, this.anchorY);
      const eyes = document.querySelectorAll('.app__header-img-eye')
      eyes.forEach(eye => {
        eye.style.transform = `rotate(${180 + angleDeg}deg)`;
      })

    });
  }

  angle(cx, cy, ex, ey) {
    const dy = ey-cy;
    const dx = ex-cx;

    const rad = Math.atan2(dy, dx);
    const deg = rad*180/Math.PI;
    return deg;
  }

  render() {
    return(
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Shashank</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
            <p className="p-text">Full-Stack Developer</p>
              <p className="p-text">Masters in Computer Science</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img id="anchor" className="app__header-img-ninja" src={images.profile} alt="profile_bg" />
          <img className="app__header-img-eye" src = {images.eye} style={{top: 154, right: 290}} alt="eye"/>
          <img className="app__header-img-eye" src = {images.eye} style={{top: 154, right: 340}} alt="eye"/>
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.javascript, images.react, images.psql].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
      </div>
    )}
};

export default AppWrap(Header, 'home');
