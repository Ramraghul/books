import React from "react";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-danger text-light topbar mb-4 static-top shadow">
                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                >
                    <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">

                        <label>WELCOME TO ROBOT BOY LIBRARY</label>

                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">


                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="userDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="mr-2 d-none d-lg-inline  text-light small">
                                Raghul(Librariann)
                            </span>
                            <img
                                className="img-profile rounded-circle"
                                src="img/undraw_profile.svg"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
