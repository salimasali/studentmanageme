import React from 'react'

function Login() {
    
       

    return (
        <div className="login">
            <form className="log-form" onSubmit="login()">
                <h1>Login Here !</h1>
                <input
                    type="name"
                    placeholder="Name"
                    
                   
                />
                <br/>
                <input
                    type="email"
                    placeholder="Email"
                   
                /><br/>
                <input
                    type="password"
                    placeholder="Password"
                    
                />
                <br/>
                <button type="submit" className="submit_btn">Submit</button>
            </form>
        </div>
    )
}

export default Login
