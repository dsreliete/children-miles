import React from 'react';

export default function TitleComponent(props) {

    return (
        <div className="col-sm-12 mb-5 title-container">
            <h3><i className={props.iconLeft}></i>{props.title}</h3>
            <i className={props.iconRight} onClick={props.showHideComponent}></i>
            <hr className="hr-title"/>
        </div>
    );
}