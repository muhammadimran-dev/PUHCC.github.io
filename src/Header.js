import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render()
    {
        return (
            <div>
                <div className="ui inverted menu">
                    <Link className="item" to="/"><h3>PU Health Centre</h3></Link>
                    <Link className="item" to="/register"><h3>Register</h3></Link>
    
                    <div className="right menu">
                        <Link className="item" to="/login"><h3>Admin Login</h3></Link>
                        <Link className="item" to="/about"><h3>About</h3></Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;