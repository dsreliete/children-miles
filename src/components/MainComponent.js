import React, { Component } from 'react';
import Header from './HeaderComponent';
import CardBtnControlComponent from './CardButtonControlComponent';
import ChildrenList from './ChildrenListComponent';
import {childrenArray} from '../shared/childrenArray';
/* Customized from: https://github.com/gauravchl/react-simple-sidenav */
class Main extends Component {

    render(){
        return(
            <div>
                <Header />
                <CardBtnControlComponent />
                <ChildrenList childrenList={childrenArray} />
                
            </div>
        );
    }
}

export default Main;