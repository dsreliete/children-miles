import React, { Component } from 'react';
import Header from './HeaderComponent';
import CardBtnControlComponent from './CardButtonControlComponent';
import ChildrenList from './ChildrenListComponent';
/* Customized from: https://github.com/gauravchl/react-simple-sidenav */
class Main extends Component {
    state = {
        childrenList: []
    };

    handleAddChildrenToList = child => {
        this.setState({
            childrenList: [...this.state.childrenList, child]
        });
    }

    handleDeleteChildrenFromList = index => {
        const { childrenList } = this.state;
        this.setState({
            childrenList: childrenList.filter((child, i) => { 
                return i !== index;
            })
        });
    }

    render(){
        return(
            <div>
                <Header />
                <CardBtnControlComponent 
                    childrenList={this.state.childrenList}
                    handleAddChildrenToList={this.handleAddChildrenToList}
                    handleDeleteChildrenFromList={this.handleDeleteChildrenFromList}
                />
                <ChildrenList childrenList={this.state.childrenList} />
                
            </div>
        );
    }
}

export default Main;