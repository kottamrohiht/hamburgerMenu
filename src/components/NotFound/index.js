import Header from '../Header'

import './index.css'

const NotFound = () => {
  const notFound = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

  return (
    <div className="">
      <Header />

      <div className="home-container">
        <img src={notFound} alt="not found" className="notFound" />
        <h1 className="nf-heading"> Lost Your Way? </h1>
        <p className="nf-para">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  )
}

export default NotFound
