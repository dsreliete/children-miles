import React from 'react';
import TitleComponent from './TitleComponent';
import ChildrenForm from './ChildrenForm';

export default function ChildrenAddComponent(props) {
    
    const title = "Add Child";
    return (
        <div className="container-wrapper">
            <div className="row">
                <TitleComponent title={title}/>
                    <div className="col-sm-12">
                        <ChildrenForm
                            showAddComponent={ props.showAddComponent }
                            hideAddComponent={ props.hideAddComponent }
                            handleAddChildrenToList={ props.handleAddChildrenToList }
                        />
                </div> 
            </div>
        </div>
    );
}