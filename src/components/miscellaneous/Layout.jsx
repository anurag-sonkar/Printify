import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/Footer'
import Navbar from '../Navbar/Navbar'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout