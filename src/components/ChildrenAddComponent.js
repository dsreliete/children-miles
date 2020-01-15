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
            <TitleComponent title={title}/>     
            <div className="row justify-content-center">
                <div className="col m-3">
                    <ChildrenForm 
                        handleAddChildrenToList={props.handleAddChildrenToList}
                    />
                </div>
            </div>
        </div>
    );
}