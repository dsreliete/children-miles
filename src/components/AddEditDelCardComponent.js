import React from 'react';

export default function AddEditDelCard(props) {
    return(
        <div className="m-5">
            <h1><i className="fa fa-user fa-1x mr-2">Children</i></h1>
            <hr/>
            <div className="card-deck justify-content-center align-items-center mt-4">
                <div onClick={() => {alert("Hello from here")}}>
                    <div class="card border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-plus-square fa-5x p-5"></i>
                    </div>
                </div>    

                <div onClick={() => {alert("Hello from here")}}>
                    <div class="card border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-edit fa-5x p-5"></i>
                    </div>
                </div>

                <div onClick={() => {alert("Hello from here")}}>
                    <div class="card border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-trash fa-5x p-5"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}