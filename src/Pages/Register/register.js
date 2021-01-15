import React, { Component } from 'react'

 class Register extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage:`url(${"/Images/download.jpg"})`, height:670}}>
                <div style={{paddingTop:80}}>

                <div className="card  align-center shadow-lg rounded" style={{width:'50%',height:500,  margin:'0px auto',}}>
                    <div className="card-header">
                        <h1 className="register text-center">REGISTER</h1>
                    </div>

                    <div className="card-body">
                        {/* <div className="row">
                            <div className="col-6">
                             <label for="uname">Username:</label>
                            <input className="form-control form-control-lg" type="text" placeholder="First Name" aria-label=".form-control-lg example" />
                            </div>

                            <div className="col-6">
                            <label className="form-label">Last Name</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Last Name" aria-label=".form-control-lg example" />
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-6">
                            <label className="form-label">Email Address</label>
                            <input className="form-control form-control-lg" type="text" placeholder="name@example.com" aria-label=".form-control-lg example" />
                        </div>
                        <div className="col-6">
                        <label className="form-label">Phone Number</label>
                        <input className="form-control form-control-lg" type="number" placeholder="Phone number" aria-label=".form-control-lg example" />
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-6">
                            <label className="form-label">Business name</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Business name" aria-label=".form-control-lg example" />
                            </div>
                        <div className="col-6">
                            <label className="form-label">Shop Address</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Shop Address" aria-label=".form-control-lg example" />
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-6">
                            <label className="form-label">Product Category</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Product Category" aria-label=".form-control-lg example" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Social Handle</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Social Handle" aria-label=".form-control-lg example" />
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-6">
                            <label className="form-label">Password</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Password" aria-label=".form-control-lg example" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Confirm Password</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Confirm Password" aria-label=".form-control-lg example" />
                        </div>
                        </div> */}

                        <form>
                        <div class="row">
                            <div class="col mb-3">
                             <label for="uname">First name:</label>
                            <input type="text" class="form-control" id="email" placeholder="First Name" name="first name" />
                            </div>
                            <div class="col mb-3">
                             <label for="uname">Last Name:</label>
                            <input type="text" class="form-control" placeholder="Last Name" name="last name" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                             <label for="uname">Email Address:</label>
                            <input type="text" class="form-control" id="email" placeholder="@gmail.com" name="email" />
                            </div>
                            <div class="col mb-3">
                             <label for="uname">Phone Number:</label>
                            <input type="number" class="form-control" placeholder="Phone number" name="phone number" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                             <label for="uname">Business Name:</label>
                            <input type="text" class="form-control" id="email" placeholder="Business Name" name="Business name" />
                            </div>
                            <div class="col mb-3">
                             <label for="uname">Shop Address:</label>
                            <input type="text" class="form-control" placeholder="Shop Address" name="Shop Address" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                             <label for="uname">Product Category:</label>
                            <input type="text" class="form-control" id="email" placeholder="Product Category" name="Product category" />
                            </div>
                            <div class="col mb-3">
                             <label for="uname">Social Handle:</label>
                            <input type="text" class="form-control" placeholder="" name="social handle" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                             <label for="uname">Password:</label>
                            <input type="password" class="form-control" id="Password" placeholder="Choose a password" name="password" />
                            </div>
                            <div class="col mb-3">
                             <label for="uname">Confirm Password:</label>
                            <input type="password" class="form-control" placeholder="re-enter password" name="password" />
                            </div>
                        </div>
                        </form>

                        <a href="#" className="btn btn-primary btn-xl">SUBMIT</a>
                        </div>
                    </div>
           </div>
                 </div>
        )
    }
}

export default Register
