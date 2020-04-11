import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { resendEmailVerification, cancelComponents} from '../../redux/_actions';

import TitleComponent from '../TitleComponent';
import ResendEmailMessageButtonComponent from './ResendEmailMessageButtonComponent';
import Loading from '../LoadingComponent';
import Header from '../HeaderComponent';


const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    postResendEmailVerification: (email) => (resendEmailVerification(email)),
    cancelComponents: () => cancelComponents()
};


class ResendEmail extends Component {

    constructor (props){
        super(props);
        this.state = {
            resend: false,
            email: this.props.email.split(":")[1]
        }
    }

    componentWillUnmount(){
        this.props.cancelComponents()
    }

    handleResendEmail = () => {
        this.setState({
            resend: true,
        });
        
        this.props.postResendEmailVerification(this.state.email)
    }

    render() {
        const title = "Verificação de Email";
        const iconLeft = "fa fa-registered fa-1x mr-3";

        return(
            <>
            <Header />
            <div className="container-component">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <TitleComponent 
                            title={title}
                            iconLeft={iconLeft}
                        /> 
                        
                        <div className="card rounded text-center p-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                
                                {
                                    !this.state.resend && this.props.auth.signup && this.props.auth.payload.signup ?
                                        <h4 className="payload-message">{this.props.auth.payload.signup.message}</h4> 
                                    :
                                    <div></div> 
                                }
                                <ResendEmailMessageButtonComponent
                                    message={'Verifique se recebeu um email de verificação de conta. Caso não tenha recebido, tente pedir outro envio de email para verificação de conta!'}
                                    handleResendEmail={this.handleResendEmail}    
                                />
                                {
                                    
                                    this.state.resend && this.props.auth.isLoading ? <Loading/> :
                                    this.state.resend && this.props.auth.resend ? 
                                    <h5 className="payload-message my-3">{this.props.auth.payload.resend.message}</h5>
                                    :
                                    this.state.resend && !this.props.auth.resend ?
                                    <h5 className="payload-message my-3">{this.props.auth.payload.resendError.message}</h5> 
                                    :
                                    <div></div>
                                }    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResendEmail));