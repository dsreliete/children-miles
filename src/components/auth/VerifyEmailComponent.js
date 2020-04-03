import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { verifyEmailTofetchUserAndAuth, resendEmailVerification } from '../../redux/_actions';

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
    verifyEmailTofetchUser: (token) => (verifyEmailTofetchUserAndAuth(token)),
    postResendEmailVerification: (email) => (resendEmailVerification(email))
};


class VerifyEmail extends Component {

    constructor (props){
        super(props);
        this.state = {
            resend: false,
            token: this.props.match.params.token
        }
    }

    componentDidMount() {
        this.props.verifyEmailTofetchUser(this.state.token)
    }

    handleResendEmail = () => {
        this.setState({
            resend: true,
        });
        const email = this.props.auth.signup.payload.verifyEmail.user.email;
        this.props.postResendEmailVerification(email)
    }

    render() {
        const title = "Ativação de conta";
        const iconLeft = "fa fa-registered fa-1x mr-3"
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
                                    !this.state.resend && this.props.auth.verify === false && 
                                    this.props.auth.payload.verifyEmail && this.props.auth.payload.verifyEmail.user ?
                                        <div>
                                            <h4 className="payload-message">{this.props.auth.payload.verifyEmail.message}</h4> 
                                            <ResendEmailMessageButtonComponent
                                                message={'Tente pedir outro envio de email para verificação de conta!'} 
                                                handleResendEmail={this.handleResendEmail}    
                                            />
                                        </div>
                                    :
                                    !this.state.resend && this.props.auth.verify === false && 
                                    this.props.auth.payload.verifyEmail  ?
                                        <h4 className="payload-message">{this.props.auth.payload.verifyEmail.message}</h4> 
                                    :
                                        <div></div> 
                                }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VerifyEmail));