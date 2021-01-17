import React from 'react'
import Header from '../../Components/Header'
import event4 from '../../Assets/event4.jpg'
import event5 from '../../Assets/event5.jpg'
import event6 from '../../Assets/event6.jpg'
import event7 from '../../Assets/event7.jpg'
import event8 from '../../Assets/event8.jpg'
import featuredevent1 from '../../Assets/featuredevent1.jpg'
import featuredevent2 from '../../Assets/featuredevent2.jpg'
import featuredevent3 from '../../Assets/featuredevent3.jpg'
import featuredevent4 from '../../Assets/featuredevent4.jpg'
import sidebarfigure from '../../Assets/sidebarfigure.jpg'
import Footer from '../../Components/Footer'



const event = () => {
    return (
        <div>
            <Header color="black" />
             {/* Inne Page Banner Area Start Here  */}
        <section className="inner-page-banner bg-common inner-page-top-margin overlay-dark-40" data-bg-image="img/figure/inner-page-banner1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1>Our All Events</h1>
                            <ul>
                                <li>
                                    <a href="/landing">Home</a>
                                </li>
                                <li>All Events</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/* Inne Page Banner Area End Here  */}
          {/* Event Area Start Here  */}
        <section className="event-wrap-layout3 padding-top-6 padding-bottom-7 bg--accent">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="filter-box-layout1">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="d-none d-xl-block">Search Your Nearest Event?</label>
                                    <div className="input-group stylish-input-group">
                                        <input type="text" placeholder="Cafe, shoppingmall, beauty &amp; spa ..." className="form-control"
                                            name="website" id="form-website" data-error="Search text required" required />
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="d-none d-xl-block">Location</label>
                                    <div className="input-group stylish-input-group">
                                        <input type="email" placeholder="Type here city or locaion" className="form-control"
                                            name="email" id="form-email" data-error="Category name is required"
                                            required />
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                <i className="flaticon-placeholder"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <i className="far fa-calendar-alt"></i>
                                        <input type="text" className="form-control rt-date" placeholder="Date" name="date"
                                            id="form-date" data-error="Subject field is required" required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <i className="far fa-clock"></i>
                                        <input type="text" className="form-control rt-time" placeholder="Time" name="time"
                                            id="form-time" data-error="Subject field is required" required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <select className="select2 form-control" name="filter-by">
                                            <option value="0">Sort By</option>
                                            <option value="1">Newest</option>
                                            <option value="2">Top Sell</option>
                                            <option value="3">Top Rated</option>
                                            <option value="4">Price High</option>
                                            <option value="5">Low Price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-result-box">Showing 0 - 5 of 62</div>
                        <div className="row">
                            <div className="col-12">
                                <div className="event-box-layout3">
                                    <div className="media media-none--lg">
                                        <div className="item-thumb">
                                            <a href="#"><img src={event4} alt="Event" /></a>
                                            <div className="item-status active">Open</div>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="item-title"><a href="#">Chicago Food Festival</a></h3>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>15 Oct, 2018</li>
                                                    <li><i className="fas fa-map-marker-alt"></i>Chicago, 58 street, USA</li>
                                                    <li><i className="fas fa-clock"></i>10.00 am - 12.00 pm</li>
                                                </ul>
                                            </div>
                                            <p>Aimply dummy text offer the printing and types etting industry remarea.</p>
                                            <div className="hosted-info">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>Hosted By <span>Keron Roy</span></li>
                                                    <li>
                                                        <a href="#">1220<i className="fas fa-user"></i></a>
                                                        <a href="#">320<i className="fas fa-heart"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="event-box-layout3">
                                    <div className="media media-none--lg">
                                        <div className="item-thumb">
                                            <a href="#"><img src={event5} alt="Event" /></a>
                                            <div className="item-status active">Open</div>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="item-title"><a href="#">Legendary Music World</a></h3>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>15 Oct, 2018</li>
                                                    <li><i className="fas fa-map-marker-alt"></i>Chicago, 58 street, USA</li>
                                                    <li><i className="fas fa-clock"></i>10.00 am - 12.00 pm</li>
                                                </ul>
                                            </div>
                                            <p>Aimply dummy text offer the printing and types etting industry remarea.</p>
                                            <div className="hosted-info">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>Hosted By <span>Keron Roy</span></li>
                                                    <li>
                                                        <a href="#">1220<i className="fas fa-user"></i></a>
                                                        <a href="#">320<i className="fas fa-heart"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="event-box-layout3">
                                    <div className="media media-none--lg">
                                        <div className="item-thumb">
                                            <a href="#"><img src={event6} alt="Event" /></a>
                                            <div className="item-status active">Open</div>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="item-title"><a href="#">Morocco Grand Hotel</a></h3>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>15 Oct, 2018</li>
                                                    <li><i className="fas fa-map-marker-alt"></i>Chicago, 58 street, USA</li>
                                                    <li><i className="fas fa-clock"></i>10.00 am - 12.00 pm</li>
                                                </ul>
                                            </div>
                                            <p>Aimply dummy text offer the printing and types etting industry remarea.</p>
                                            <div className="hosted-info">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>Hosted By <span>Keron Roy</span></li>
                                                    <li>
                                                        <a href="#">1220<i className="fas fa-user"></i></a>
                                                        <a href="#">320<i className="fas fa-heart"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="event-box-layout3">
                                    <div className="media media-none--lg">
                                        <div className="item-thumb">
                                            <a href="#"><img src={event7} alt="Event" /></a>
                                            <div className="item-status active">Open</div>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="item-title"><a href="#">Aroowmex Restaurant</a></h3>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>15 Oct, 2018</li>
                                                    <li><i className="fas fa-map-marker-alt"></i>Chicago, 58 street, USA</li>
                                                    <li><i className="fas fa-clock"></i>10.00 am - 12.00 pm</li>
                                                </ul>
                                            </div>
                                            <p>Aimply dummy text offer the printing and types etting industry remarea.</p>
                                            <div className="hosted-info">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>Hosted By <span>Keron Roy</span></li>
                                                    <li>
                                                        <a href="#">1220<i className="fas fa-user"></i></a>
                                                        <a href="#">320<i className="fas fa-heart"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="event-box-layout3">
                                    <div className="media media-none--lg">
                                        <div className="item-thumb">
                                            <a href="#"><img src={event8} alt="Event" /></a>
                                            <div className="item-status active">Open</div>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="item-title"><a href="#">Yougner Star Workshop</a></h3>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>15 Oct, 2018</li>
                                                    <li><i className="fas fa-map-marker-alt"></i>Chicago, 58 street, USA</li>
                                                    <li><i className="fas fa-clock"></i>10.00 am - 12.00 pm</li>
                                                </ul>
                                            </div>
                                            <p>Aimply dummy text offer the printing and types etting industry remarea.</p>
                                            <div className="hosted-info">
                                                <ul>
                                                    <li><i className="fas fa-user"></i>Hosted By <span>Keron Roy</span></li>
                                                    <li>
                                                        <a href="#">1220<i className="fas fa-user"></i></a>
                                                        <a href="#">320<i className="fas fa-heart"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="pagination-layout1">
                            <li>
                                <a href="#"><i className="flaticon-back"></i></a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li>
                                <a href="#">6</a>
                            </li>
                            <li>
                                <a href="#">7</a>
                            </li>
                            <li>
                                <a href="#"><i className="flaticon-right-arrow"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                        <div className="widget widget-box-padding widget-new-rated">
                            <h3 className="widget-title">Featured Events</h3>
                            <ul className="block-list">
                                <li className="single-item">
                                    <div className="item-img">
                                        <a href="#"><img src={featuredevent1} alt="Post" /></a>
                                    </div>
                                    <div className="item-content">
                                        <h4 className="item-title"><a href="#">Shanghai Hotel</a></h4>
                                        <div className="item-place">China Town</div>
                                        <ul className="item-rating">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <div className="item-img">
                                        <a href="#"><img src={featuredevent2} alt="Post" /></a>
                                    </div>
                                    <div className="item-content">
                                        <h4 className="item-title"><a href="#">Shanghai Hotel</a></h4>
                                        <div className="item-place">China Town</div>
                                        <ul className="item-rating">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <div className="item-img">
                                        <a href="#"><img src={featuredevent3} alt="Post" /></a>
                                    </div>
                                    <div className="item-content">
                                        <h4 className="item-title"><a href="#">Shanghai Hotel</a></h4>
                                        <div className="item-place">China Town</div>
                                        <ul className="item-rating">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <div className="item-img">
                                        <a href="#"><img src={featuredevent4} alt="Post" /></a>
                                    </div>
                                    <div className="item-content">
                                        <h4 className="item-title"><a href="#">Shanghai Hotel</a></h4>
                                        <div className="item-place">China Town</div>
                                        <ul className="item-rating">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-poster widget-box-padding">
                            <div className="item-img">
                                <img src={sidebarfigure} alt="Poster" className="img-fluid" />
                            </div>
                        </div>
                        <div className="widget widget-contact-info">
                            <div className="bg-icon">
                                <i className="flaticon-phone-call"></i>
                            </div>
                            <h4 className="item-title">Need Any Information?</h4>
                            <p>Please Contact Our Experts</p>
                            <div className="contact-number">+123 895 000 963</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/* Event Area End Here  */}
         <Footer />
        </div>
    )
}
export default event
