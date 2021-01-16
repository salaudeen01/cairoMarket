import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            {/* <div id="preloader"></div> */}
            <a href="#wrapper" data-type="section-switch" class="scrollup">
                <i class="fas fa-angle-double-up"></i>
            </a>
            <div id="wrapper" class="wrapper">
                <header id="site-header" className="header-one">
                    <div className="header-main header-sticky" style={{background:props.color}} >
                        <div className="container-fluid">
                            <div className="mob-menu-open toggle-menu">
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-12">
                                    <div className="site-logo">
                                        <a href="index.html" className="main-logo"><img src="/assets/img/logo.png" alt="Site Logo" /></a>
                                        <a href="index.html" className="sticky-logo"><img src="/assets/img/sticky-logo.png" alt="Site Logo" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12 possition-static">
                                    <nav className="site-nav">
                                        <ul className="site-menu">
                                            <li><Link to="/landing">Home</Link></li>
                                            <li><Link to ="/dashboard">Dashboard</Link></li>
                                            <li><Link to="/event">Event</Link> </li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-3 d-none d-lg-flex align-items-center justify-content-end">
                                    <div className="nav-action-elements">
                                        <ul>
                                            <li>
                                                <Link to="/login">
                                                    <button type="button" className="ghost-btn" data-toggle="modal" data-target="#myModal">
                                                        <i className="flaticon-profile"></i>Login
                                                    </button>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <a href="add-listing.html" className="ghost-btn"><i className="fas fa-plus"></i>ADD LISTING</a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header
