import React from 'react';

export default function AddEditDelBtnCard(props) {

    return(
        <div className="container-buttons">
            <div className="row">
                <div className="col-sm-12 mb-5">
                    <h1><i className="fa fa-user fa-1x mr-3"></i>Children</h1>
                    <hr/>
                </div>
            </div>       
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3" onClick={props.handleAddBtnClick}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-plus-square fa-3x p-4"></i>
                    </div>
                </div>    

                <div className="col-sm-3" onClick={props.handleEditBtnClick}> 
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-edit fa-3x p-4"></i>
                    </div>
                </div>

                <div className="col-sm-3" onClick={props.handleDelBtnClick}>
                    <div className="card card-button border-success text-center d-flex flex-column justify-content-center">
                        <i className="fa fa-trash fa-3x p-4"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
