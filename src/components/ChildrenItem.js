import React from 'react';

export default function ChildrenItem({child}) {
    const imageSrc = child.gender === "female" ? "assets/images/maria.jpg" : "assets/images/joao.jpg"
    return(
        <li key={child.id}>
            <div className="col mb-3">
                <div className="card p-5">
                    <div className="media">
                        <img className="img" src={imageSrc} alt="child" />
                        <div className="media-body ml-4 align-self-center">
                            <h4>{child.name}</h4>
                            <h6>{child.dtNasc}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}