import Header from '../Header'

import './index.css'

const Home = () => {
  const homeLogoSm = 'https://assets.ccbp.in/frontend/react-js/home-sm-img.png'
  const homeLogoLg = 'https://assets.ccbp.in/frontend/react-js/home-lg-img.png'

  return (
    <div className="">
      <Header />

      <div className="home-container">
        <img src={homeLogoSm} alt="home" className="homeLogoSm" />
        <img src={homeLogoLg} alt="home" className="homeLogoLg" />
      </div>
    </div>
  )
}

export default Home
