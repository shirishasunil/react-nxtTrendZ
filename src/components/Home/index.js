import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content-container">
        <h1 className="home-title">Clothes That Get YOU Noticed</h1>
        <img
          className="home-mobile-image"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
        <img
          className="home-desktop-image"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
      </div>
    </div>
  </>
)
export default Home
