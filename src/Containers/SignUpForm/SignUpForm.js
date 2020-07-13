import React, { Component } from "react";
import { Form, Button, FormControl, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import classes from "./SignUpForm.css";

const inputFields = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
    return (
            <>
            <FormControl  {...input} placeholder={placeholder} type={type} />
            {touched && ((error && <span style={{color:'red'}}>{error}</span>))}
            </>
          )
}

const onSubmit = (values) => {
  if (values.confirm_password !== values.Password) {
    alert('Password mismatched') ;
  } else {
    delete values.confirm_password;
    localStorage.setItem('student',  JSON.stringify(values));
    alert(`Student Registered`)
  }
}


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
  }

  required = (value) => {
    if(!value){
        return 'Required'
    }
  }

  redirectHandler(){
    this.props.history.push('/')
  }

  render() {
    
    const {handleSubmit} = this.props;
    return (
      <>
      <div className={classes.MainContainer}>
        <div className={classes.Form}>
          <h4 style={{float: "left", width: "100%"}}>
            Create an Account
          </h4>
          
          <Form onSubmit = {this.props.handleSubmit}>
          <Form.Row>
              <Col>
            <Form.Group>
              <Form.Label>Name</Form.Label><br/>
                <Field name="Username" type="text" placeholder="Enter Your Name" component={inputFields} validate={this.required}/>
            </Form.Group>
            </Col>
              <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label><br/>
                <Field name="Email" type="email" placeholder="Enter email" component={inputFields} validate={this.required}/>
            </Form.Group>
            </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Field name="Password" type="text" placeholder="Enter Password"  component={inputFields} validate={this.required}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Field name="confirm_password" type="text" placeholder="Confirm Password"  component={inputFields} validate={this.required}/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Field name="Address" type="text" placeholder="Enter Address"  component={inputFields} validate={this.required}/>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Field name="Phone No" type="text" placeholder="Enter Phone No"  component={inputFields} validate={this.required}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Date Of Birth</Form.Label>
                  <Field name="DOB" type="date" placeholder="Enter Date Of Birth"  component={inputFields} />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label>Degree of Graduation</Form.Label>
              <Field name="Degree" type="text" placeholder="Enter Degree of Graduation"  component={inputFields} validate={this.required}/>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Skills</Form.Label>
                  <Field name="Skills" type="text" placeholder="Enter Your Skills In Comma Seperated Values"  component={inputFields} validate={this.required}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Years Of Experience</Form.Label>
                  <Field name="Experience" type="number" placeholder="Enter Experience"  component={inputFields} validate={this.required}/>
                </Form.Group>
              </Col>
            </Form.Row>
            
            <Button disabled={!this.props.valid} type="submit"> Sign Up </Button>{"    "}
            <Button onClick={() => this.redirectHandler()}>Back to sign in </Button>
            
          </Form>
        </div>
      </div>
      </>
    );
  }


}


export default reduxForm({
  form : "sign-up-form",
  onSubmit
})(SignUpContainer);
