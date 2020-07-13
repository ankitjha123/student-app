import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';
import classes from './TopBar.css'

class TopBar extends Component {
  constructor(props){
    super(props)
  }
  render(){  
      return (
        <div className={classes.Main_Container}>
            <Navbar>
                <Navbar.Brand href="/studentlist">
                  <img
                    src={`${logo}`}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  /> Brand Name
                  </Navbar.Brand>
                <Navbar.Toggle />
                <Nav.Item>
                      <Nav.Link href="/studentlist" as={Link} to="/studentlist">Student List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                      <Button onClick={() =>  this.props.dispatch({type: 'AUTH', payload : false})}>Logout</Button>
                </Nav.Item>
            </Navbar>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {...state.auth};
  }


export default connect(mapStateToProps, null)(TopBar);
