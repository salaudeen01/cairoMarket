import React from 'react'

const Category = () => {
    return (
        <section className="category-wrap-layout1 padding-top-9p6 padding-bottom-7 overlay-dark-70 parallaxie bg--dark"
                    data-bg-image="/assets/img/figure/figure2.jpg" style={{backgroundImage:`url("/assets/img/figure/figure2.jpg")`}}>
            <div className="container">
                <div className="section-heading heading-light heading-center">
                    <div className="item-sub-title">Explore some of the best place by categories</div>
                    <h2 className="item-title">What are you interested in?</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-earth"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Destination</a></h3>
                            <div className="listing-number">40 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-supermarket"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Shopping</a></h3>
                            <div className="listing-number">25 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-chef"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Restaurants</a></h3>
                            <div className="listing-number">30 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-musical-note"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Nightlife</a></h3>
                            <div className="listing-number">09 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-coffee-cup"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Bar &amp; Cafe</a></h3>
                            <div className="listing-number">15 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-bed"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Hotel</a></h3>
                            <div className="listing-number">20 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-spa"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Beauty &amp; Spa</a></h3>
                            <div className="listing-number">06 Listings</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="category-box-layout1">
                            <div className="item-icon">
                                <i className="flaticon-dish"></i>
                            </div>
                            <h3 className="item-title"><a href="#">Food &amp; Drink</a></h3>
                            <div className="listing-number">11 Listings</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
