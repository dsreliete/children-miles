import React from 'react';

export default function ChildrenItem(props) {
    const child = props.child;
    const imageSrc = child.gender === "female" ? "assets/images/maria.jpg" : "assets/images/joao.jpg"
    return(
        <div className="col m-3">
            <div className="card p-3">
                <div className="media">
                    <img className="img" src={imageSrc} alt="child" />
                    <div className="media-body ml-4 align-self-center">
                        <p>{child.name}</p>
                        <p>{child.birthDate.toISOString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}