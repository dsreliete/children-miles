import React, {Component} from 'react';
// import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import TitleComponent from './TitleComponent';
import ChildrenListEmpty from './ChildrenListEmptyComponent';
export default class ChildrenDelComponent extends Component {

    render() {
        const title = "Delete Child";
        const action = "delete"

        return (
            <div className="container-wrapper">
                <div className="row">
                    <TitleComponent title={title} />
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