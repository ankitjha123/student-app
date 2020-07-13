import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import ProjectBuilder from '../Containers/ProjectBuilder'
import LoginForm from '../Containers/LoginForm/Login'
import SignUpForm from '../Containers/SignUpForm/SignUpForm'
import Page404 from '../Containers/Page404Container/Page404'
import {connect} from 'react-redux'


class MainRoutes extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var mainroutes = (
            <Switch>
                <Route path = "/" exact component={LoginForm} />
                <Route path = "/login" exact component={LoginForm} />
                <Route path = "/signup" exact component={SignUpForm} />
                <Route path = "*"  component={Page404} />    
            </Switch>
        );

        if(this.props.isAuthenticated){
            mainroutes = (
                <Switch>         
                    <Route path = "/" component={ProjectBuilder}/>
                    <Route path = "/studentlist" component={ProjectBuilder}/>
                    <Redirect to = "*"  component={ProjectBuilder} />  
                </Switch>
            )
        }


        return (
            <>
                {mainroutes}
            </>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        ...state.auth
    };
}


export default connect(mapStateToProps, null)(MainRoutes);