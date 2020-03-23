import React from 'react';

export default function TitleComponent(props) {

    return (
        <div className="col-sm-12 mb-5 title-container">
            <h3><i className="fa fa-user fa-1x mr-3"></i>{props.title}</h3>
            <i className={props.icon} onClick={props.showHideComponent}></i>
            <hr className="hr"/>
        </div>
    );
}