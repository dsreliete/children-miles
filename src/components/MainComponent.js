import React, { Component } from 'react';
import Header from './HeaderComponent';
import SideBar from './SideBarComponent';

class Main extends Component {

    render(){
        return(
            <div>
                <Header />
                <SideBar/>
            </div>
        );
    }
}

export default Main;