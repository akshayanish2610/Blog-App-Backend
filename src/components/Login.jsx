import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const[input,changeInput]=useState(
    {"email":"",
  "password": ""})
  const inputHandler=(event)=>{
    changeInput({...input,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
      console.log(input)

      if(input.email=="admin@gmail.com"&&input.password=="1234"){
        navigate("/add")
        }else{
          alert("Invalid Credentials")
      }
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 d-flex justify-content-end align-items-center">
          {/* Add an image on the left side */}
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png?f=webp" 
            alt="LoginImage"
            style={{ maxWidth: '100%', maxHeight: '100%', margin:55 }}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          {/* Card on the right side */}
          <div className="card border-primary mb-3" style={{maxWidth: 700,maxHeight: 700}}>
            <div className="card-body">
              <h2 className="card-title text-center">Sign In</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" name='email' value={input.email} onChange={inputHandler}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name='password' value={input.password} onChange={inputHandler}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  
                </div>
                <button onClick={readValue}type="submit" className="btn btn-primary">
                  Login
                </button><br/><br/>
                <label className="form-check-label" htmlFor="exampleCheck1">
                   New User? <Link to="/register">Register Now</Link>
                  </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;