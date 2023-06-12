import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => {
  const websiteLogo =
    'https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png'

  return (
    <div className="header-container">
      <Link to="/" className="link">
        <img src={websiteLogo} alt="website logo" className="websiteLogo" />
      </Link>
      <Popup
        modal
        position="top right"
        className="popup-content"
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="button"
          >
            <GiHamburgerMenu className="GiHamburger-menu" />
          </button>
        }
      >
        {close => (
          <>
            <div className="button-container">
              <button
                data-testid="closeButton"
                onClick={() => close()}
                className="closeButton"
                type="button"
              >
                <IoMdClose className="close" />
              </button>
            </div>

            <ul className="link-container">
              <Link to="/" className="popLink">
                <li className="popLink">
                  <AiFillHome className="AiFill-home" />
                  Home
                </li>
              </Link>

              <Link to="/about" className="popLink">
                <li className="popLink">
                  <BsInfoCircleFill className="AiFill-home" />
                  About
                </li>
              </Link>
            </ul>
          </>
        )}
      </Popup>
    </div>
  )
}

export default Header
