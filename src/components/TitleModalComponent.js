import React from 'react';

export default function TitleModalComponent(props) {

    return (
        <div className="col title-container">
            <h3><i className="fa fa-user fa-1x mr-3"></i>{props.title}</h3>
            <i className={props.icon} onClick={props.showComponent}></i>
        </div>
    );
}