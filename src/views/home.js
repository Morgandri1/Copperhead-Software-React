import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import Features from '../components/features'
import Divider from '../components/divider'
import Component10 from '../components/component10'
import Component11 from '../components/component11'
import Component12 from '../components/component12'
import Component13 from '../components/component13'
import Divider1 from '../components/divider1'
import './home.css'

const Home = (props) => {
  return (
    <section id="products" className="home-container">
      <Helmet>
        <title>Copperhead Software</title>
        <meta property="og:title" content="Copperhead Software" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">
              <span className="HeadingOne">Copperhead Software</span>
              <br></br>
            </h1>
            <h1 className="home-text03 HeadingOne">Choose the best</h1>
            <span className="home-text04">
              <span>
                Copperhead Software is a small team of developers, marketers,
                and server architects who want to make your community flourish.
              </span>
              <br className="Lead"></br>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a
                  href="https://copperheadsoftware.co/#contact"
                  className="home-link"
                >
                  <PrimaryPinkButton
                    button="contact us"
                    className="home-component1"
                  ></PrimaryPinkButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        loading="eager"
        className="home-image"
      />
      <Features></Features>
      <Divider></Divider>
      <h1>
        <span>Our Ready-to-go products</span>
        <br></br>
      </h1>
      <section id="products" className="home-products">
        <Component10 text="A robust, easy-to-use payment API for tracking projects and payments."></Component10>
        <Link to="/monarch" className="home-navlink">
          <Component11 className="home-component5"></Component11>
        </Link>
        <Component12></Component12>
        <Component13 text="We offer premade server templates on the cheap, so you can spend minutes on a server, not hours."></Component13>
      </section>
      <Divider1></Divider1>
      <section className="home-w-w-u">
        <div className="home-container04">
          <div className="home-container05">
            <div className="home-container06">
              <h2 className="home-text10 HeadingOne">Work with us</h2>
              <p className="home-text11 Lead">
                Whatever you need to make your community flourish, we&apos;ve
                got you!
              </p>
              <h1 className="home-text12">
                <span>Pricing</span>
                <br></br>
              </h1>
              <p className="home-text15">
                <span>
                  Interested, but want to find out if we can work within your
                  budget? We offer lots of options and benefits to help you stay
                  on budget but still get a great product.
                </span>
                <br></br>
                <br></br>
              </p>
              <h1 className="home-text19">
                <span className="home-text20">Free</span>
                <span className="home-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text22">consultations</span>
              </h1>
              <span>
                <span className="home-text24">
                  That&apos;s right. Want to schedule a conference with our
                  devs? We can work out a perfect balance between your budget
                  and your desired scope. Schedule now
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#contact" className="home-link1">
                  here
                </a>
                <span className="home-text25">.</span>
                <br></br>
                <br></br>
              </span>
              <h1 className="home-text28">Ready-to-go solutions</h1>
              <span className="home-text29">
                <span className="home-text30">
                  We offer a variety of ready-to-go solutions to fit your
                  community, ranging from pop-up solutions, which you can
                  self-host and edit to your heart&apos;s desire, a number of
                  bots we can package for your community, and an armada of
                  subscriptions (or one-time-payment) prebuilt bots, which can
                  be found
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#products" className="home-link2">
                  here
                </a>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container07">
              <div className="home-container08">
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/playground_assets/logo-asana.svg"
                    className="home-image01"
                  />
                </div>
                <div className="home-container10">
                  <img
                    alt="image"
                    src="/playground_assets/logo-slack.svg"
                    className="home-image02"
                  />
                </div>
                <div className="home-container11">
                  <img
                    alt="image"
                    src="/playground_assets/logo-google-drive.svg"
                    className="home-image03"
                  />
                </div>
              </div>
              <div className="home-container12">
                <div className="home-container13">
                  <img
                    alt="image"
                    src="/playground_assets/logo-shopify.svg"
                    className="home-image04"
                  />
                </div>
                <div className="home-container14">
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className="home-image05"
                  />
                </div>
                <div className="home-container15">
                  <img
                    alt="image"
                    src="/playground_assets/logo-invision.svg"
                    className="home-image06"
                  />
                </div>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <img
                    alt="image"
                    src="/playground_assets/logo-attlasian.svg"
                    className="home-image07"
                  />
                </div>
                <div className="home-container18">
                  <img
                    alt="image"
                    src="/playground_assets/logo-weave.svg"
                    className="home-image08"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image09"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <nav className="home-contact">
        <div className="home-divider"></div>
        <h1 id="contact" className="home-text32">
          Contact Us
        </h1>
        <div className="home-container19">
          <div className="home-container20">
            <div className="home-container21">
              <h5 className="home-text33 HeadingThree">Call or Text us</h5>
              <span>You can call or text us at (540) 395-3482</span>
            </div>
            <div className="home-container22">
              <h5 className="home-text35 HeadingThree">Email</h5>
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
                  className="home-link3"
                >
                  service.copperhead@gmail.com
                </a>
              </span>
            </div>
            <div className="home-container23">
              <h5 className="home-text38 HeadingThree">Discord</h5>
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
                  className="home-link4"
                >
                  Discord
                </a>
              </span>
            </div>
            <div className="home-container24">
              <h5 className="home-text41 HeadingThree">Join the team</h5>
              <span>
                Join the team Interested in joining the team? Email us, or join
                the discord and open a ticket to learn about team roles,
                compensation, and more.
              </span>
            </div>
          </div>
          <div className="home-container25">
            <div className="home-container26"></div>
            <div className="home-container27">
              <svg viewBox="0 0 1152 1024" className="home-icon">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text43 HeadingOne">Talk and Meet!</h1>
              <span className="home-text44">
                <span> </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Home
