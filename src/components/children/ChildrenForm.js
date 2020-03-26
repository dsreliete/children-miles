import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class ChildrenForm extends Component {

    constructor(props) {
        super(props)
        
        this.initialState = {
            id: 0,
            name: '',
            gender: '',
            birthDate: new Date(),
            touched: {
                name: false,
            }, 
            validated: false
        }

        if(this.props.child) {
            this.currentChild = this.props.child
            this.currentChild.touched = { name: false }
            this.currentChild.validated = false
            this.state = this.props.child
        } else{
            this.state = this.initialState
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        const button = this.getFormButton();
        const errors = this.checkData(this.state.name);
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="name" md={3}>Name</Label>
                    <Col >
                        <Input type="text" id="name" name="name"
                            value={this.state.name}
                            invalid={errors.name}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.name}</FormFeedback>   
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="gender" md={3}>Gender</Label>
                    <Col >
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
                    <Label htmlFor="dateBirth" md={3}>Birthday date</Label>
                    <Col >
                        <DatePicker 
                            selected={this.state.birthDate}
                            onSelect={this.handleDateChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                    {button}
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

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.submitValuesAndHandleComponent(false)
    }

    submitValuesAndHandleComponent(keepComponent) {
        if(this.validateValues()) {
            const newChild = {
                id: this.state.id,
                name: this.state.name,
                birthDate: this.state.birthDate,
                gender: this.state.gender
            }

            if(this.props.child){
                this.props.handleEditChildren(newChild)
                this.props.handleToggleModal()
            } else {
                this.props.handleAddChildrenToList(newChild)
                keepComponent ? this.props.showComponent() : this.props.hideComponent()
            }
            this.setState(this.initialState)
        }
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

    getFormButton() {
        if(this.props.child) {
            return(
                <>    
                    <Col md={{size: 3}} className="text-center my-2">
                        <Button type="submit" className="btn btn-block mr-3">
                            Edit child
                        </Button>
                    </Col>
                </>
            );
        } else {
            return (
                <>    
                    <Col md={{size: 3}} className="text-center my-2">
                        <Button type="submit" className="btn-warning btn-block mr-3">
                            Add child
                        </Button>
                    </Col>
                    <Col md={{size: 4}} className="text-center my-2">
                        <Button type="reset" onClick={() => this.submitValuesAndHandleComponent(true)} className="btn-warning btn-block mr-3">
                            Save and add more
                        </Button>
                    </Col>
                </>
            );
        }
    }

}