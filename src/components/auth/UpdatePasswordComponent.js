import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

import { changePassword, verifyEmailTofetchUserAndUpdatePassword } from '../../redux/_actions';

import TitleComponent from '../TitleComponent';
import Loading from '../LoadingComponent';
import Header from '../HeaderComponent';

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    verifyEmailTofetchUser: (token) => verifyEmailTofetchUserAndUpdatePassword(token),
    resetUpdatePasswordForm: () => (actions.reset('updatePasswordForm')),
    updatePassword: (password) => changePassword(password),
};

class UpdatePassword extends Component {
    constructor (props){
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            token: this.props.token.split(":")[1],
            requestPassword: false,
            touched: {
                password: false,
                confirmPassword: false,
            }
        }
    }

    componentDidMount() {
        this.props.verifyEmailTofetchUser(this.state.token)
    }

    handleSubmit(value) {
        this.setState({
            requestPassword: true
        })
        const userId = this.props.auth.payload.sendUpdatePassword.user._id;
        this.props.updatePassword(userId, value.password);
        this.props.resetUpdatePasswordForm();
    }

    render() {
        const required = val => val && val.length;
        const validPassword = val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/i.test(val);
        const passwordsMatch = (password, confirmPassword) => password === confirmPassword;

        const title = 'Update Password';
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
                        <div className="card rounded p-5">
                            <Row >
                                <Col className="payload-message text-center mt-3">      
                                    {
                                        this.props.auth.sendUpdatePassword === false ? 
                                            <h4>{ this.props.auth.payload.sendUpdatePasswordError.message }</h4> :
                                            <div> 
                                                <Form 
                                                    model="updatePasswordForm" 
                                                    validators={{
                                                        '': {
                                                        // Form-level validator
                                                            passwordsMatch: (vals) => passwordsMatch(vals.password, vals.confirmPassword),
                                                        },
                                                        // Field-level validators
                                                        password: { required, validPassword },
                                                        confirmPassword: { required },
                                                    }}
                                                    onSubmit={values => this.handleSubmit(values)}>
                                                    
                                                    <Row className="form-group">
                                                        <Col >
                                                        <Control type="password" model=".password" id="password" name="password"
                                                                placeholder="Password"
                                                                className="form-control"
                                                            />
                                                            <Errors
                                                                className="text-danger"
                                                                model=".password"
                                                                show="touched"
                                                                component="div"
                                                                messages={{
                                                                    required: 'Required',
                                                                    validPassword: 'Must be more than 8 and less than 12 characters and includes lower and capital letter and a numeric digit'
                                                                }}
                                                            />
                                                        </Col>
                                                    </Row>

                                                    <Row className="form-group">
                                                        <Col >
                                                            <Control type="password" model=".confirmPassword" id="confirmPassword" name="confirmPassword"
                                                                placeholder="Confirm Password"
                                                                className="form-control"
                                                            />
                                                            <Errors
                                                                className="text-danger"
                                                                model=".confirmPassword"
                                                                show="touched"
                                                                component="div"
                                                                messages={{
                                                                    required: 'Required',
                                                                }}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Row className="form-group text-center">
                                                        <Col >
                                                            <Button className="btn-warning btn-lg mt-3" type="submit"> Change Password </Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                
                                                <Row >
                                                    <Col className="payload-message text-center mt-3">      
                                                        {
                                                            this.state.requestPassword && this.props.auth.isLoading ? <Loading/> :
                                                            this.state.requestPassword && this.props.auth.resetPassword === false ? <h4>{ this.props.auth.payload.resetError.message }</h4> :
                                                            this.state.requestPassword && this.props.auth.resetPassword ? <h4>{ this.props.auth.payload.reset.message }</h4> :
                                                            <div></div>
                                                        }
                                                    </Col>
                                                </Row>
                                            </div>
                                    }
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePassword));