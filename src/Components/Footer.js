import React from 'react'
import jago from './image/loi.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <section className="footer-top-wrap">
                <div className="container">
                    <div className="row">
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={jago} className="img-fluid" alt="footer-logo" /></a>
                                </div>
                                <div className="footer-contact-info">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i>40b,Seinde calisto str.,Oshodi Lagos
                                            </li>
                                        <li><i className="fas fa-phone"></i>+123 6669 000</li>
                                        <li><i className="far fa-envelope"></i>www.techend.com.ng</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-header">
                                    <h3>Top Highlights</h3>
                                </div>
                                <div className="widget_nav_menu">
                                    <ul>
                                        <li><Link to="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Gadgets</Link></li>
                                        <li><Link to="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Clothings</Link></li>
                                        <li><Link to="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">footwears</Link></li>
                                        <li><Link to="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Jewelleries</Link></li>
                                        <li><Link to="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Automation</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-header">
                                    <h3>Support</h3>
                                </div>
                                <div className="widget_nav_menu">
                                    <ul>
                                        <li><Link to="/contact">Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-header">
                                    <h3>Follow Us On</h3>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                                <ul className="folow-us">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom-wrap">
                <div className="container">
                </div>
            </section>
        </footer>
    )
}
export default Footer
