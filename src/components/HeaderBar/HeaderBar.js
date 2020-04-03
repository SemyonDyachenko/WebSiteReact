import React from 'react';


class HeaderBar extends React.Component {
    
    render()
    {
        return(
            <div className="header-bar">
                <div className="logo"><img src="logo192.png" alt="logo.png"></img></div>
                <nav className="page-nav">
                    <ul className="nav-buttons">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="https://github.com/SemyonDyachenko">Projects</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default HeaderBar;