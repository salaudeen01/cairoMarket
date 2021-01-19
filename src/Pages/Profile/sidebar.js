import React from 'react'
import user from '../../Images/user.jpg'

export default function Sidebar() {
    return (
        <div className="sidebar col-sm-3">
                    <h4 className="" style={{color:'gray',marginTop:20}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h4>
              
                  <div className='user'><span className="badge"><img src={user} style={{borderRadius:"100%",height:"100px",width:"100px"}} alt="users images" /><a href="edit"><i className="fa fa-edit"/></a></span></div>
                  <div className="sidebar-text"><br/>
                    <h4><span className="fa fa-user"/>  Williams Blonde</h4>
                    <br/>
                    <h5>fullstack web developer,</h5>
                    <h5>CEO @Tristack inc.</h5>
                    
                    <span className="btn btn-outline-primary ">Edit profile</span>
                    <hr/>
                    <h3>Contacts:</h3>
                    <h6><a href="mailto:#"><span className="fa fa-envelope" /> williamsBlonde@gmail</a></h6>
                    <h6><a href="tel:#"><span className="fa fa-phone" />  +2347063205787</a></h6>
                    <h5><span className="fa fa-map-marker" />  19 olasoji ln cairo market oshoji isolo lagos.</h5>
                    <br/>
                    <div className="sidebar-social">
                    <hr/> 
                    <h5>Organisation linkup</h5>
                        <br/>
                    <h6>Website <span className="fa fa-link" />:<a href="https://tristack.net"> Tristack.inc.org</a></h6>

                    <a className="py-3 px-3" style={{fontSize:20}} href="https://facebook.com"><i className="fa fa-facebook"/></a>
                    <a className="py-3 px-3" style={{fontSize:20}} href="https://twitter.com"><i className="fa fa-twitter"/></a>
                    <a className="py-3 px-3" style={{fontSize:20}} href="https://instagram.com"><i className="fa fa-instagram"/></a>
                    </div>
                </div>
                </div>
                
    )
}
