import React from 'react'
import person from '../img/person.png'
import {Link} from "react-router-dom"

function Studentcard(props) {
    const {id,name,email}=props.studentt
    return (
        
            <div className="item">
                <img className="ui avatar image" src={person} alt="person"/>
                <div className="content">
                    {/* //to navigate to perticular page */}
                    <Link to={{pathname:'/student/${id}',state:{student:props.studentt}}}>
                <div className="header">{name}</div>
                <div >{email}</div>
                </Link>
                <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}} 
                onClick={()=>props.clickHander(id)}>
                </i> 
                </div>
                </div>
                
            
            
        
    )
}

export default Studentcard
