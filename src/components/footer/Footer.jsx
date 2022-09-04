import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/fulllogo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__content">
        <div className="footer_content-logo">
          <Link to="/movie"><img src={Logo} alt=" tmdb logo" /></Link>
        </div>
        <div className="footer__content-menus">
          <div className="footer__content-menu">
            <h3>Company</h3>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content-menu">
            <h3>Services</h3>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content-menu">
            <h3>Suggestions</h3>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
        <div className="footer__socials">
        <a href="https://www.instagram.com/negin.soleimani_pv/" target="_blank"><i class='bx bxl-instagram'></i></a>
        <a href="https://github.com/neginsoleimani"><i class='bx bxl-github'></i></a>
        <a href="https://linkedin.com/in/negin-soleimani-a45b191a2"><i class='bx bxl-linkedin-square' ></i></a>
        </div>
        <h5 className='copy__footer'>&#169; Copyright Negin Soleimani. All rights reserved</h5>
      </div>
    </div>
  )
}

export default Footer