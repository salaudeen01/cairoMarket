import React, { Component } from 'react'
import yo from "../../image/yo.jpg"
import Header from "../../Components/Header"
import Sidebar from './sidebar'
// import user from "../../Images/user.jpg"

 class profile extends Component {
    render() {
        return (
          <div>
            <Header color="black"/> <br/><br/><br/><br/>
            <div class="container-fluid-all">
              <div className="row text-center page">
                <Sidebar />
                <div className="page col-sm-9">
                  <div className="col-12 shadow-lg p-3 mb-5 bg-white rounded" style={{height:"600px", background:"white",borderRadius:"15px"}}>
                    <div className="mb-2 text-center type="button class="btn btn-link" class="text-center" style={{marginLeft:"20px"}}>
                    <h1><a href="#"> Edit Profile</a></h1>
                  </div>
                  <br/>
                <div className="card container" >
                  <div className="row text-center" style={{marginRight:"10px"}}>
                    <img src={yo} class="rounded-circle" alt="..." style={{height:"100px", width:"100px"}}></img><br/>
                    <span> <a href="#" class="btn btn-danger">Update Photo</a></span>
                  </div>
                </div>
                <br/>
                <div className="container col-sm-10"  style={{marginLeft:"90px"}}>
                    <div class="row g-3">
                  <div class="col">
                  <label class="form-label">First name</label>
                    <input type="text" class="form-control" placeholder="first name" style={{padding:"20px", fontSize:"15px"}}></input>
                  </div>
                  <div class="col">
                  <label class="form-label">Last name</label>
                    <input type="text" style={{padding:"20px", fontSize:"15px"}} class="form-control" placeholder="Last name"></input>
                  </div>
                  </div>
                  <div class="row g-3">
                  <div class="col">
                  <label class="form-label">Business name</label>
                    <input type="text" style={{padding:"20px",fontSize:"15px"}} class="form-control" placeholder="business name"></input>
                  </div>
                  <div class="col">
                  <label class="form-label">Phone Number</label>
                    <input type="number" style={{padding:"20px",fontSize:"15px"}} class="form-control" placeholder="enter phone number"></input>
                  </div>
                  </div>
                  <div class="row g-3">
                  <div class="col">
                  <label class="form-label">Address</label>
                    <input type="text" style={{padding:"20px", fontSize:"15px"}} class="form-control" placeholder="address"></input>
                  </div>
                  <div class="col">
                  <label class="form-label">Email</label>
                    <input type="email" style={{padding:"20px",fontSize:"15px"}} class="form-control" placeholder="@yahoo.com"></input>
                  </div>
                  </div>
                </div>
                <br/>
    <div style={{marginLeft:"15px"}}>
      <button type="button" class="btn btn-danger" style={{padding:"10px", marginLeft:"90px", fontSize:"20px"}}>Save changes</button>
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
              </div>
              </div>
            </div>
        )
    }
}

export default profile
