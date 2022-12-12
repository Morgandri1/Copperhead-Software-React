import React from 'react'

import FeatureCard from './feature-card'
import './features.css'

const Features = (props) => {
  return (
    <section className="features-features">
      <FeatureCard
        text="Discord bots are custom designed for a perfect fit with your community."
        title="Components"
        new_prop="Bot Development"
        image_src="/playground_assets/cube1.svg"
      ></FeatureCard>
      <FeatureCard
        text='We beat the competition by providing the best "Price:Time:Return" ratio.'
        new_prop="Best PTR"
        image_src="/playground_assets/person1.svg"
      ></FeatureCard>
      <FeatureCard
        text="We also offer ready-to-go solutions for anyone on a budget."
        title="Less Code"
        new_prop="Ready-to-go solutions"
        image_src="/playground_assets/rocket1.svg"
      ></FeatureCard>
      <FeatureCard
        text="We offer server architecture, marketing, and more to help your community flourish."
        title="Fully Responsive"
        new_prop="Other Services"
        image_src="/playground_assets/credit%20card1.svg"
      ></FeatureCard>
    </section>
  )
}

export default Features
