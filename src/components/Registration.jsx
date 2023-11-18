import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  const [input, changeInput] = useState(
    {
      "name": "",
      "propic": "",
      "email": "",
      "password": ""
    }
  )
  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value })
  }
  const readValue = () => {
    console.log(input)
    axios.post("http://127.0.0.1:8000/api/reg/", input).then(
      (response) => { alert(response.data.status) }
    )
  }
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <h2>REGISTRATION FORM</h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Profile Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="propic"
                  value={input.propic}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <Link to="/add"> <button onClick={readValue} className="btn btn-primary" >Register</button></Link>
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration