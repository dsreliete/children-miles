import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TitleComponent from './TitleComponent';

export default class ChildrenAddComponent extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            id: 0,
            name: '',
            gender: '',
            birthDate: new Date(),
            touched: {
                name: false,
                gender: false,
                birthDate: false
            }, 
            validated: false,
        }
        this.state = this.initialState;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render(){
        const errors = this.checkData(this.state.name, this.state.birthDate, this.state.gender);
        const title = "Add Child";
        return (
            <div className="container-wrapper">
                <div className="row">
                    <TitleComponent title={title}/>
                </div>       
                <div className="row justify-content-center">
                    <div className="col-md-10">
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
                                    <FormFeedback>{errors.birthDate}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="#009688" className="text-white">
                                        Add Child
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>   
        );
    }

    handleDateChange = (date) => {
        this.setState({
            birthDate : date
        })
        console.log(this.state)
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value; 
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validateValues()) {
            alert('Current state is: ' + JSON.stringify(this.state));
            const newChild = {
                name: this.state.name,
                birthDate: this.state.birthDate,
                gender: this.state.gender
            }
            this.props.handleAddChildrenToList(newChild)
            console.log('Current state is: ' + JSON.stringify(newChild));
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

    checkData = (name, birthDate, gender) => {
        const errors = {
            name: '',
            birthDate: '',
            gender: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } else if (name.length > 25) {
                errors.name = 'Name must be 25 or less characters.';
            }
        }

        if (this.state.touched.gender && gender.length === 0) {
            errors.gender = 'The gender is required.';
        }

        if (this.state.touched.birthDate && birthDate.length === 0) {
            errors.birthDate = "The birth date is required"
        }

        return errors;
    }
}