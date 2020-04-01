import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import TitleComponent from '../TitleComponent';
import { Loading } from '../LoadingComponent';
import { signUp } from '../../redux/_actions';

const mapStateToProps = state => {
    return {
        signup: state.signup,
    };
};

const mapDispatchToProps = {
    resetSignupForm: () => (actions.reset('signupForm')),
    postSignup: (user) => (signUp(user))

};

class Signup extends Component {
    constructor (props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            email:'',
            confirmEmail: '',
            touched: {
                username: false,
                password: false,
                confirmPassword: false,
                firstname: false,
                lastname: false,
                email: false,
                confirmEmail: false,
            }
        }
    }

    handleSubmit(values) {
        this.props.postSignup(values);
        this.props.resetSignupForm();
    }

    render() {
        const required = val => val && val.length;
        const maxLength = len => val => !val || (val.length <= len);
        const minLength = len => val => val && (val.length >= len);
        const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        const validPassword = val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/i.test(val);
        const passwordsMatch = (password, confirmPassword) => password === confirmPassword;
        const emailMatch = (email, confirmEmail) => email === confirmEmail;
        const title = 'Registre-se';
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
                            <Form 
                                model="signupForm" 
                                validators={{
                                    '': {
                                    // Form-level validator
                                        passwordsMatch: (vals) => passwordsMatch(vals.password, vals.confirmPassword),
                                        emailMatch: (vals) => emailMatch(vals.email, vals.confirmEmail)
                                    },
                                    // Field-level validators
                                    password: { required, validPassword },
                                    confirmPassword: { required },
                                    email: { required, validEmail },
                                    confirmEmail: { required },
                                    lastname: { required, minLength: minLength(2), maxLength: maxLength(25) },
                                    firstname: { required, minLength: minLength(2), maxLength: maxLength(25) },
                                    username: { required, minLength: minLength(2), maxLength: maxLength(25) }
                                }}
                                onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col >
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="Username"
                                            className="form-control"
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                
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

                                <Row className="form-group">
                                    <Col >
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col >
                                        <Control.text model=".lastname" id="lastname" name="lastname"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 25 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col >
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col >
                                        <Control.text model=".confirmEmail" id="confirmEmail" name="confirmEmail"
                                            placeholder="Confirm Email"
                                            className="form-control"
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".confirmEmail"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                emailMatch: 'Deve ser igual senha anterior!'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                
                                <Row className="form-group text-center">
                                    <Col >
                                        <Button className="btn-warning btn-lg mt-3" type="submit"> Send </Button>
                                    </Col>
                                </Row>
                            </Form>
                            
                            <Row >
                                <Col className="payload-message text-center mt-3">      
                                    {
                                        this.props.signup.isLoading ? <Loading/> :
                                        this.props.signup.error ? <h4>{ this.props.signup.payload.signupError.message }</h4> :
                                        <div></div>
                                    }
                                </Col>
                            </Row>

                            <Row >
                                <Col className="text-center mt-3">
                                    <h4 className="footer-link-label">Already signed up?</h4>
                                    <Link to="/signin" className="footer-link"><h5>Click here to sign in</h5></Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));