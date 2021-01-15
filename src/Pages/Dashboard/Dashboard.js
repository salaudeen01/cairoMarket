import React, { Component } from 'react'
import '.././css/dashboard.css'
import user from '../images/user.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/bg3.png'
import Footer from '../../Components/Footer'

export class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid all">
                <div className="top">
                    <div className="row logo">
                        <div className="col-sm-4">
                            <h2 className="my-2 mx-4" style={{color:'gray'}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h2>
                        </div>
                        <div className="col-sm-4">
                            <h3 className="float-right my-5 mx-5" style={{color:'#a0a0a0'}}>Tristack tech inc <span className="fa fa-laptop"/></h3>
                        </div>
                        <div className="col-sm-4">
                            <h3 className=" my-2 mx-5" style={{color:'#a0a0a0'}}>User dashboard <span className="fa fa-bar-chart"/></h3>
                        </div>
                        </div>
                       
                    </div>
                    <br/>
                    <div className="row text-center">
                        <div className="col-sm-3 user-bd">
                                <div className="">
                                    <img src={user} alt='user'/>
                                </div>
                                <br/>
                                <h3><span className="fa fa-user"/> Williams Blonde</h3>
                                <h5>fullstack web developer,</h5>
                                <h5>CEO @Tristack inc.</h5>
                                <hr/>
                                <h3>Contacts:</h3>
                            <h6><a href="mailto:#"><span className="fa fa-envelope" /> -: williamsBlonde@gmail</a></h6>
                            <h6><a href="tel:#"><span className="fa fa-phone" /> -:  +2347063205787</a></h6>
                            <h5><span className="fa fa-map-marker" /> -:  19 olasoji ln cairo market oshoji isolo lagos.</h5>
                            <br/>
                            <div className="sidebar-social">
                                <h5>Personal linkup</h5>
                            
                            <a className="py-3 px-3" style={{fontSize:20}} href="https://facebook.com"><i className="fa fa-facebook"/></a>
                            <a className="py-3 px-3" style={{fontSize:20}} href="https://wa.me.com"><i className="fa fa-whatsapp"/></a>
                            <a className="py-3 px-3" style={{fontSize:20}} href="https://github.com"><i className="fa fa-github"/></a>
                            <hr/>
                            <h5>Organisation linkup</h5>
                            
                            <h6>Website<span className="fa fa-link" />:<a href="https://tristack.net"> Tristack.inc.org</a></h6>

                            <a className="py-3 px-3" style={{fontSize:20}} href="https://facebook.com"><i className="fa fa-facebook"/></a>
                            <a className="py-3 px-3" style={{fontSize:20}} href="https://twitter.com"><i className="fa fa-twitter"/></a>
                            <a className="py-3 px-3" style={{fontSize:20}} href="https://instagram.com"><i className="fa fa-instagram"/></a>
                           </div>    

                        </div>

                        <div className="col-sm-6 project-card">
                            <h3>Project cards</h3>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img1} alt="image1"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img3} alt="image3"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img4} alt="image4"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                            </div>
                            <br/><br/>
                            <div className="row">
                            <div className="col-sm-4">
                                        <div className="img-card">
                                        <img src={img5} alt="image5"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img6} alt="image6"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img7} alt="image7"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                            </div>
                            <br/><br/>
                            <div className="row">
                            <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img2} alt="image5"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img8} alt="image6"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-card">
                                        <img src={img9} alt="image7"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-3 busy-bd">
                        <h3>About <span className="fa fa-info"/></h3>
                        <p><p>Tristack inc is an organisation that is specialized in computer science and technology initialization and installation.</p></p>

                        <h3>What we do</h3>
                            <ul className="float-left">
                                <li>web design and development <span className="fa fa-laptop"/></li>
                                <li>Graphics and logo design <span className="fa fa-paint-brush"/></li>
                                <li>UI/UX design <span className="fa fa-desktop"/></li>
                                <li>Social media marketing <span className="fa fa-mobile"/></li>
                                <hr/>
                                <span className="btn btn-outline-info float-left">Read more..</span>
                                <span className="btn btn-outline-danger float-right">Edit profile</span>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <Footer />
                    {/* <footer>
                    <h5 className="float-left" style={{color:'gray'}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h5>
                    <h5 className="float-right">Techend inc 3.0</h5>
                    </footer> 
              <br/><br/> */}
            </div>
        )
    }
}

export default Dashboard
