import React from 'react';

export default function AddEditDelCard(props) {
    return(
        <div className="container-buttons">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-4" onClick={() => {alert("Hello from here")}}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-plus-square fa-3x p-4"></i>
                    </div>
                </div>    

                <div className="col-sm-4" onClick={() => {alert("Hello from here")}}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-edit fa-3x p-4"></i>
                    </div>
                </div>

                <div className="col-sm-4" onClick={() => {alert("Hello from here")}}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-trash fa-3x p-4"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}