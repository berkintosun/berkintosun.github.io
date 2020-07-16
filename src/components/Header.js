import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between">
            <a className="navbar-brand" href="#">Berkin Tosun</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{flexGrow:0}}>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#adventure">Adventure</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#ideas">Ideas</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;