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
                        {/* <p>{child.birthDate.toISOString()}</p> */}
                        <p>{child.birthDate}</p>
                    </div>
                    <div className="col-2 justify-content-end align-self-center" onClick={() => editChild(child)}>
                        <i className="fa fa-edit fa-2x"></i>
                    </div>
                    <div className="col-2 justify-content-end align-self-center" onClick={() => deleteChild(child)}>
                        <i className="fa fa-trash fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

const editChild = (child) => {
    console.log("edit " + child.name)
}

const deleteChild = (child) => {
    console.log("delete " + child.name)
}