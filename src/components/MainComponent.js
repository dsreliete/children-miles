import React, { Component } from 'react';
import Header from './HeaderComponent';
import AddEditDelCard from './AddEditDelCardComponent';
import ChildrenList from './ChildrenListComponent';
/* Customized from: https://github.com/gauravchl/react-simple-sidenav */
class Main extends Component {

    render(){
        return(
            <div>
                <Header />
                <ChildrenList />
                <AddEditDelCard />
            </div>
        );
    }
}

export default Main;