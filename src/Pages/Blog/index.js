import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from './Banner'
import Listbg from './Listbg'

const index = () => {
    return (
        <div>
            <a href="#wrapper" data-type="section-switch" className="scrollup">
                <i className="fas fa-angle-double-up"></i>
            </a>
            <div id="wrapper" className="wrapper">
                <Header />
                <Banner />
                <Listbg />
                <Footer />
            </div>
        </div>
    )
}

export default index
