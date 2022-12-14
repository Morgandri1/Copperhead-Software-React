import React from 'react'

import { Helmet } from 'react-helmet'

import './builder.css'

function add() {
  var message = document.getElementById("message").value
  var emoji = document.getElementById("emoji").value
  var role = document.getElementById("role").value
  var data = document.getElementById("datatest").innerText
  data.concat(message, emoji, role)
  console.log(data)
}

const Builder = (props) => {
  return (
    <div className="builder-container">
      <Helmet>
        <title>builder - Copperhead Software</title>
        <meta property="og:title" content="builder - Copperhead Software" />
      </Helmet>
      <style>
        {`
        body {
          background-color: #f1f1f1;
        }
        button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          pointer
        }
        data {
          background-color: #ffffff;
        }
        `}
      </style>
        <h1>Reaction Role config builder</h1>
        <form>
          <label>Message ID:</label><br/>
          <input type="text" id="message" name="message"/><br/>
          <label>Emoji:</label><br/>
          <input type="text" id="emoji" name="emoji"/><br/>
          <label>Role ID:</label><br/>
          <input type="text" id="role" name="role"/>
        </form>
        <button onClick={add}>Add</button>
        <br/>
        <br/>
        <br/>
        <label>Data:</label><br/>
        <div id="datatest">
          test
          <p>
            test
          </p>
        </div>
    </div>
  )
}

export default Builder
