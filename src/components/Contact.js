import React from 'react'
import { FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import '../App.css'

const Contact = () => {
    return (
        <section id="contact" className="mb-5">
            <h1 className="text-center mt-5 text-white">
                Contact
            </h1>
            <div className="underline mx-auto mb-5"></div>
            <div className="row g-0 text-center text-white" data-aos="fade-up">
                <div className="col-lg-3 mb-3" >
                    <a href="https://www.facebook.com/michael.rasoloarison/" target="_blank" rel="noreferrer"><FaFacebook size={32} /> <br />Michaël Rasoloarison</a>
                </div>
                 <div className="col-lg-3 mb-3">
                    <a href="mailto: mikarasoloarison@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope size={32} /> <br/>mikarasoloarison@gmail.com</a>
                </div>
                 <div className="col-lg-3 mb-3">
                    <FaPhone size={32} /> <br/> 034 15 967 88 / 032 24 459 63
                </div>
                 <div className="col-lg-3 mb-3">
                    <FaMapMarkerAlt size={32} /> <br/> Lot ITE 23 Bis Sahalemaka Ambaniala Itaosy
                </div>
            </div>
        </section>
    )
}

export default Contact
