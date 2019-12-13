import React, { Component }  from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    state = {
        showNav: false
    }

    render() {
        return (
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img className="mr-3" src="/assets/images/icon.png" height="30" width="30" alt="Child Miles"/>Milhas Infantis</NavbarBrand>
                    </div>
                </Navbar>
        );
    }
}

export default Header;