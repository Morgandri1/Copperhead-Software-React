import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <section id="contact" className="contact-contact">
      <div className="contact-divider"></div>
      <h1 className="contact-text">{props.heading}</h1>
      <div className="contact-container">
        <div className="contact-container1">
          <div className="contact-container2">
            <h5 className="contact-text01 HeadingThree">{props.heading1}</h5>
            <span>{props.text}</span>
          </div>
          <div className="contact-container3">
            <h5 className="contact-text03 HeadingThree">{props.heading2}</h5>
            <span>
              <span>
                You can also contact us via email at
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://mailto:service.copperhead@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link"
              >
                service.copperhead@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-container4">
            <h5 className="contact-text06 HeadingThree">{props.heading3}</h5>
            <span>
              <span>
                You can also join the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://discord.gg/invite/VccusKbhyj"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link1"
              >
                Discord
              </a>
            </span>
          </div>
          <div className="contact-container5">
            <h5 className="contact-text09 HeadingThree">{props.heading4}</h5>
            <span>{props.text1}</span>
          </div>
        </div>
        <div className="contact-container6">
          <div className="contact-container7"></div>
          <div className="contact-container8">
            <svg viewBox="0 0 1152 1024" className="contact-icon">
              <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
            </svg>
            <h1 className="contact-text11 HeadingOne">{props.heading5}</h1>
            <span className="contact-text12">
              <span> </span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.defaultProps = {
  heading1: 'Call or Text us',
  text1:
    'Join the team Interested in joining the team? Email us, or join the discord and open a ticket to learn about team roles, compensation, and more.',
  text: 'You can call or text us at (540) 395-3482',
  heading4: 'Join the team',
  heading: 'Contact Us',
  heading2: 'Email',
  heading3: 'Discord',
  heading5: 'Talk and Meet!',
}

Contact.propTypes = {
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  heading4: PropTypes.string,
  heading: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  heading5: PropTypes.string,
}

export default Contact
