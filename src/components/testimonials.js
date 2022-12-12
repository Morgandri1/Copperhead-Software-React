import React from 'react'

import Component7 from './component7'
import Component8 from './component8'
import Component9 from './component9'
import './testimonials.css'

const Testimonials = (props) => {
  return (
    <section className="testimonials-testimonials">
      <div className="testimonials-container">
        <Component7></Component7>
        <Component8></Component8>
      </div>
      <Component9></Component9>
    </section>
  )
}

export default Testimonials
