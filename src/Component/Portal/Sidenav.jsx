import React from 'react'
import { Link } from 'react-router-dom'


function Sidenav() {

    return (
        <>
            <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion" id="accordionSidebar">
            <div className="sidebar-heading mt-5">
                    Interface
                </div>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link className="nav-link" to={"/"}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>New Books Inward</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to={"Dashboard"} data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-laugh-wink"></i>
                        <span>All BOOKS</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        </>

    )
}

export default Sidenav
