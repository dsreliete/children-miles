import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class ChildrenForm extends Component {

    constructor(props) {
        super(props)
        
        this.id = 0
        this.initialState = {
            id: this.id,
            name: '',
            gender: '',
            birthDate: new Date(),
            touched: {
                name: false,
            }, 
            validated: false
        }
        this.state = this.initialState
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        const errors = this.checkData(this.state.name);
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="name" md={2}>Name</Label>
                    <Col md={10}>
                        <Input type="text" id="name" name="name"
                            placeholder="Name"
                            value={this.state.name}
                            invalid={errors.name}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.name}</FormFeedback>   
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="gender" md={2}>Gender</Label>
                    <Col md={10}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" id="female" name="gender"
                                checked={this.state.gender === "female"}                        
                                value="female"
                                invalid={errors.gender}
                                onChange={this.handleInputChange}></Input>{' '} Female  
                            </Label>
                            <Label className="ml-5">
                            <Input type="radio" id="male" name="gender"
                                checked={this.state.gender === "male"}                        
                                value="male"
                                onChange={this.handleInputChange}></Input>{' '} Male
                            </Label> 
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="dateBirth" md={2}>Birth date</Label>
                    <Col md={10}>
                        <DatePicker
                            selected={this.state.birthDate}
                            onSelect={this.handleDateChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type="submit" color="#009688" className="text-white btn-block mt-4">
                            Add Child
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

    handleDateChange = (date) => {
        this.setState({
            birthDate : date
        })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value; 
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleIdChild = () => {
        this.id++;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validateValues()) {
            this.handleIdChild()
            const newChild = {
                id: this.id,
                name: this.state.name,
                birthDate: this.state.birthDate,
                gender: this.state.gender
            }
            this.props.handleAddChildrenToList(newChild)
            this.setState(this.initialState)
        }
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validateValues = () => {
        const isNotEmpty = Object.values(this.state).every(element => element !== '')
        this.setState({
            validated: true
        })
        return isNotEmpty; 
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

}