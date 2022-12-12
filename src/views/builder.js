import React from 'react'

import { Helmet } from 'react-helmet'

import './builder.css'

const Builder = (props) => {
  return (
    <div className="builder-container">
      <Helmet>
        <title>builder - Copperhead Software</title>
        <meta property="og:title" content="builder - Copperhead Software" />
      </Helmet>
    </div>
  )
}

export default Builder
