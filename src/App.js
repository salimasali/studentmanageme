import React,{useState,useEffect} from 'react'
import{BrowserRouter as Router,Switch,Route} from "reactt-router-dom"
//{use effect, do is actually whenever the value changes the useefect
// helps as to render the component again}
import './App.css';
import Header from "./Components/Header"
import Addstudent from "./Components/Addstudent"
import Studentlist from "./Components/Studentlist"
import{uuid} from 'uuidv4'
import studentdetail from "./Components/studentdetail"

function App() {
  const LOCAL_STORAGE_KEY="students"
  const[student,setstudents]=useState([])
  
  const addstudenttHandler = (students) =>{
    console.log(students);
    // now we entered email and data to be stored in a state(contact)
    setstudents([...students,{id:uuid(),...student}]) //this will be cleared when refresh the page so we use localstorage
  };
   const removestudentHandler=(id)=>{
     const newstudenttlist=students.filter((student)=>{
       return student.id!==id
     })
     setstudents(newstudentlist);
   };

//2-when we also want that when we actually refresh the page we want grab the information from the localstorage and display it
//so that we use another useEffect
useEffect(()=>{
  const retrivestudents=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))//let me need a key so define a key first,//after getting the data from localstorage we need to store in a variable
 if(retrivestudents) setstudents(retrivestudents)
 },[]);




  
  //1-add the dependency they are contacts
   useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(students))//let me need a key so define a key first

   },[students])
   
  
  return (
    <div className="ui container">
      <h1>Helloworld</h1>
      <Router>
      <Header name="sali"/>
      <Switch>
      
      <Route path="/" exact 
      render={(props)=>(<Studentlist{...props}
        studentsts={students}
        getstudentId={removestudentHandler}

        />
        )}
     />
      <Route path="/add" 
      render={(props)=>(<Addstudent{...props}
      addstudenttHandler = {addstudenttHandler}
      />
      )}
      />
     
      {/* <AddContact 
      addContactHandler = {addContactHandler}/>
       <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Switch>
      <Route path="/student/:id" component={studentdetail}>
      

      </Route>

      </Router>
      
      
    </div>
  );
}

export default App;
