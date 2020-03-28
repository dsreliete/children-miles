import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <NavbarBrand className="ml-5" href="/"><img src="/assets/images/logoMilhas.png" width="250" alt="Milhas Infantis logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem right>
                                    <NavLink className="nav-link text-white font-weight-bolder mr-5" to="/signin">
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem right>
                                    <NavLink className="nav-link text-white font-weight-bolder mr-5" to="/signup">
                                        Registrar-se
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;