import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton2 from '../components/primary-pink-button2'
import './monarch.css'

const Monarch = (props) => {
  return (
    <div className="monarch-container">
      <Helmet>
        <title>Monarch - Copperhead Software</title>
        <meta property="og:title" content="Monarch - Copperhead Software" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="monarch-container1">
        <div className="monarch-hero">
          <div className="monarch-card">
            <h1 className="monarch-text">Monarch</h1>
            <h1 className="monarch-text01">The MEE6 killer</h1>
            <span className="monarch-text02">
              Use the better, stronger, and more advanced bot.
            </span>
            <div className="monarch-container2">
              <div className="monarch-container3">
                <Link to="/" className="monarch-navlink">
                  <PrimaryPinkButton2
                    button="contact us"
                    className="monarch-component1"
                  ></PrimaryPinkButton2>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/curved5-1100w.jpg"
          className="monarch-image"
        />
      </div>
      <section className="monarch-container4">
        <div className="monarch-container5">
          <h1 className="monarch-text03">Take your server to the next level</h1>
          <span className="monarch-text04">
            use the new generation of Discord bot, Monarch.
          </span>
          <div className="monarch-container6">
            <p className="monarch-text05">
              <span className="monarch-text06">
                Monarch offers lots of features for moderation, tools, and fun
                for your community.
              </span>
              <br></br>
              <br></br>
              <span>
                Based on Interactions.py, we get the best slash commands and
                discord application integrations.
              </span>
              <br></br>
              <br></br>
              <span>With easy to use configs, we make it easy to convert.</span>
              <br></br>
              <br></br>
              <span>Features:</span>
              <br></br>
              <span>• </span>
              <span>Robust Automod</span>
              <br></br>
              <span>• Autopolling</span>
              <br></br>
              <span>• Automod audit logs for admins</span>
              <br></br>
              <span>• Configurable reaction roles</span>
              <br></br>
              <span>• Lots of moderation tools</span>
              <br></br>
              <span>• Memes and cute animal pictures from reddit</span>
              <br></br>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Monarch
