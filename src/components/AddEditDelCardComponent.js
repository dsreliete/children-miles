import React from 'react';

export default function AddEditDelCard(props) {
    return(
        <div className="m-5">
            <h1><i className="fa fa-user fa-1x mr-3"></i>Children</h1>
            <hr/>
            <div className="card-deck justify-content-center align-items-center mt-4">
                <div onClick={() => {alert("Hello from here")}}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-plus-square fa-4x p-5"></i>
                    </div>
                </div>    

                <div onClick={() => {alert("Hello from here")}}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-edit fa-4x p-5"></i>
                    </div>
                </div>

                <div onClick={() => {alert("Hello from here")}}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-trash fa-4x p-5"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}