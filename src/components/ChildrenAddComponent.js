import React from 'react';
import TitleComponent from './TitleComponent';
import ChildrenForm from './ChildrenForm';

export default function ChildrenAddComponent(props) {
    
    if(!props.show) {
        return null;
    } 
    const title = "Add Child";
    return (
        <div className="container-wrapper">
            <div className="row">
                <TitleComponent title={title}/>
                    <div className="col-sm-12">
                        <ChildrenForm 
                            handleAddChildrenToList={props.handleAddChildrenToList}
                        />
                </div> 
            </div>
        </div>
    );
}