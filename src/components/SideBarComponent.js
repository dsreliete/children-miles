import React, { Component } from 'react';
import SideNav, {MenuIcon} from 'react-simple-sidenav';

export default class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNav : false
        };
    }
    render() {
        return(
            <div>
                <MenuIcon onClick={() => this.setState({showNav: true})}/>

                <SideNav
                    showNav = {this.state.showNav}
                    onHideNav = {() => this.setState({showNav: false})}
                    title          =  "Hello World"
                    items          =  {['home', 'services', 'about', 'contact']}
                    titleStyle     =  {{backgroundColor: '#4CAF50'}}
                    itemStyle      =  {{backgroundColor: '#fff'}}
                    itemHoverStyle =  {{backgroundColor: '#CDDC39'}} />
            </div>
            )
        }
}