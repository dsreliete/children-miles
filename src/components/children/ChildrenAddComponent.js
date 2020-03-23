import React from 'react';
import TitleComponent from '../TitleComponent';
import ChildrenForm from './ChildrenForm';

export default function ChildrenAddComponent(props) {
    
    const title = "Add Child";
    const icon = "fa fa-undo fa-2x justify-content-center mx-auto top-right"
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <TitleComponent 
                    title={title}
                    icon={icon}
                    showHideComponent={ props.hideComponent }
                />
                <div className="card rounded p-5">
                    <ChildrenForm
                        showComponent={ props.showComponent }
                        hideComponent={ props.hideComponent }
                        handleAddChildrenToList={ props.handleAddChildrenToList }
                    />
                </div>
            </div> 
        </div>
    );
}