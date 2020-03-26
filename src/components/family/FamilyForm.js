import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

export default class FamilyForm extends Component {

    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            touched: {
                name: false,
            }, 
            validated: false
        }
        this.state = this.initialState;
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value; 
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    
    handleBlur = (field) => () => {
        this.setState({
            touched: { [field]: true }
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validateValues()) {
            this.props.setFamilyName(this.state.name)
            this.setState(this.initialState)    
        }
    }

    checkData = (name) => {
        const errors = {
            name: '',
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } else if (name.length > 25) {
                errors.name = 'Name must be 25 or less characters.';
            }
        }

        return errors;
    }

    validateValues = () => {
        const isNotEmpty = Object.values(this.state).every(element => element !== '')
        this.setState({
            validated: true
        })
        return isNotEmpty; 
    }

    render() {
        const errors = this.checkData(this.state.name);
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="name" md={3}>Name</Label>
                    <Col md={6}>
                        <Input type="text" id="name" name="name"
                            value={this.state.name}
                            invalid={errors.name}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.name}</FormFeedback>   
                    </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                    <Col md={{size: 4}} className="text-center my-2">
                        <Button type="submit" className="btn-warning btn-block mr-3">
                            Add Family Name
                        </Button>
                    </Col> 
                </FormGroup>
            </Form>
        );
    }
}


