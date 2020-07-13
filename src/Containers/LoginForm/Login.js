import React, { Component } from "react";
import { Form, Button, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import classes from "./Login.css";
// import * as actions from '../../Store/actions/index'
import MainRoutes from '../../Routes/MainRoutes'

const inputFields = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
    return (<>
            <FormControl  {...input} placeholder={placeholder} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </>
          )
}

const onSubmit = (values, dispatch) => {
  var studentList = JSON.parse(localStorage.getItem("student"));
  if (studentList.Email === values.Email && studentList.Password === values.Password) {
    return dispatch({type: 'AUTH', payload: true})
  } else {
    alert(`Incorrect username or password`)
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  required = value => value ? undefined : 'Required'

  signupHandler() {
    return this.props.history.push(`/signup`)
  }

  render() {
    
    const {handleSubmit} = this.props;
    
    return (
      <>
      <div className={classes.MainContainer}>
        <div className={classes.Form}>
          <h4 style={{float: "left", width: "100%"}}>
            Login to your account
          </h4>
        
          <Form onSubmit = {handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label><br/>
                <Field name="Email" type="email" placeholder="Enter email" component={inputFields} validate={this.required}/>
              
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Field name="Password" type="password" placeholder="Enter Password"  component={inputFields} validate={this.required}/>
            </Form.Group>
            {/* <button className={classes.LoginBtn} onClick={this.loginHandler.bind(this)}>Login </button> */}
            <Button disabled={!this.props.valid} type="submit"> Login </Button> {"  "}
            <Button onClick={()=> this.signupHandler()}> SignUp </Button>
          </Form>
        </div>
      </div>
      </>
    );
  }


}


export default reduxForm({
  form : "loginForm"
})(Login);
