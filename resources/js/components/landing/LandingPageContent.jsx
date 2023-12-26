import React from 'react'
import TopSliderSection from './TopSliderSection'
import Girls from './Girls'
import FeatureProduct from './FeatureProduct'

export default function LandingPageContent() {
  return (
    <>
    <section id="top-slider-section">
      <TopSliderSection />
    </section>
    <section id='girls-section' className='pt-2'>
      <Girls />
    </section>
    <section id="feature-product">
      <FeatureProduct />
    </section>
    </>
  )
}
