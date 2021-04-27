import React,{useState,useEffect} from 'react'
import {useHistory, userHistory} from 'react-router-dom'
import Header from './Header'


function Register(){
    useEffect(()=>{
    if(localStorage.getItem('user-info')){
        history.push("/TicketSearch")
    }
},[])
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [password_confirmation,setPasswordConfirmation]=useState("")
const history=useHistory();

async function signUp(){

    let item={name,email,password,password_confirmation}
    console.warn(item)

    let result=await fetch("http://127.0.0.1:8081/api/register",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    })
    result = await result.json()
    
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/TicketSearch")
}
    return(
    <>
        <Header/> 

        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}className="form-control" placeholder="email"/>
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="password"/>
            <br/>
            <input type="password" value={password_confirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}className="form-control" placeholder="password confirmation"/>
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>

        </div>
        </>
    )
}

export default Register