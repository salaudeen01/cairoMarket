import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.jpg'
import '../../css/dashboard.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import Footer from '../../Components/Footer'

export class Dashboard2 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center page">
                    <div className="sidebar col-sm-3">
                    <h4 className="" style={{color:'gray',marginTop:20}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h4>
                   
                      <div className='user'><span className="badge"><img src={user} alt="users images" /><a href="edit"><i className="fa fa-edit"/></a></span></div>
                      <div className="sidebar-text"><br/>
                        <h4><span className="fa fa-user"/>  Williams Blonde</h4>
                        <br/>
                        <h5>fullstack web developer,</h5>
                        <h5>CEO @Tristack inc.</h5>
                        
                        <span className="btn btn-outline-primary ">Edit profile</span>
                        <hr/>
                        <h3>Contacts:</h3>
                        <h6><a href="mailto:#"><span className="fa fa-envelope" /> williamsBlonde@gmail</a></h6>
                        <h6><a href="tel:#"><span className="fa fa-phone" />  +2347063205787</a></h6>
                        <h5><span className="fa fa-map-marker" />  19 olasoji ln cairo market oshoji isolo lagos.</h5>
                        <br/>
                        <div className="sidebar-social">
                        <hr/> 
                        <h5>Organisation linkup</h5>
                            <br/>
                        <h6>Website <span className="fa fa-link" />:<a href="https://tristack.net"> Tristack.inc.org</a></h6>

                        <a className="py-3 px-3" style={{fontSize:20}} href="https://facebook.com"><i className="fa fa-facebook"/></a>
                        <a className="py-3 px-3" style={{fontSize:20}} href="https://twitter.com"><i className="fa fa-twitter"/></a>
                        <a className="py-3 px-3" style={{fontSize:20}} href="https://instagram.com"><i className="fa fa-instagram"/></a>
                        </div>
                      </div>
                     
                    </div>
                    <div className="page col-sm-9"><br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Tristack technology inc <span className="fa fa-laptop" /></h2>
                            </div>
                            <div className="col-sm-6 top-nav">
                                <ul>
                                    <li><Link className="btn btn-outline-info dice"><span className="fa fa-plus" /> Upload</Link></li>
                                    <li><Link><img src={user} alt="user"/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <h3>About <span className="fa fa-info"/></h3>
                        <h5>Tristack inc is an organisation that is specialized in computer science and technology initialization and installation.</h5>
                       
                            <h3>What we do</h3>
                            <div className="row lists">
                                <div className="">
                                    <h5>web design and development <span className="fa fa-laptop"/></h5>
                                    <h5>Graphics and logo design <span className="fa fa-paint-brush"/></h5>
                                    <h5>UI/UX design <span className="fa fa-desktop"/></h5>
                                    <h5>Social media marketing <span className="fa fa-mobile"/></h5>
                                    <hr/>
                                    <span className="btn btn-outline-info">Add more</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <Link>
                                        <div className="img-card">
                                            <img src={img1} alt="image1"/>
                                            <h6 style={{marginTop:10}}>Project card</h6>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-3">
                                    <div className="img-card">
                                        <img src={img3} alt="image3"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="img-card">
                                        <img src={img4} alt="image4"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="img-card">
                                        <img src={img2} alt="image2"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                        <div className="col-sm-3">
                            <div className="img-card">
                                <img src={img5} alt="image5"/>
                                <h6 style={{marginTop:10}}>Project card</h6>
                            </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="img-card">
                                    <img src={img6} alt="image6"/>
                                    <h6 style={{marginTop:10}}>Project card</h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="img-card">
                                    <img src={img7} alt="image7"/>
                                    <h6 style={{marginTop:10}}>Project card</h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="img-card">
                                    <img src={img8} alt="image8"/>
                                    <h6 style={{marginTop:10}}>Project card</h6>
                                </div>
                            </div>
                        </div>
                        <Footer />
                        {/* <footer>
                            <h5 className="float-left" style={{color:'gray'}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h5>
                            <h5 className="float-right">Techend inc 3.0</h5>
                        </footer> */}
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Dashboard2
