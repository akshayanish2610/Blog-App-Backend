import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const MyPost = () => {
    const [inputField,changeInputField]=useState({
        "user_id":""

        }
    )

    const[result,changeResult]=useState([ ])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/api/view/").then(
            (response)=>{
                changeResult(response.data)
            }
        )
    }

    useEffect(()=>{fetchData()},[])

    const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})

    }

    const readValue=()=>{
            console.log(inputField)
            axios.post("",inputField).then(
                (response)=>{
                    alert(response.data)
                }
            )
    }

    
  return (
    <div>
<Navbar/>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">UserId:</label>
                            <input type="text" className="form-control" name='user_id' value={inputField.user_id} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    {result.map(
                            (value,index)=>{

                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{value.user_id}</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">{value.title}</h6>
                                        <p class="card-text">{value.msg}</p>
                                       
                                    </div>
                                    </div>
                                </div>
                            }
                        )}
                    </div>
                
                </div>
            </div>


        </div>
        <br></br>

    </div>
  )
}

export default MyPost