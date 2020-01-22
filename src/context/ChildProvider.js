import MilesContext from './MilesContext';
import React, {Component} from 'react';

export default class ChildProvider extends Component {

    state = {
        child: {
            childList : [{
                id: 1,
                name: "Sheldon Lee Cooper",
                birthDate: "01-25-2014",
                gender: "male"
        
            },
            {
                id: 2,
                name: "Amy Farah Fowler",
                birthDate: "06-25-2017",
                gender: "female"
            }],
            showComp : false
        }
    }

    handleShowComponent = () => {
        console.log("eliete")
        this.setState({ child: {...this.state.child, showComp: true } })
    }
    handleHideComponent = () => this.setState({ child: {...this.state.child, showComp: false } })
    handleAddChildrenToList = (child) => {
        console.log(child.name)
        child.id = this.state.child.childList.length + 1
        this.setState({
            child: {...this.state.child, childList: [...this.state.child.childList, child]}
        })
    }
    handleEditChildrenFromList = (editedChild) => {
        const editedList = this.state.child.childList.map(child => (child.id === editedChild.id ? editedChild : child))
        this.setState({ child: {...this.state.child, childList: editedList}})
    }
    handleDeleteChildrenFromList = (deletedChild) => {
        const editedList = this.state.child.childList.filter(child => child.id !== deletedChild.id)
        this.setState({ child: {...this.state.child, childList: editedList}})
    }

    render() {
        return (
            <MilesContext.Provider
                value={{
                    child: this.state.child,
                    handleShow : () => this.handleShowComponent(),
                    handleHide : () => this.handleHideComponent(),
                    handleAddChildrenToList : () => this.handleAddChildrenToList(),
                    handleEditChildrenFromList : () => this.handleEditChildrenFromList(),
                    handleDeleteChildrenFromList: () => this.handleDeleteChildrenFromList()
                    
                }}>
                {this.props.children}
            </MilesContext.Provider>
        );
    }

}