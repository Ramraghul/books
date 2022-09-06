import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import Sidenav from './Sidenav'


function Portal() {
  return (
    <>
        <div id="page-top">
          <div id="wrapper">
            <Sidenav></Sidenav>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Nav></Nav>
                <div className="container-fluid">
                  <Outlet/>
                </div>
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
    </>
  )
}

export default Portal