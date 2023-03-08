import React from 'react'
import { Outlet } from 'react-router-dom'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

function Layout() {
  return (
    <>
        <Header/>
        <Background/>
        <Main/>
        <Footer/>
        <Outlet/>
    </>
  )
}

export default Layout