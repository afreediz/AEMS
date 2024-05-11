import React from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom';
const Footer = () => {
  return (
    <section class="footer outline outline-1 outline-blue-300 mt-16">
      <div class="box-container">
          <div class="">
              <h3>quick links</h3>
              <NavLink to="/"> <i class="fas fa-chevron-right"></i> home </NavLink>
              <a href="#about"> <i class="fas fa-chevron-right"></i> about </a>
              <NavLink to="/events"> <i class="fas fa-chevron-right"></i> event </NavLink>
              <a href="#coordinators"> <i class="fas fa-chevron-right"></i> coordinators </a>
              <NavLink to="/register"> <i class="fas fa-chevron-right"></i> register </NavLink>
          </div>
          <div class="">
              <h3>contact info</h3>
              <a href="#"> <i class="fas fa-phone"></i> +8801688238801 </a>
              <a href="#"> <i class="fas fa-phone"></i> +8801782546978 </a>
              <a href="#"> <i class="fas fa-envelope"></i> aems119@gmail.com </a>
              <a href="#"> <i class="fas fa-envelope"></i> joinus119@gmail.com </a>
              <a href="#"> <i class="fas fa-map-marker-alt"></i> banglore,kerala</a>
          </div>
          <div class="">
              <h3>follow us</h3>
              <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
              <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
              <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
              <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
              <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>  
          </div>
      </div>
      <div class="credit"> created by <span>AEMS</span> |team</div>
  </section>
  )
}

export default Footer
