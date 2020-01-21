import React from 'react';
import TitleComponent from '../TitleComponent';
import ChildrenForm from './ChildrenForm';

export default function ChildrenEditComponent(props) {
    
    const title = "Edit Child";
    return (
        <div className="container-wrapper">
            <div className="row">
                <TitleComponent title={ title }/>
                    <div className="col">
                        <ChildrenForm
                            child={ props.child }
                            showComponent={ props.showComponent }
                            hideComponent={ props.hideComponent }
                            handleAddChildrenToList={ props.handleAddChildrenToList }
                        />
                </div> 
            </div>
        </div>
    );
}