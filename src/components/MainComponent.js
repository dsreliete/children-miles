import React, { Component } from 'react';
import Header from './HeaderComponent';
import ChildrenList from './ChildrenListComponent';
import ChildrenAddComponent from './ChildrenAddComponent';
import {childrenArray} from '../shared/childrenArray';
class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            childrenList: childrenArray, 
            addComponent: false,
            child: { id: 0, name: '', gender: '', birthDate: '' }
        };
    }

    handleAddComponent = () => {
        this.setState({
            addComponent: true
        })
    }

    handleHideComponent = () => {
        this.setState({
            addComponent: false
        })
    }

    handleAddChildrenToList = (child) => {
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
                {this.state.addComponent ?
                    <ChildrenAddComponent
                        showAddComponent={ this.handleAddComponent }
                        hideAddComponent={ this.handleHideComponent }
                        handleAddChildrenToList={ this.handleAddChildrenToList }
                    />
                    :
                    null
                }
            </div>     
        );
    }
}

export default Main;