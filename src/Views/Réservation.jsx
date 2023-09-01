import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import reservationService from '../services/Réservation.service'
import { useParams,useNavigate, json } from 'react-router-dom';
import Swal from 'sweetalert2';
import {motion} from 'framer-motion'
import { Carousel } from 'react-responsive-carousel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prestataireService from '../services/prestataire.service';
const Réservation = () => {

  const [selectedPrestataireId, setSelectedPrestataireId] = useState(null);
  const handlePrestataireChange = (event) => {
     const selectedId = event.target.value;
     setSelectedPrestataireId(selectedId);
     setReservation({
      ...reservation,
      PrestataireId:selectedId
    })
   }
  
   const [prestataire,setPrestataire]=useState([])
   const getAllPrestataires=()=>{
     prestataireService.getAllPrestataires().then((res)=>{
       console.log(res)
       setPrestataire(res.data.data)
     }).catch((err)=>{
       console.log(err)
     })
   }
   useEffect(()=>{
     getAllPrestataires()
   },[])
  
   const [data,setData]=useState({})

       const formData = new FormData();
       formData.append('datedebut', data.datedebut);
       formData.append('heure', data.heure);
       formData.append('adresse', data.adresse);
       formData.append('prestataireId',selectedPrestataireId);
       formData.append('serviceName', data.serviceName);
       
      
       
  const sliderRef = useRef(null);
  const CustomPrevArrow = (props) => (
    <div className={props.className} style={{ ...props.style, display: 'block', background: 'blue',borderRadius:"50%",paddingTop:"1px" }} onClick={props.onClick} />
  );
  
  const CustomNextArrow = (props) => (
    <div className={props.className} style={{ ...props.style, display: 'block', background: 'blue',borderRadius:"50%",paddingTop:"1px"  }} onClick={props.onClick} />
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Durée d'autoplay (3 secondes)
    arrows: true,
    prevArrow: <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />,
    nextArrow: <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />,
  };
  
 
  const {id}=useParams()
  const user=JSON.parse(localStorage.getItem('userData'))
  console.log({user})
  const navigate=useNavigate()
  const [reservation,setReservation] =useState({serviceId:id,userId:user.user._id });
console.log({reservation})
console.log({id})
  const onSubmitHandler=(e)=>{
    e.preventDefault()
   ;
  
    Swal.fire({
      title: 'Sure you want to save a new reservation !',
      showDenyButton: true,
      confirmButtonText: 'Send',
      denyButtonText: `cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        reservationService.Createreservation(reservation).then((res)=>{
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

  const onChangeHandler=(e)=>{
    setReservation({
      ...reservation,
      [e.target.name]:e.target.value
    })
    console.log(reservation) 
  }
  console.log('selectedPrestataireId',selectedPrestataireId)
  return (
<motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    exit={{ x: 100 }}
    >
<Header/>
<div  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-102452.jpg?size=626&ext=jpg&ga=GA1.1.1842048219.1679562959&semt=ais')", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
<div className="body" style={{display: "flex",justifyContent: "center", alignItems: "center",height:"800px"}}>
      <div className='box' style={{  marginRight:"100px",maxWidth:"450px", height: "410px", padding: "21px", background: "rgba(125, 199, 222, 0.5)", borderRadius: "10px",paddingTop:"20px" }}>
        <div className='top-header'><br />
          <header style={{ fontFamily: 'times new roman', fontSize: "45px", color: "rgb(23, 111, 168)", display: "flex", justifyContent: "center", padding: "10px 0" }}><b>Réservation</b></header>
        </div>
        <form className="user" onSubmit={onSubmitHandler}>
  <div className="form-group" >
    <input type="date" className="form-control form-control-user" name='datedebut' placeholder="Date Début" onChange={onChangeHandler}  style={{ color: "black", fontFamily: "cursive" }}/>
  </div>
  <div className="form-group row">
  <div className="col-sm-6">
    <input type="time" className="form-control form-control-user" name="heure" id="heure" onChange={onChangeHandler} style={{ color: "black" }} />
  </div>
  <div className="col-sm-6" >
    <input type="text" className="form-control form-control-user" name="adresse" placeholder="Adresse" onChange={onChangeHandler} style={{ color: "black", fontFamily: "cursive" }} />
  </div>
</div>

  <div>

  <select value={selectedPrestataireId} className="form-control form-control-user " style={{borderRadius: "0.35rem",height: "50px",fontSize: "13px",fontWeight: "400"}} onChange={handlePrestataireChange}>
      <option value="">Select a prestataire</option>
      {prestataire.map(prestataire => (
        <option key={prestataire._id} value={prestataire._id}>{prestataire.fullname}</option>
      ))}
    </select>

  </div>
 
  <div className='input-field' style={{ display: "flex", flexDirection: "column", marginBottom: "15px", marginLeft: "78px" }}>
    <button type="submit" style={{ fontFamily:"cursive",border: "none", borderRadius: "13px", fontSize: "15px", height: "45px", outline: "none", width: "75%", background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))", fontFamily: "cursive", color: "white", cursor: "pointer", transition: ".3s", boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}> <b>Envoyer</b></button>
  </div>
</form>


      </div>
      <div style={{width:"600px",height:"550px",marginTop:"150px"}}>
        <Slider ref={sliderRef} {...settings} >
        <div style={{ display: 'flex', justifyContent: 'center',}}>
          <img src="https://img.freepik.com/free-photo/smiling-housekeeper-leaning-kitchen-counter-holding-feather-duster-looking-camera_23-2148222229.jpg?size=626&ext=jpg" alt="Image 1" style={{ width: '693px', height: 'auto' ,borderRadius:"10%"}} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://img.freepik.com/premium-photo/male-plumber-uniform-changes-faucet-kitchen-handyman-with-toolbag-repair-sink-sanitary-equipment-service-home_266732-4494.jpg?size=626&ext=jpg&ga=GA1.1.1842048219.1679562959&semt=sph" alt="Image 2" style={{ width: '693px', height: 'auto' ,borderRadius:"10%"}} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://t3.ftcdn.net/jpg/05/78/75/82/240_F_578758261_MMDn5ncxSGCrt5j3KZN7EVDZKFjYjfVn.jpg" alt="Image 3" style={{ width: '693px', height: 'auto',borderRadius:"10%" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://img.freepik.com/free-photo/alternative-energy-ecological-concept_1157-35707.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.2.1842048219.1679562959&semt=ais" alt="Image 3" style={{ width: '693px', height: 'auto',borderRadius:"10%" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.2.1842048219.1679562959&semt=sph" alt="Image 3" style={{ width: '693px', height: 'auto',borderRadius:"10%" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://img.freepik.com/premium-photo/furniture-repair-assembly-concept_85869-6888.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.1.1842048219.1679562959&semt=ais" alt="Image 3" style={{ width: '693px', height: 'auto',borderRadius:"10%" }} />
        </div>
      </Slider>
    </div>
    </div>
    </div>
  

    <Footer />
    </motion.div>
  )
}

export default Réservation
