import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-logo-btn-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <button type="button" className="logout-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-logout-logo"
            />
          </button>
        </div>
        <div className="header-desktop-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <ul className="header-list-container">
            <li className="list-item">Home</li>
            <li className="list-item">Products</li>
            <li className="list-item">Cart</li>
          </ul>
          <button type="button" className="desktop-button">
            Logout
          </button>
        </div>
        <div className="menu-mobile-container">
          <ul className="menu-list-mobile-container">
            <Link to="/">
              <li className="list-item-mobile">
                <img
                  alt="nav home"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                  className="menu-logo-mobile"
                />
              </li>
            </Link>
            <li className="list-item-mobile">
              <img
                alt="nav home"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                className="menu-logo-mobile"
              />
            </li>
            <li className="list-item-mobile">
              <img
                alt="nav home"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                className="menu-logo-mobile"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
)

export default Header
