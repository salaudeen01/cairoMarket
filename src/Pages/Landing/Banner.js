import React from 'react'

const Banner = () => {
    return (
        <section className="main-banner-wrap-layout1 bg-common overlay-dark-30 bg--gradient-top-30" style={{backgroundImage:`url("/assets/img/figure/site-main-figure1.jpg")`}} data-bg-image="/assets/img/figure/site-main-figure1.jpg">
            <div className="container">
                <div className="main-banner-box-layout1">
                    <p className="item-sub-title">Discover &amp; connect with great places around the world</p>
                    <h1 className="item-title">Let’s Discover This City</h1>
                    <form id="category-search-form" className="category-search-form">
                        <ul className="form-items">
                            <li>
                                <div className="input-group stylish-input-group">
                                    <input type="text" placeholder="What are you looking for?" className="form-control"
                                        name="website" id="form-website" data-error="Search text required" required />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <i className="flaticon-search"></i>
                                        </button>
                                    </span>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </li>
                            <li>
                                <div className="input-group stylish-input-group">
                                    <input type="email" placeholder="All Categories" className="form-control" name="email"
                                        id="form-email" data-error="Category name is required" required />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <i className="flaticon-placeholder"></i>
                                        </button>
                                    </span>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </li>
                            <li>
                                <div className="form-group mb-0">
                                    <button type="submit" className="item-btn">Search</button>
                                </div>
                            </li>
                        </ul>
                    </form>
                    <ul className="item-ctg">
                        <li>
                            <a className="item-icon" href="listing-grid-view1.html"><i className="flaticon-chef"></i></a>
                            <a href="listing-grid-view1.html" className="ctg-title">Restaurant</a>
                        </li>
                        <li>
                            <a className="item-icon" href="listing-grid-view1.html"><i className="flaticon-dish"></i></a>
                            <a href="listing-grid-view1.html" className="ctg-title">Food</a>
                        </li>
                        <li>
                            <a className="item-icon" href="listing-grid-view1.html"><i className="flaticon-supermarket"></i></a>
                            <a href="listing-grid-view1.html" className="ctg-title">Shoppping</a>
                        </li>
                        <li>
                            <a className="item-icon" href="listing-grid-view1.html"><i className="flaticon-musical-note"></i></a>
                            <a href="listing-grid-view1.html" className="ctg-title">Nightclub</a>
                        </li>
                        <li>
                            <a className="item-icon" href="listing-grid-view1.html"><i className="flaticon-coffee-cup"></i></a>
                            <a href="listing-grid-view1.html" className="ctg-title">Coffee Bar</a>
                        </li>
                        <li>
                            <a className="item-icon" href="listing-grid-view1.html"><i className="flaticon-hotel"></i></a>
                            <a href="listing-grid-view1.html" className="ctg-title">Hotel</a>
                        </li>
                        <li className="d-none d-lg-block">
                            <p>Or Browse The Highlights</p>
                            <div className="item-img">
                                <img src="/assets/img/figure/arrow.png" alt="Arrow" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner
