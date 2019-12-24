import React, {Component} from 'react';
import AddEditDelBtnCardComponent from './AddEditDelBtnCardComponent';
import ChildrenAddComponent from './ChildrenAddComponent';
import ChildrenEditComponent from './ChildrenEditComponent';
import ChildrenDelComponent from './ChildrenDelComponent';

const ADD_COMPONENT = 'AddChildCpnt';
const EDIT_COMPONENT = 'EditChildCpnt';
const DEL_COMPONENT = 'DelChildCpnt';

export default class CardButtonControlComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            renderComponent: '',
            hasComponentToRender: false,
        };

        this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
        this.handleEditBtnClick = this.handleEditBtnClick.bind(this);
        this.handleDelBtnClick = this.handleDelBtnClick.bind(this);
    }

    handleAddBtnClick(){
        this.setState({
            renderComponent: ADD_COMPONENT,
            hasComponentToRender: true
        })
    }

    handleEditBtnClick() {
        this.setState({
            renderComponent: EDIT_COMPONENT,
            hasComponentToRender: true
        })
    }

    handleDelBtnClick() {
        this.setState({
            renderComponent: DEL_COMPONENT,
            hasComponentToRender: true
        })
    }

    getComponentToRender(){
        const componentName = this.state.renderComponent;

        switch(componentName) {
            case ADD_COMPONENT:
                return <ChildrenAddComponent 
                            handleAddChildrenToList={this.props.handleAddChildrenToList}/>
            case EDIT_COMPONENT:
                return <ChildrenEditComponent 
                            childrenList={this.props.childrenList}
                            handleEditedChildrenToList={this.props.handleEditedChildrenToList}
                        />
            case DEL_COMPONENT:
                return <ChildrenDelComponent
                            childrenList={this.props.childrenList} 
                            handleDeleteChildrenFromList={this.props.handleDeleteChildrenFromList}
                        />
            default:
                return <div></div>
        }
    }

    render() {
        let component = this.getComponentToRender();
        const btnCardComponent = <AddEditDelBtnCardComponent
                                    handleAddBtnClick={this.handleAddBtnClick} 
                                    handleEditBtnClick={this.handleEditBtnClick} 
                                    handleDelBtnClick={this.handleDelBtnClick} />    
        return(
            <div>
                {this.state.hasComponentToRender ?  
                    <div>
                        {component}
                        {btnCardComponent}
                    </div> : 
                    <div>
                        {btnCardComponent}
                        {component}
                    </div>    
                }
            </div>
        );
    }
}