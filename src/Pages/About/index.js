import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import AboutBanner from './AboutBanner'
import AboutContent from './AboutContent'
import ListingBanner from './ListingBanner'
import TeamCarousel from './TeamCarousel'

const About = () => {
    return (
        <div>
            <a href="#wrapper" data-type="section-switch" className="scrollup">
                <i className="fas fa-angle-double-up"></i>
            </a>
            <div id="wrapper" className="wrapper">
                <Header />
                <AboutBanner />
                <AboutContent />
                <ListingBanner />
                <TeamCarousel />

                <Footer />
            </div>

            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="title-default-bold mb-none">Login</div>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form className="login-form">
                                <input className="main-input-box" type="text" placeholder="User Name" />
                                <input className="main-input-box" type="password" placeholder="Password" />
                                <div className="inline-box mb-5 mt-4">
                                    <div className="checkbox checkbox-primary">
                                        <input id="checkbox1" type="checkbox" />
                                        <label htmlFor="checkbox1">Remember Me</label>
                                    </div>
                                    <label className="lost-password"><a href="#">Lost your password?</a></label>
                                </div>
                                <div className="inline-box mb-5 mt-4">
                                    <button className="btn-fill" type="submit" value="Login">Login</button>
                                    <a href="#" className="btn-register"><i className="fas fa-user"></i>Register Here!</a>
                                </div>
                            </form>
                            <label>Login connect with your Social Network</label>
                            <div className="login-box-social">
                                <ul>
                                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="google"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
