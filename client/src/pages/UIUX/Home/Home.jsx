import React from 'react'
import '../style.css'
import HomeGif from "./home.gif"
import AboutImage from './03.gif'
import GoogleMapReact from 'google-map-react';

const Home = () => {
    const center = { lat: 37.7749, lng: -122.4194 };
    const zoom = 10;
    return (
      <div>
      {/* Home section */}
      <section className="home" id="home">
          <div className="image">
              <img src={HomeGif} alt="" />
          </div>
          <div className="content">
              <h3>Techfest: Where Innovation Meets Inspiration!</h3>
              <p>Techfest is an annual event that celebrates innovation, creativity, and technological advancement. It brings together students, professionals, and enthusiasts from diverse backgrounds to explore emerging trends, showcase groundbreaking projects, and engage in hands-on activities.</p>
              <a href="#Register" className="btn"> Register now <span className="fas fa-chevron-right"></span> </a>
          </div>
      </section>
      {/* Icons section */}
      <section className="icons-container">
          <div className="icons">
              <h3>20+</h3>
              <p>Event 1</p>
          </div>
          <div className="icons">
              <h3>30+</h3>
              <p>Event 2</p>
          </div>
          <div className="icons">
              <h3>30+</h3>
              <p>Event 3</p>
          </div>
          <div className="icons">
              <h3>50+</h3>
              <p>Event 4</p>
          </div>
      </section>
      {/* About section */}
      <section className="about" id="about">
          <h1 className="heading"> <span>ABOUT</span> US </h1>
          <div className="row">
              <div className="image">
                  <img src={AboutImage} alt="" width="400" height="300" />
              </div>
              <div className="content">
                  <h3>Empowering Events, Inspiring Innovations: Unveiling the Essence of Techfest.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                  <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
              </div>
          </div>
      </section>
      <section className="events" id="events">
            <h1 className="heading"> Our <span>Events</span> </h1>
            <div className="flex flex-wrap justify-center">
                <div className="custom-box ">
                    <i className=""></i>
                    <h3 className=''>Technical</h3>
                    <a href="#" className="btn"> learn more <span className=""></span> </a>
                </div>
            </div>
        </section>
        <section className="coordinators" id="coordinators">
            <h1 className="heading"> our <span>coordinators</span> </h1>
            <div className="box-container">
                <div className="box">
                    <img src="image/doc-1.jpg" alt="image " />
                    <h3>Techfest Director</h3>
                    <span>name</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
                <div className="box">
                    <img src="image/doc-2.jpg" alt="image" />
                    <h3>Techinical coordinator</h3>
                    <span>name</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
                <div className="box">
                    <img src="image/doc-3.jpg" alt="image" />
                    <h3>marketing coordinator</h3>
                    <span>name</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
                <div className="box">
                    <img src="image/doc-4.jpg" alt="image" />
                    <h3>volunteer cordinator</h3>
                    <span>name</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </section>
        <section id="location" className="location mt-32">
            <h1 className="heading"> LOCATION </h1>
            <div className="box">
                <div className="w-full  grid grid-cols-2">
                    <div className="map w-full col-span-1">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }} // Replace 'YOUR_API_KEY' with your actual API key
                            defaultCenter={center}
                            defaultZoom={zoom}
                        >
                        </GoogleMapReact>
                    </div>
                    <div className=" p-8 col-span-1">
                        <h3>volunteer cordinator</h3>
                        <h3>volunteer cordinator</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia cumque nesciunt deserunt quaerat esse, voluptates assumenda excepturi. Odio, enim.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
