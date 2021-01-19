import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from './Banner'
import Blog from './Blog'
import Category from './Category'
import Discover from './Discover'
import {Link} from 'react-router-dom'
// import Event from './Event'
// import Feature from './Feature'
// import Testimonial from './Testimonial'

const Landing = () => {
    return (
        <div>
            <a href="#wrapper" data-type="section-switch" className="scrollup">
                <i className="fas fa-angle-double-up"></i>
            </a>
            <div id="wrapper" className="wrapper">
                <Header />
                <Banner />
                {/* <Feature /> */}
                <Discover />
                <Category />
                {/* <Event /> */}
                {/* <Testimonial /> */}
                <Blog />
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
                                    <label className="lost-password"><Link to="#">Lost your password?</Link></label>
                                </div>
                                <div className="inline-box mb-5 mt-4">
                                    <button className="btn-fill" type="submit" value="Login">Login</button>
                                    <Link to="#" className="btn-register"><i className="fas fa-user"></i>Register Here!</Link>
                                </div>
                            </form>
                            <label>Login connect with your Social Network</label>
                            <div className="login-box-social">
                                <ul>
                                    <li><Link to="#" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#" className="twitter"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#" className="linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#" className="google"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
