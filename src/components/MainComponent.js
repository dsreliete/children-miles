import React, { Component } from 'react';
import Header from './HeaderComponent';
import ChildrenList from './ChildrenListComponent';
import ChildrenAddComponent from './ChildrenAddComponent';
// import {childrenArray} from '../shared/childrenArray';

class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            childrenList: [], 
            addComponent: false,
            child: { id: 0, name: '', gender: '', birthDate: '' }
        };
    }

    handleAddComponent = () => {
        this.setState({
            addComponent: true
        })
    }

    handleAddChildrenToList = child => {
        console.log(child)
        this.setState({
            childrenList: [...this.state.childrenList, child]
        })
    }

    render(){
        return(
            <div>
                <Header />
                <ChildrenList
                    showAddComponent={ this.handleAddComponent }
                    childrenList={ this.state.childrenList }
                />
                <ChildrenAddComponent 
                    show={this.state.addComponent}
                    handleAddChildrenToList={this.handleAddChildrenToList}
                />
            </div>     
        );
    }
}

export default Main;