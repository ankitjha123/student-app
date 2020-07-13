import React,{Component} from 'react';


import classes from './ProjectBuilder.css'
import TopBar from './TopBar/TopBar'
import StudentList from './StudentList/StudentList';

class ProjectBuilder extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(  
            <>
                <div className={classes.ProjectContainer}>
                    <div className = {classes.NavbarContainer}>
                        <TopBar/>
                    </div>
                    <hr style={{margin: 0}}/>
                    <div className={classes.MainContainer}>
                        <StudentList/>
                    </div>
                    <hr style={{margin: 0}}/>
                    <div className={classes.FooterContainer}>
                        © Ankit Jha
                    </div>                                
                </div>
            </>
        )  
    }
}


export default ProjectBuilder;