import React from 'react';

export default function TitleComponent (props) {
    return (
        <div className="col-sm-12 mb-5">
            <h1><i className="fa fa-user fa-1x mr-3"></i>{props.title}</h1>
            <hr/>
        </div>
    );
}