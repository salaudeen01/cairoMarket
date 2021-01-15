import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from './Banner'
import Listbg from './Listbg'

const index = () => {
    return (
        <div>
            <Header color="black" />
            <Banner />
            <Listbg />
            <Footer />
        </div>
    )
}

export default index
