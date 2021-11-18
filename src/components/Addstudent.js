import React from 'react'

class Addstudent extends React.Component{  

  
    state={
        name:"",
        email:""
    }
    
    add = (e) => {
        
        e.preventDefault();
        if((this.state.name ===" ")||(this.state.email === " ")){
            alert("all the fields are mandatory!")
                   }
        // we get handler here we use below code
        this.props.addHandler(this.state)
        //add the field then we clear the textbox(email,name)
        this.setState({name:" ",email:" "})
        console.log(this.state)
        //this approach is used to navigate from one page to another programatically
        this.props.history.push("/")
    }
    


render(){
    return (
        <div className="ui main">
            <h2>Add student</h2>
            {/* we submit the form when click add ,so we add onSubmit function*/}
            <form className="ui form" onSubmit={this.add} >
                <div className="field">
                    <label>Name</label>
                    {/* we can update the stae using this.setstate */}
                    <input type="text"
                     name="name" 
                     placeholder="Name"
                     value={this.state.name}
                     onChange={(e)=>this.setState({name:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                    name="email" 
                    placeholder="email"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}/>
                </div>
                <button className="ui button blue">ADD</button>
            </form>
            
        </div>
    )
}
}


export default Addstudent
