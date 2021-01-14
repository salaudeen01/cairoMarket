import React, { Component } from 'react'
import yo from "../../image/yo.jpg"

 class profile extends Component {
    render() {
        return (
            <div class="container">
                <div style={{backgroundColor:"#e4e4e4", height:"655px"}} className="col-12 shadow-lg p-3 mb-5 bg-white rounded" style={{height:"600px", background:"white",borderRadius:"15px"}}>
                <div className="mb-2 type="button class="btn btn-link" class="text-center" style={{marginRight:"140px"}}>
            <h1><a href="#">Profile</a></h1>
              </div>
              <br/>
              <div class="card" class="container">
  <div class="row" class="text-center" style={{marginRight:"190px"}}>
    <img src={yo} class="rounded-circle" alt="..." style={{height:"100px", width:"100px"}}></img><br/>
   <span> <a href="#" class="btn btn-primary">Update Photo</a></span>
  </div>
</div>
<br/>
<div class="container" class="col-sm-10">
    <div class="row g-3">
  <div class="col">
  <label class="form-label">First name</label>
    <input type="text" class="form-control" placeholder="first name"></input>
  </div>
  <div class="col">
  <label class="form-label">Last name</label>
    <input type="text" class="form-control" placeholder="Last name"></input>
  </div>
  </div>
  <div class="row g-3">
  <div class="col">
  <label class="form-label">Business name</label>
    <input type="text" class="form-control" placeholder="business name"></input>
  </div>
  <div class="col">
  <label class="form-label">Mobile</label>
    <input type="number" class="form-control" placeholder="enter mobile number"></input>
  </div>
  </div>
  <div class="row g-3">
  <div class="col">
  <label class="form-label">Address</label>
    <input type="text" class="form-control" placeholder="address"></input>
  </div>
  <div class="col">
  <label class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="@yahoo.com"></input>
  </div>
  </div>
</div>
<br/>
<div style={{marginLeft:"15px"}}>
  <button type="button" class="btn btn-primary">submit</button>
  </div>
  </div>
            {/* <div style={{backgroundColor:"#e4e4e4", height:"655px"}}>
            <div className="container"> <br/> 
                <div className="row">
                    <div className="col-12 shadow-lg p-3 mb-5 bg-white rounded" style={{height:"600px", background:"white",borderRadius:"15px"}}>
                        <div className="row">
                            <div className="col-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> */}
            </div>
        )
    }
}

export default profile
