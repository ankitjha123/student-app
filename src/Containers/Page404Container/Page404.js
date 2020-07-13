import React,{Component} from 'react';

import { Container, Jumbotron } from 'react-bootstrap';
import classes from "./Page404.css";
var PageNotFound = () => {
        return(
            <div className={classes.MainContainer}>
                <Jumbotron>
                    <Container>
                        <h1>Error 404</h1>
                        <p>
                            Page Not Found
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        )   
}



export default PageNotFound;