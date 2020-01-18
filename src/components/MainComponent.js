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
            showComponent: false,
            child: { id: 0, name: '', gender: '', birthDate: '' }
        };
    }

    handleShowComponent = () => {
        this.setState({
            showComponent: true
        })
    }

    handleHideComponent = () => {
        this.setState({
            showComponent: false
        })
    }

    handleAddChildrenToList = (child) => {
        this.setState({
            childrenList: [...this.state.childrenList, child] 
        })
    }

    handleEditChildren = (editedChild) => {
        const editedList = this.state.childrenList.map(
            child => child.id === editedChild.id ? editedChild : child)
        this.setState({
            childrenList: editedList 
        })
    }

    render(){
        return(
            <div>
                <Header />
                <ChildrenList
                    showComponent={ this.handleShowComponent }
                    childrenList={ this.state.childrenList }
                    handleEditChildren={ this.handleEditChildren }
                />
                { this.state.showComponent ?
                    <ChildrenAddComponent
                        showComponent={ this.handleShowComponent }
                        hideComponent={ this.handleHideComponent }
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