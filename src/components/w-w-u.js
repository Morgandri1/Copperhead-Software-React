import React from 'react'

import PropTypes from 'prop-types'

import './w-w-u.css'

const WWU = (props) => {
  return (
    <section className="w-w-u-w-w-u">
      <div className="w-w-u-container">
        <div className="w-w-u-container01">
          <div className="w-w-u-container02">
            <h2 className="w-w-u-text HeadingOne">{props.heading}</h2>
            <p className="w-w-u-text01 Lead">{props.text}</p>
            <h1 className="w-w-u-text02">
              <span>Pricing</span>
              <br></br>
            </h1>
            <p className="w-w-u-text05">
              <span>
                Interested, but want to find out if we can work within your
                budget? We offer lots of options and benefits to help you stay
                on budget but still get a great product.
              </span>
              <br></br>
              <br></br>
            </p>
            <h1 className="w-w-u-text09">
              <span className="w-w-u-text10">Free</span>
              <span className="w-w-u-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="w-w-u-text12">consultations</span>
            </h1>
            <span>
              <span className="w-w-u-text14">
                That&apos;s right. Want to schedule a conference with our devs?
                We can work out a perfect median between your budget and desired
                scope. Schedule now here.
              </span>
              <br></br>
              <br></br>
            </span>
            <h1 className="w-w-u-text17">{props.heading1}</h1>
            <span className="w-w-u-text18">
              <span className="w-w-u-text19">
                We offer a variety of ready-to-go solutions to fit your
                community, ranging from pop-up solutions, which you can
                self-host and edit to your heart&apos;s desire, a number of bots
                we can package for your community, and an armada of
                subscriptions (or one-time-payment) prebuilt bots, which can be
                found
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="w-w-u-text20">here</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="w-w-u-logos">
          <div className="w-w-u-container03">
            <div className="w-w-u-container04">
              <div className="w-w-u-container05">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="w-w-u-image"
                />
              </div>
              <div className="w-w-u-container06">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="w-w-u-image1"
                />
              </div>
              <div className="w-w-u-container07">
                <img
                  alt={props.image_alt3}
                  src={props.image_src3}
                  className="w-w-u-image2"
                />
              </div>
            </div>
            <div className="w-w-u-container08">
              <div className="w-w-u-container09">
                <img
                  alt={props.image_alt4}
                  src={props.image_src4}
                  className="w-w-u-image3"
                />
              </div>
              <div className="w-w-u-container10">
                <img
                  alt={props.image_alt5}
                  src={props.image_src5}
                  className="w-w-u-image4"
                />
              </div>
              <div className="w-w-u-container11">
                <img
                  alt={props.image_alt6}
                  src={props.image_src6}
                  className="w-w-u-image5"
                />
              </div>
            </div>
            <div className="w-w-u-container12">
              <div className="w-w-u-container13">
                <img
                  alt={props.image_alt7}
                  src={props.image_src7}
                  className="w-w-u-image6"
                />
              </div>
              <div className="w-w-u-container14">
                <img
                  alt={props.image_alt8}
                  src={props.image_src8}
                  className="w-w-u-image7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt={props.BottomWaveImage_alt}
        src={props.BottomWaveImage_src}
        className="w-w-u-bottom-wave-image"
      />
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="w-w-u-image8"
      />
      <img
        alt={props.TopWaveImage_alt}
        src={props.TopWaveImage_src}
        className="w-w-u-top-wave-image"
      />
    </section>
  )
}

WWU.defaultProps = {
  image_src8: '/playground_assets/logo-weave.svg',
  image_alt8: 'image',
  image_src1: '/playground_assets/logo-asana.svg',
  text: "Whatever you need to make your community flourish, we've got you!",
  image_alt: 'image',
  image_alt6: 'image',
  image_alt7: 'image',
  image_alt2: 'image',
  image_src5:
    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg',
  image_src: '/playground_assets/waves-white.svg',
  heading: 'Work with us',
  TopWaveImage_alt: 'image',
  image_alt1: 'image',
  image_src2: '/playground_assets/logo-slack.svg',
  image_src6: '/playground_assets/logo-invision.svg',
  image_alt3: 'image',
  image_src7: '/playground_assets/logo-attlasian.svg',
  image_alt4: 'image',
  BottomWaveImage_src: '/playground_assets/bottom.svg',
  TopWaveImage_src: '/playground_assets/top.svg',
  image_alt5: 'image',
  heading1: 'Ready-to-go solutions',
  image_src4: '/playground_assets/logo-shopify.svg',
  image_src3: '/playground_assets/logo-google-drive.svg',
  BottomWaveImage_alt: 'image',
}

WWU.propTypes = {
  image_src8: PropTypes.string,
  image_alt8: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt6: PropTypes.string,
  image_alt7: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src5: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  TopWaveImage_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt4: PropTypes.string,
  BottomWaveImage_src: PropTypes.string,
  TopWaveImage_src: PropTypes.string,
  image_alt5: PropTypes.string,
  heading1: PropTypes.string,
  image_src4: PropTypes.string,
  image_src3: PropTypes.string,
  BottomWaveImage_alt: PropTypes.string,
}

export default WWU
