import React from 'react'
import Header from '../../Components/Header'
import event9 from '../../Assets/event9.jpg'
import comment1 from '../../Assets/comment1.jpg'
import comment2 from '../../Assets/comment2.jpg'
import follow from '../../Assets/follow.jpg'
import Footer from '../../Components/Footer'



const eventdetails = () =>{
    return(
        <div>
            <Header color="black"/>
             {/* Inne Page Banner Area Start Here  */}
            <section className="inner-page-banner bg-common inner-page-top-margin overlay-dark-40" data-bg-image="img/figure/inner-page-banner1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1>Single Event</h1>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="index.html">All Events</a>
                                </li>
                                <li>Chicago Food Festival</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/* Inne Page Banner Area End Here  */}
          {/* Event Area Start Here  */}
        <section className="single-event-wrap padding-top-6 padding-bottom-7 bg--accent">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-event-box">
                            <div className="single-event-main-thumb">
                                <img src={event9} alt="Event" />
                                <div id="countdown" className="countdown-layout1"></div>
                            </div>
                            <div className="single-event-content">
                                <h2 className="item-title">Chicago Food Festival</h2>
                                <ul className="entry-meta">
                                    <li className="icon-left"><a href="#"><i className="fas fa-user"></i>Hosted By <span>Keron
                                                Roy</span></a></li>
                                    <li className="icon-left"><a href="#"><i className="far fa-calendar-alt"></i>15 - 18 Oct,
                                            2018</a></li>
                                    <li className="icon-right"><a href="#">1220<i className="fas fa-users"></i></a></li>
                                    <li className="icon-right"><a href="#">320<i className="fas fa-heart"></i></a></li>
                                </ul>
                                <p>Aimply dummy text offer the printing and types etting industry remarea.simply dummy
                                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standar dear dummy text ever since thenknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            </div>
                            <div className="single-event-discussion">
                                <h3 className="inner-item-heading">Discussion</h3>
                                <form className="discussion-form-box">
                                    <div className="row gutters-15">
                                        <div className="col-md-6 form-group">
                                            <label>Name *</label>
                                            <input type="text" placeholder="" className="form-control" name="Phone" id="discussion-name"
                                                data-error="Phone field is required" required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>E-mail *</label>
                                            <input type="email" placeholder="" className="form-control" name="email" id="discussion-email"
                                                data-error="E-mail field is required" required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-12 form-group">
                                            <label>Discussion</label>
                                            <textarea placeholder="" className="textarea form-control" name="message" id="discussion-message"
                                                rows="7" cols="20" data-error="Message field is required" required></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-12 form-group margin-b-none">
                                            <button className="item-btn">Post Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="single-event-comment">
                                <a href="#" className="edit-comment" title="Edit"><i className="fas fa-ellipsis-h"></i></a>
                                <div className="entry-meta-layout1">
                                    <div className="entry-meta-thumb">
                                        <img src={comment1} alt="Post" />
                                    </div>
                                    <div className="entry-meta-content">
                                        <h4 className="entry-title">Mariay Zaman</h4>
                                        <div className="entry-date">October 26, 2018 </div>
                                    </div>
                                </div>
                                <p>Borem Ipsum is simply dummy text of the printing and type aee setting are industr
                                    year arey eorem Ipsum has is simple.</p>
                                <ul className="entry-meta-layout2">
                                    <li><a href="#"><i className="fas fa-thumbs-up"></i><span>15</span> Liked</a></li>
                                    <li><a href="#"><i className="fas fa-reply"></i><span>05</span> Shared</a></li>
                                </ul>
                                <div className="comment-box">
                                    <div className="item-icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <form id="comment-form" className="comment-form">
                                        <div className="form-group">
                                            <textarea placeholder="Type a message . . ." className="textarea form-control"
                                                name="message" id="form-message" rows="1" cols="20" data-error="Message field is required"
                                                required></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="single-event-comment">
                                <a href="#" className="edit-comment" title="Edit"><i className="fas fa-ellipsis-h"></i></a>
                                <div className="entry-meta-layout1">
                                    <div className="entry-meta-thumb">
                                        <img src={comment2} alt="Post" />
                                    </div>
                                    <div className="entry-meta-content">
                                        <h4 className="entry-title">Fahim Rahman</h4>
                                        <div className="entry-date">October 21, 2018 </div>
                                    </div>
                                </div>
                                <p>Borem Ipsum is simply dummy text of the printing and type aee setting are industr
                                    year arey eorem Ipsum has is simple.</p>
                                <ul className="entry-meta-layout2">
                                    <li><a href="#"><i className="fas fa-thumbs-up"></i><span>25</span> Liked</a></li>
                                    <li><a href="#"><i className="fas fa-reply"></i><span>19</span> Shared</a></li>
                                </ul>
                                <div className="comment-box">
                                    <div className="item-icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <form id="comment-form2" className="comment-form">
                                        <div className="form-group">
                                            <textarea placeholder="Type a message . . ." className="textarea form-control"
                                                name="message" id="form-message2" rows="1" cols="20" data-error="Message field is required"
                                                required></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                        <div className="widget widget-follow-us2 widget-box-padding">
                            <figure className="item-thumb"><img src={follow} alt="Figure" /></figure>
                            <h4 className="item-title">Julia Zosef</h4>
                            <div className="item-info">
                                <ul className="block-list">
                                    <li><i className="flaticon-user"></i>Admin</li>
                                    <li><i className="flaticon-phone-call"></i>+ 132 899 6330</li>
                                </ul>
                            </div>
                            <div className="social-info">
                                <ul className="block-list">
                                    <li>
                                        <div className="count-number counter" data-num="1290">1,290</div>
                                        <div className="count-title">Followers</div>
                                    </li>
                                    <li>
                                        <div className="count-number counter" data-num="20">20</div>
                                        <div className="count-title">Following</div>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="item-btn"><i className="fas fa-rss"></i>Follow Me</a>
                        </div>
                        <div className="widget widget-information widget-box-padding">
                            <h3 className="widget-title">Event Information</h3>
                            <ul className="block-list">
                                <li className="block-list-item"><i className="fas fa-map-marker-alt"></i>59 Street, Mk tower,
                                    Brooklyn</li>
                                <li className="block-list-item"><i className="fas fa-phone"></i>+ 132 899 6330</li>
                                <li className="block-list-item"><i className="far fa-clock"></i><span>Sat - Mon:</span> 09.00am
                                    - 10.00pm</li>
                                <li className="block-list-item"><i className="fas fa-globe"></i>www.restauant.com</li>
                                <li className="block-list-item"><i className="fas fa-share-alt"></i>
                                    <ul className="inline-list">
                                        <li className="inline-list-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="inline-list-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="inline-list-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="inline-list-item"><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li className="inline-list-item"><a href="#"><i className="fab fa-skype"></i></a></li>
                                        <li className="inline-list-item"><a href="#"><i className="fas fa-rss"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-join-now">
                            <a href="#" className="btn-fill">Join This Event Now</a>
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
export default eventdetails