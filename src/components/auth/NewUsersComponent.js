import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

import { createNewUserRole } from '../../redux/_actions';

import TitleComponent from '../TitleComponent';
import Loading from '../LoadingComponent';
import HeaderLogged from '../HeaderLoggedComponent';

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    resetNewUserForm: () => (actions.reset('newUserForm')),
    createNewUserRole: (user) => createNewUserRole(user)
};

const passwordsMatch = (password, confirmPassword) => password === confirmPassword;
const emailMatch = (email, confirmEmail) => email === confirmEmail;

class NewUsers extends Component {
    constructor (props){
        super(props);
        this.state = {
            submitted: false,
            emailMatch: false,
            passwordMatch: false,
            username: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            email:'',
            role: '',
            confirmEmail: '',
            touched: {
                username: false,
                password: false,
                confirmPassword: false,
                firstname: false,
                lastname: false,
                email: false,
                confirmEmail: false,
                role: false
            }
        }
    }

    checkEmailMatch(email, confirmEmail) {
        const checkEmailMatch = emailMatch(email, confirmEmail)
        if(checkEmailMatch){
            this.setState({
                emailMatch: true
            })
        }
        return checkEmailMatch;
    }

    checkPasswordMatch(password, confirmPassword) {
        const checkPasswordMatch = passwordsMatch(password, confirmPassword);
        if(checkPasswordMatch){
            this.setState({
                passwordMatch: true
            })
        }
        return checkPasswordMatch;
    }

    handleSubmit(values) {
        
        this.setState({
            submitted: true,
        })
        
        if(this.checkEmailMatch(values.email, values.confirmEmail) && 
            this.checkPasswordMatch(values.password, values.confirmPassword)) {
            this.props.createNewUserRole(values);
            this.props.resetNewUserForm();
            this.setState({
                submitted: false,
                passwordMatch: false,
                emailMatch: false
            })
        }
    }

    render() {
        const required = val => val && val.length;
        const maxLength = len => val => !val || (val.length <= len);
        const minLength = len => val => val && (val.length >= len);
        const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        const validPassword = val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/i.test(val);
        const title = 'Registrar novos usuários da família';
        const iconLeft = "fa fa-registered fa-1x mr-3"

        return(
            <>
            <HeaderLogged />
            <div className="container-component">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <TitleComponent 
                            title={title}
                            iconLeft={iconLeft}
                        />
                        <div className="card rounded p-5">
                            <Form 
                                model="newUserForm" 
                                validators={{
                                    // Field-level validators
                                    password: { required, validPassword },
                                    confirmPassword: { required },
                                    email: { required, validEmail },
                                    confirmEmail: { required },
                                    lastname: { required, minLength: minLength(2), maxLength: maxLength(25) },
                                    firstname: { required, minLength: minLength(2), maxLength: maxLength(25) },
                                    username: { required, minLength: minLength(2), maxLength: maxLength(25) },
                                    role: { required }
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

                                <Row>
                                    <Col >
                                        <Control.select model=".role" name="role"
                                            className="form-control">
                                            <option>Selecione...</option>
                                            <option>Gerente</option>
                                            <option>Usuário</option>
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".role"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required'
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

                            
                            <Row className="error-message text-center">
                                <Col>
                                    {
                                        this.state.submitted && !this.state.emailMatch 
                                            && <p className="text-danger">Os emails submetidos devem ser iguais!</p>
                                    }
                                </Col>
                            </Row>
                            <Row className="error-message text-center">
                                <Col>
                                    {
                                        this.state.submitted && !this.state.passwordMatch &&
                                            <p className="text-danger">As senhas submetidas devem ser iguais!</p>
                                    }
                                </Col>
                            </Row>
                            
                            <Row >
                                <Col className="payload-message text-center mt-3">      
                                    {
                                        this.props.auth.isLoading ? <Loading/> :
                                        this.props.auth.error ? <h4>{ this.props.auth.payload.signupError.message }</h4> :
                                        <div></div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewUsers));