import React from 'react'
import { Link } from 'react-router-dom'
const Innerban = () => {
    return (
            <header id="site-header" class="header-one">
            <div class="header-main header-sticky bg--dark">
                <div class="container-fluid">
                    <div class="mob-menu-open toggle-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <div class="row">
                        <div class="col-lg-2 col-12">
                        <div className="site-logo">
                                <a href="index.html" className="main-logo"><img src="/assets/img/logo.png" alt="Site Logo" /></a>
                                <a href="index.html" className="sticky-logo"><img src="/assets/img/sticky-logo.png" alt="Site Logo" /></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-7 col-12 possition-static">
                            <nav className="site-nav">
                                <ul className="site-menu">
                                    <li><Link to="/dashboard">Home</Link></li>
                                    <li><Link to="/events">Events</Link></li>
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
            
          </header>  
    )
}

export default Innerban
