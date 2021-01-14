import React from 'react'
import den from './image/domli.png'

const Banner = () => {
    return (
           <section className="main-banner-wrap-layout1 bg-common overlay-dark-30 bg--gradient-top-30" style={{backgroundImage:`url("/assets/img/figure/site-main-figure1.jpg")`}} data-bg-image="/assets/img/figure/site-main-figure1.jpg">
        <div className="container">
                <div class="row">
                    <div class="col-8">
                        <div class="breadcrumbs-area">
                            <h1>Our Latest Blog Grid</h1>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
