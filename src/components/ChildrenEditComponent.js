import React, {Component} from 'react';
import ChildrenListEmpty from './ChildrenListEmptyComponent';
import TitleComponent from './TitleComponent';
// import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

export default class ChildrenEditComponent extends Component {

    constructor(props){
        super(props);
        this.super = {

        }
    }

    render() {
        const title = "Edit Child";
        const action = "edit"
        return (
            <div className="container-wrapper">
                <div className="row">
                    <TitleComponent title={title}/>
                </div> 
                { this.props.childrenList.length === 0 ?
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <ChildrenListEmpty action={action}/>
                        </div>
                    </div>
                    :
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            
                        </div>
                    </div>
                }
            </div>   
        );
    }
}

