import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between">
            <a class="navbar-brand" href="#">Berkin Tosun</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{flexGrow:0}}>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Education</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;