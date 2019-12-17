import React, { Component } from 'react';
import Header from './HeaderComponent';
import AddEditDelCard from './AddEditDelCardComponent';
/* Customized from: https://github.com/gauravchl/react-simple-sidenav */
class Main extends Component {

    render(){
        return(
            <div>
                <Header />
                <AddEditDelCard />
            </div>
        );
    }
}

export default Main;