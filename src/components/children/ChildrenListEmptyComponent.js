import React from 'react';

export default function ChildrenListEmpty(props) {
    return(
        <div className="row justify-content-center">
            <h4>There is no child to {props.action}</h4>
        </div>
    );
}