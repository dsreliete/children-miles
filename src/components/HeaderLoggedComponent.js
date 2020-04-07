import React, { Component }  from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class HeaderLogged extends Component {
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
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="media align-self-center">
                                    <div href="/"><img src="/assets/images/logo.png" height="230" width="150" alt="Milhas Infantis Logo" /></div>
                                    <div className="media-body align-self-center text-center">
                                        <h1>Família Martin</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md" className="justify-content-center">
                    <div className="navbar-container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg i-menu" /> Início
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/family">
                                        <i className="fa fa-list fa-lg i-menu" /> Família
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/child">
                                        <i className="fa fa-info fa-lg i-menu" /> Crianças
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/goals">
                                        <i className="fa fa-address-card fa-lg i-menu" /> Tarefas
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/penalties">
                                        <i className="fa fa-list fa-lg i-menu" /> Penalidades
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/awards">
                                        <i className="fa fa-list fa-lg i-menu" /> Prêmios
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/history">
                                        <i className="fa fa-info fa-lg i-menu" /> Histórico de Atividades
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/new-users">
                                        <i className="fa fa-info fa-lg i-menu" /> Novos usuários
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default HeaderLogged;