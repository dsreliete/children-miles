import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TitleComponent from '../TitleComponent';
import { Loading } from '../LoadingComponent';


function SignupVerify(props) {

    // pegar os dados que vem de props pelo token 

    const title = "Verificação de email";
    const iconLeft = "fa fa-registered fa-1x mr-3"
    return(
        <div className="container-component">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <TitleComponent 
                            title={title}
                            iconLeft={iconLeft}
                        />
                        <div className="card rounded p-5">
                            <p>Signup Verify Email</p>
                        </div>
                    </div>    
            </div>
        </div>
    );
}

export default SignupVerify;