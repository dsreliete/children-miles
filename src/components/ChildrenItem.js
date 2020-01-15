import React from 'react';

export default function ChildrenItem(props) {
    const child = props.child;
    const imageSrc = child.gender === "female" ? "assets/images/maria.jpg" : "assets/images/joao.jpg"
    return(
        <div className="col mb-3">
            <div className="card p-4">
                <div className="media">
                    <img className="img" src={imageSrc} alt="child" />
                    <div className="media-body ml-4 align-self-center">
                        <h4>{child.name}</h4>
                        <h5>{child.birthDate.toISOString()}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}