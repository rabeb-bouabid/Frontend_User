import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import contactService from '../services/contact.service'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {motion} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
const ContactUs=()=>{
  const navigate = useNavigate()
  const [data,setData]=useState({})
  const onChangeHandler=(e)=>{
        setData({
          ...data,
          [e.target.name]:e.target.value
        })
        console.log(data)
      }
      const formData = new FormData();
      const onSubmitHandler=(e)=>{
      e.preventDefault();
      formData.append('username', data.username);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

     
      Swal.fire({
        title: 'Sure you want to send a message!',
        showDenyButton: true,
        confirmButtonText: 'Send',
        denyButtonText: `cancel`,
      }).then((result) => {
        console.log("formData",data)

        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          contactService.ContactUs(data).then((res)=>{
            console.log(res)
            navigate('/')
          }).catch((err)=>{
            console.log(err)
          })
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
      }
     
      useEffect(()=>{AOS.init({duration:2000})})

  return (
    <motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    exit={{ x: 100 }}
    >
        <Header/>
         <br/> <br/> <br/> 
<div data-aos="fade-right"  class="bg-gradient-primary"  style={{height:"900px",display:"flex"}}>
    <div className="container">
 {/* Outer Row */}
 <div class="bg-gradient-primary" style={{display:"flex"}}>
  <div class="container">
    <div class="row justify-content-center">
    <div class="col-lg-5 d-none d-lg-block">
    <div class="p-5">
  <div class="box" style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", lineHeight: "1",marginTop:"50px"}}>
    <h3 class="h4 text-gray-900 mb-4" style={{color:"rgb(0 80 204)"}}><b>Adresse</b></h3>
    <p style={{color:"black"}}> <b>4054 rue,yasser arafet</b></p><br/>
    <p style={{color:"black"}}> <b>Sousse, Sahloul</b></p>
  </div>
</div>
<div class="p-5">
  <div class="box" style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", lineHeight: "1" }}>
    <h3 class="h4 text-gray-900 mb-4" style={{color:"rgb(0 80 204)"}}><b>Téléphone</b></h3>
    <p style={{color:"black"}}> <b>+21658855597</b></p>
  </div>
</div>
<div class="p-5">
  <div class="box" style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", lineHeight: "1" }}>
    <h3 class="h4 text-gray-900 mb-4" style={{color:"rgb(0 80 204)"}}><b>Email </b></h3>
    <p style={{color:"black"}}><b>Domestique_Expert@gmail.com </b></p>
  </div>
</div>



</div>

      <div class="col-lg-7">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4" style={{color:"rgb(0 80 204)" , fontSize:"40px"}}><b>Contact Us</b></h1>
                  </div>
                  <form class="user" onSubmit={onSubmitHandler}>
                    <div class="form-group">
                      <b>Your Name (*)</b>
                      <input type="text" class="form-control form-control-user" name='username' placeholder="Your Name" onChange={onChangeHandler}/>
                    </div>
                    <div class="form-group">
                      <b>Your Phone (*)</b>
                      <input type="text" class="form-control form-control-user" name='phone' placeholder="Your Phone" onChange={onChangeHandler}/>
                    </div>
                    <b>Your Email (*)</b>
                    <div class="form-group">
                      <input type="email" class="form-control form-control-user" name='email' placeholder="Your Email" onChange={onChangeHandler}/>
                    </div>
                    <div class="form-group">
                      <b>Subject</b>
                      <input type="text" class="form-control form-control-user" name='subject' placeholder="Type Your Subject" onChange={onChangeHandler}/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" style={{ fontWeight:"bold", fontFamily:"sans-serif"}}>
                        Message
                      </label>
                      <textarea class="form-control" rows="3" name="message" onChange={onChangeHandler}></textarea>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary submit-btn btn-block" type="submit" style={{borderRadius:"0rem",backgroundColor:"rgb(0 80 204)"}} >Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 
          </div>
        </div>
        <Footer/>
        </motion.div>
    
  )
}

export default ContactUs
