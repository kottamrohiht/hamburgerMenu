import Header from '../Header'

import './index.css'

const About = () => {
  const aboutLogoSm =
    'https://assets.ccbp.in/frontend/react-js/about-sm-img.png'
  const aboutLogoLg =
    'https://assets.ccbp.in/frontend/react-js/about-lg-img.png'

  return (
    <div>
      <Header />

      <div className="home-container">
        <img src={aboutLogoSm} alt="about" className="homeLogoSm" />
        <img src={aboutLogoLg} alt="about" className="homeLogoLg" />
      </div>
    </div>
  )
}

export default About
