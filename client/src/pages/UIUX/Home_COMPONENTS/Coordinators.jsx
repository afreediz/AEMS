import React from 'react'
import Afreedi from './afreedi.jpg'
import Jesma from './jesma.jpg'
import Hafiz from './hafiz.jpg'
import Aneeta from './aneeta.jpg'

const Coordinators = () => {
  return (
        <section className="coordinators" id="coordinators">
            <h1 className="heading"> our <span>coordinators</span> </h1>
            <div className="box-container">
                <div className="box">
                    <img src={Aneeta} alt="image " />
                    <h3>FRONTEND DEVELOPER</h3>
                    <span>ANEETA PAUL</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={Jesma} alt="image" />
                    <h3>FRONTEND DEVELOPER</h3>
                    <span>JESMA SUKUMAR</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={Afreedi} alt="image" />
                    <h3>BACKEND DEVELOPER</h3>
                    <span>AFREEDI Z</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={Hafiz} alt="image" />
                    <h3>BACKEND DEVELOPER</h3>
                    <span>HAFIZ HUSSAIN</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Coordinators
