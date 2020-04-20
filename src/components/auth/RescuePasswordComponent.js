import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

import { requestPassword, cancelComponents } from '../../redux/_actions';

import TitleComponent from '../TitleComponent';
import Loading from '../LoadingComponent';
import Header from '../HeaderComponent';

const mapStateToProps = state => {
    return {
        password: state.password
    };
};

const mapDispatchToProps = {
    resetRescuePasswordForm: () => (actions.reset('rescuePasswordForm')),
    requestPassword: (email) => requestPassword(email),
    cancelComponents: () => cancelComponents()
};

class RescuePassword extends Component {
    constructor (props){
        super(props);
        this.state = {
            requestChange: false,
            email: '',
            touched: {
                email: false
            }
        }
    }

    componentWillUnmount(){
        this.props.cancelComponents()
    }

    handleSubmit(value) {
        this.setState({
            requestChange: true
        })
        this.props.requestPassword(value.email);
        this.props.resetRescuePasswordForm();
    }

    render() {
        const required = val => val && val.length;
        const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

        const title = 'Request Password';
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
                                model="rescuePasswordForm" 
                                validators={{
                                    email: { required, validEmail },    
                                }}
                                onSubmit={values => this.handleSubmit(values)}>
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
                                
                                <Row className="form-group text-center">
                                    <Col >
                                        <Button className="btn-warning btn-lg mt-3" type="submit"> Request Change Password </Button>
                                    </Col>
                                </Row>
                            </Form>
                            
                            <Row >
                                <Col className="payload-message text-center mt-3">      
                                    {
                                        this.state.requestChange && this.props.password.isLoading ? <Loading/> : <div></div>
                                    }
                                    {
                                        this.state.requestChange && this.props.password.sendUpdatePassword === false ? 
                                            <h4>{ this.props.password.payload.sendUpdateError.message }</h4> 
                                        :
                                            this.state.requestChange && this.props.password.sendUpdatePassword ? 
                                                <h4>{ this.props.password.payload.sendUpdatePassword.message }</h4>
                                                :
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RescuePassword));