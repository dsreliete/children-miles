import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TitleComponent from '../TitleComponent';
import { Loading } from '../LoadingComponent';
import { signUp } from '../../redux/_actions';

const mapStateToProps = state => {
    return {
        signup: state.signup
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
            firstname: '',
            lastname: '',
            email:'',
            touched: {
                username: false,
                password: false,
                firstname: '',
                lastname: '',
                email: false,
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
                            <Form model="signupForm" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col >
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="Username"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-warning"
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
                                            validators={{
                                                required,
                                                validPassword
                                            }}
                                        />
                                        <Errors
                                            className="text-warning"
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
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-warning"
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
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(25)
                                            }}
                                        />
                                        <Errors
                                            className="text-warning"
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
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-warning"
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
                                
                                <Row className="form-group text-center">
                                    <Col >
                                        <Button className="btn-lg mt-3" type="submit"> Send </Button>
                                    </Col>
                                </Row>
                            </Form>
                            
                            <Row >
                                <Col className="payload-message text-center mt-3">      
                                    {
                                        this.props.signup.isLoading ? <Loading/> :
                                        this.props.signup.error ? <h4>{this.props.signup.payload.result}</h4> :
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);