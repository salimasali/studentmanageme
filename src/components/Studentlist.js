import React from 'react'
import Studentcard from './Studentcard' 
import{Link} from 'react-router-dom'

function StudentList(props) {
    console.log(props);
    const deletestudentHandler=(id)=>{
        props.getstudentId(id)
    }
    // const studentts =[{
    //     id:"1",
    //     "name":"prinku",
    //     "email":"salimasali004@gmailcom"
    // }]
    const renderstudentList = props.studentts.map((student) => {
        return (
            <Studentcard 
            student={student} 
            clickHander={deletestudenttHandler} 
            key={student.id}></Studentcard>
   
        );
    })
    return (
        <div className="main">
            <h2>StudenttList</h2>
            <Link to="/add"><button className="ui button blue right">Add students</button></Link>
        <div className="ui celled list">
            {renderstudenttList}

        </div>
        </div>
    )
}

export default StudentList
