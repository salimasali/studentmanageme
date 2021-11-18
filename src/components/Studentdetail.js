import React from 'react'
import person from '../img/person.png'
import {Link} from "react-router-dom"

function Studentdetail(props){
    console.log(props);
    const {name,email} = props.location.state.student;
    
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="uimage">
                    <img src={person} alt="user"/>
                    </div>
                    <div className="content">
                    <div className="header">{name}</div>
                        <div className="description">{email}</div>
                </div>
                </div>

                <div className="center-div">
                    <Link to="/">
                    <button className="ui button black center">Back to studentList</button>
                    </Link>
                </div>
                </div>

    )
    
        
            
            
        
    
    }

export default Studentdetail
