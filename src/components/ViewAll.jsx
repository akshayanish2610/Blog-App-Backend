import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Navbar from './Navbar'


const ViewAll = () => {

    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/api/viewall/").then(
            (response)=>{
                changeData(response.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        
                        {data.map(
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
    </div>
  )
}

export default ViewAll