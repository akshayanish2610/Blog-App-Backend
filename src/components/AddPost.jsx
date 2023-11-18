import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddPost = () => {
    const [inputField,changeInputField]=useState({
        "user_id":"","title":"","msg":""

        }
    )

    const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})

    }

    const readValue=()=>{
            console.log(inputField)
            axios.post("http://127.0.0.1:8000/api/add/",inputField).then(
                (response)=>{
                    alert(response.data.status)
                }
            )
    }
  return (
    <div>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <form-label>User Id</form-label>
                        <input type="text" className="form-control" name='user_id' value={inputField.user_id} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <form-label> Title:</form-label>
                        <input type="text" className="form-control" name='title' value={inputField.title} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <form-label>Message:</form-label>
                        <input type="text" className="form-control" name='msg' value={inputField.msg} onChange={inputHandler} />

                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readValue}>Submit</button>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
   
  )
}

export default AddPost