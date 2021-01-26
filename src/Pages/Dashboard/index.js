import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import user from '../../Images/user.jpg'
import '../../css/dashboard.css'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'
import img4 from '../../Images/img4.jpg'
import img5 from '../../Images/img5.jpg'
import img6 from '../../Images/img6.jpg'
import img7 from '../../Images/img7.jpg'
import img8 from '../../Images/img8.jpg'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import {history} from '../../history'

export class Dashboard2 extends Component {
    constructor(props){
        super(props)
        const user = JSON.parse(localStorage.getItem("data"))
        console.log(user)
        const token = user && user.token
        this.state={
            allCategories:[],
            token
        }
    }
    componentDidMount(){
        this.fetchAllCategory()
        this.fetchProfile()
    }

    fetchAllCategory =()=>{
        const requestOptions={
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                ...{"Authorization":"Bearer " +this.state.token}
            }
        }
    fetch("http://142.93.152.229/cairo/api/fetch_categories", requestOptions)
    .then(async res=>{
      const data = await res.json()
      this.setState({allCategories:data})
      if(data.status_code===401) history.push("/login")
      console.log(data)
    })
    .catch(err=>{
        if(err==="Unauthorized"){
            history.push("/login")
        }
        console.log(err)
    })
}

fetchProfile=()=>{
    const board = JSON.parse(localStorage.getItem('data'))
    const baseUrl = "http://142.93.152.229/cairo/api/fetch_profile?token="

    const attach = {
        method: 'GET',
        headers: {'authorization': 'Bearer '+board.token}
    }
    const splash = document.getElementById("splash")
    
    const user_profile = JSON.parse(localStorage.getItem('profile'))
    if(user_profile){
        splash.innerHTML="Welcome "+ user_profile.first_name
    }else{
        fetch(baseUrl , attach).then(async res=>{
            let status
            const profileData = await res.json();
            const dataArr = profileData[0]
            localStorage.setItem('profile',JSON.stringify(dataArr))
            if(profileData){
                splash.innerHTML="Welcome "+ dataArr.first_name
            }else{
                console.log(status = false)
            }
    
        }).catch(err=>{
            alert(err + " connection error, pls fix.")
        })
    }
}

    render() {
       const details = JSON.parse(localStorage.getItem('profile'))

       console.log(details)
        return (

            <div>
                <Header color="black" />
                
                 {/* Inne Page Banner Area Start Here  */}
        <section className="inner-page-banner bg-common inner-page-top-margin overlay-dark-40" data-bg-image="img/figure/inner-page-banner1.jpg">
           <div className="container">
        <h4 className="alert-success text-center" style={{width:'100%'}} id="splash"></h4>

                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1>Dashboard</h1>
                            <ul>
                                <li>
                                    <a href="/landing">Home</a>
                                </li>
                                <li>dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/* Inne Page Banner Area End Here  */}
         {/* Event area starts here */}
            <div className="container-fluid">
                <div className="row text-center page">
                    <div className="sidebar col-sm-3">
                        <h4 className="" style={{color:'gray',marginTop:20}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h4>
                   
                      <div className='user'><span className="badge"><img src={user} alt="users images" /><a href="edit"><i className="fa fa-edit"/></a></span></div>
                      <div className="sidebar-text"><br/>
                        <h4><span className="fa fa-user"/> {details && details.first_name}</h4>
                        <br/>
                        <h5>fullstack web developer,</h5>
                        <h5>CEO @Tristack inc.</h5>
                        
                        <Link to ="/profile"><span className="btn btn-outline-primary ">Edit profile</span></Link>
                        <hr/>
                        <h3>Contacts:</h3>
                        <h6><a href={`mailto:${details && details.email}`}><span className="fa fa-envelope" /> {details && details.email}</a></h6>
                        <h6><a href={`tel:${details && details.phone_no}`}><span className="fa fa-phone" />  {details && details.phone_no}</a></h6>
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
                    <div className="page col-sm-9"><br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Tristack technology inc <span className="fa fa-laptop" /></h2>
                            </div>
                            <div className="col-sm-6 top-nav">
                                <ul>
                                    {/* <li><Link className="btn btn-outline-info dice"><span className="fa fa-plus" /> Upload</Link></li> */}
                                    <h1><a href="#exampleModal" data-toggle="modal" class="btn btn-otuline-info dice"><span className="fa fa-plus"/>Upload Products</a></h1>
                                    <li><Link><img src={user} alt="user"/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <h3>About <span className="fa fa-info"/></h3>
                        <h5>Tristack inc is an organisation that is specialized in computer science and technology initialization and installation.</h5>
                       
                            <h3>What we do</h3>
                            <div className="row lists">
                                <div className="">
                                    <h5>web design and development <span className="fa fa-laptop"/></h5>
                                    <h5>Graphics and logo design <span className="fa fa-paint-brush"/></h5>
                                    <h5>UI/UX design <span className="fa fa-desktop"/></h5>
                                    <h5>Social media marketing <span className="fa fa-mobile"/></h5>
                                    <hr/>
                                    <span className="btn btn-outline-info">Add more</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <Link>
                                        <div className="img-card">
                                            <img src={img1} alt="image1"/>
                                            <h6 style={{marginTop:10}}>Project card</h6>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-3">
                                    <div className="img-card">
                                        <img src={img3} alt="image3"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="img-card">
                                        <img src={img4} alt="image4"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="img-card">
                                        <img src={img2} alt="image2"/>
                                        <h6 style={{marginTop:10}}>Project card</h6>
                                    </div>
                                </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                        <div className="col-sm-3">
                            <div className="img-card">
                                <img src={img5} alt="image5"/>
                                <h6 style={{marginTop:10}}>Project card</h6>
                            </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="img-card">
                                    <img src={img6} alt="image6"/>
                                    <h6 style={{marginTop:10}}>Project card</h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="img-card">
                                    <img src={img7} alt="image7"/>
                                    <h6 style={{marginTop:10}}>Project card</h6>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="img-card">
                                    <img src={img8} alt="image8"/>
                                    <h6 style={{marginTop:10}}>Project card</h6>
                                </div>
                            </div>
                        </div>
                        {/* event area ends here */}
                        {/* <footer>
                            <h5 className="float-left" style={{color:'gray'}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h5>
                            <h5 className="float-right">Techend inc 3.0</h5>
                        </footer> */}
                    </div>
                </div>
                </div>
                <Footer />

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Products</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form  >
                        <div class="form-group">
                            <label   label for="product_image">Product Image</label>
                                <input type="file" class="form-control" name="product_image" required />
                        </div>
                        <div className="form-group">
                            <label for="product_name">Product Name</label>
                                <input type="text" class="form-control"  name="product_name" required />
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                                <input type="text" class="form-control"  name="description" required />
                        </div>
                        <div className="form-group">
                            <label for="price">Price</label>
                                <input type="number" class="form-control"  name="price" required />
                        </div>
                        <div className="form-group">
                        <label for="category">Category</label>
                        <select class="form-select" aria-label="Default select example">

                            <option selected>Select Category</option>
                            {this.state.allCategories.map(cat=>( 
                                 <option value={cat.category_name} key={cat.id}>{cat.category_name}</option> 
                             ))}
                            {/* {this.state.allCategories.map(cat=>{
                                const {category_name, id} = cat
                                return(
                                <option value={category_name} key={id}>{category_name}</option>
                            )})} */}
                            {/* <option value="2">Two</option>
                            <option value="3">Three</option> */}
                        </select>
                        </div>
 
                        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         {/* <button type="button" name="save" class="btn btn-primary">Save changes</button>  */}
        <input type="submit" value="Submit" name="save" class="btn btn-primary" />
      </div>
    
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Dashboard2
