import React,{Component} from 'react';
import {Container, Table } from 'react-bootstrap';
import classes from './StudentList.css'

class StudentList extends Component {
    constructor(props){
        super(props)
    }
    

    render(){
        var studentList = [];
        let student = JSON.parse(localStorage.getItem('student'));
        delete student.Password;
        studentList.push(student)
        var tableHeaders = Object.keys(studentList[0]).map((elem) => {
            return <th key={elem}>{elem}</th>
        });
        var studentDetails =[]
        for (let i = 0; i < studentList.length; i++) {
            let student = Object.values(studentList[i]).map((elem) => {
                return <td key={elem}>{elem}</td>
            });
            studentDetails.push(<tr key={i}>{student}</tr>)
        }
        return(
            <div className={classes.MainContainer}>
                <Container>
                    <h4 className={classes.UserHeadingContainer}>Student List</h4>
                    <div className = {classes.TableContainer}>
                        <Container>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        {tableHeaders}
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentDetails}
                                </tbody>
                            </Table>
                        </Container>   
                    </div>                            
                </Container>
            </div>
        )
        
    }
}


export default StudentList;