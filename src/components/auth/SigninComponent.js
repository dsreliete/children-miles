import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

import { login, cancelComponents } from '../../redux/_actions';

import TitleComponent from '../TitleComponent';
import Loading from '../LoadingComponent';
import Header from '../HeaderComponent';

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    resetSigninForm: () => (actions.reset('signinForm')),
    postLogin: (username, password) => login(username, password),
    cancelComponents: () => cancelComponents()
};

class Signin extends Component {
    constructor (props){
        super(props);
        this.state = {
            username: '',
            password: '',
            touched: {
                username: false,
                password: false
            }
        }
    }

    handleSubmit(values) {
        this.props.postLogin(values.username, values.password);
        this.props.resetSigninForm();
    }

    componentWillUnmount(){
        this.props.cancelComponents()
    }

    render() {
        const required = val => val && val.length;
        const maxLength = len => val => !val || (val.length <= len);
        const minLength = len => val => val && (val.length >= len);
        const validPassword = val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/i.test(val);

        const title = 'Login';
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
                            <Form 
                                model="signinForm" 
                                validators={{
                                    password: { required, validPassword },
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
                                
                                <Row className="form-group text-center">
                                    <Col >
                                        <Button className="btn-warning btn-lg mt-3" type="submit"> Send </Button>
                                    </Col>
                                </Row>
                            </Form>
                            
                            <Row >
                                <Col className="payload-message text-center mt-3">      
                                    {
                                        this.props.auth.isLoading ? <Loading/> : <div></div>
                                        
                                    }
                                    {
                                        this.props.auth.error ? 
                                        <h4>{ this.props.auth.payload.signinError.message }</h4> : <div></div>
                                    }
                                </Col>
                            </Row>

                            <Row >
                                <Col className="text-center mt-3">
                                    <h4 className="footer-link-label">Esqueceu a senha?</h4>
                                    <Link to="/rescue-credentials" className="footer-link"><h5>Clique aqui para recuperá-la!</h5></Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));