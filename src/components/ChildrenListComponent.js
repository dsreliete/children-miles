import React from 'react';
import { Card } from 'reactstrap';


export default function ChildrenList(props) {
    return(
            <div className="container-wrapper">
                <div className="row">
                    <div className="col-sm-12 mb-5">
                        <h1><i className="fa fa-user fa-1x mr-3"></i>Children</h1>
                        <hr/>
                    </div>
                </div>       
                <div class="row justify-content-center">
                    <div className="col-md-6 mb-3">
                        <Card className="p-4">
                            <div className="media">
                                <img className="img" src="assets/images/joao.jpg" alt="child" />
                                <div className="media-body ml-4 align-self-center">
                                    <h4>Sheldon Cooper</h4>
                                    <h6>6 anos</h6>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className="p-4">
                            <div className="media">
                                <img className="img" src="assets/images/maria.jpg" alt="child" />
                                <div className="media-body ml-4 align-self-center">
                                    <h4>Amy Farah Fowler</h4>
                                    <h6>11 anos</h6>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
    );
}