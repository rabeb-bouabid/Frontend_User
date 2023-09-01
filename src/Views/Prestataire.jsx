import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import prestataireService from '../services/prestataire.service'
import {motion} from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'
import { FaCertificate } from 'react-icons/fa'
import { RiContactsLine } from 'react-icons/ri'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
const Prestataires = () => {
  const [user, setUser] = useState({ user: null });
  const [userId, setUserId] = useState("");
useEffect(() => {
  const user = localStorage?.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null;
    user && setUserId(user.user?._id ?? null);

}, [])

  const navigate = useNavigate()
  const [commentaire, setCommentaire] = useState("")
const [prestataire,setPrestataires]=useState()
const [feedback,setFeedback]=useState([])
const {id} = useParams()
const getPrestatiresById = () => {
  prestataireService.getPrestatiresById(id)
    .then((res) => {
      console.log(res);
      setPrestataires([res.data.data]);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFeedbackByPrestataire = () => {
  prestataireService.getFeedbackByPrestaId(id).then((res)=>{
    console.log(res)
    setFeedback(res.data.data)
  }).catch((err)=>{
    console.log(err)
  })
}


useEffect(()=>{
  getPrestatiresById()
  getFeedbackByPrestataire()
},[])
const onSubmitHandler=(e)=>{

 e.preventDefault()
 ;
prestataireService.CreateFeedback({commentaire,userId,prestataireId:id }).then((res)=>{
  console.log(res)
 
  getFeedbackByPrestataire()
}).catch((err)=>{
  console.log(err)
})
}
const onChangeHandler=(e)=>{
 setCommentaire(e.target.value)
}



  return (
    <motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    exit={{ x: 100 }}
    >
     <div style={{backgroundColor:"white ",height:"1700px",}}> 
  <Header/>
  <br/><br/><br/><br/><br/><br/>
  <div data-aos="fade-right" className="pb-5 kycc" style={{minHeight:"1500px",}} >

  <div class="container" style={{backgroundColor: "aliceblue",padding: "18px"}}>
  <h4 style={{color:"#146fa9", display: "inline-block", margin: "initial", width: "32%", padding: "10px", whiteSpace: "nowrap"}}><b>Profile Prestataire</b></h4>
  <nav>
    <ul style={{display: "flex",listStyle:"none" , padding: "0", margin:"0", margin: "initial", width: "27%", padding: "10px"}}>
      <ul>
        <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
          <a href="/"><i class="bi bi-house-door"></i>Acceuil</a>
        </li>
        <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
          <a href="/prestataires"><i class="bi bi-chevron-double-right pe-2"></i>Prestataires</a>
        </li>
        <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
          <a ><i class="bi bi-chevron-double-right pe-2"></i>Profile</a>
        </li>
      </ul>
    </ul>
  </nav>
</div>

{prestataire?.map((item) => { 
    return (
<div key={item?._id} class="container" style={{display: "flex",padding: "18px",width:"1200px",height:"1000px",marginTop:"10px"}}>

<div>
<Link to={`/presta/${item?._id}`}>
<div className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"700px",height:"180px",}}>
    <div className="mt-4"></div>
    <div className="mt-3" style={{display: 'flex', flexDirection: 'column',alignItems:"center"}}>
   <img alt={item.Fullname} style={{borderRadius:'7px',display:'flex',width: "112px",marginTop:"-22px",marginRight:" 554px",height:"97px"}} src={'http://localhost:3000/file/imagesPrestataire/'+item.file}/>
      <h5 style={{ color: "#004aad", textAlign: 'center' ,    fontSize: "23px",marginTop:"-93px",marginRight: "202px",fontFamily:'times new roman'}}>  <b> {item.fullname}</b></h5> 
      <h6 style={{ color: 'black', textAlign: 'center' ,marginRight:"56px",marginRight:'281px'}}>{item.servicename}</h6>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaMapMarkerAlt style={{ marginRight: '5px',fontSize:"21px",marginTop: "-7px" }} />
        <h6 style={{ color: 'black', textAlign: 'center',marginTop:"7px",marginRight:"272px",fontSize:"17px" }}>{item.adresse}</h6>
      </div>
      <div className="mt-4"></div>
    </div>
  </div>
  <div className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"700px",height:"130px",}}>
    <div className="mt-4">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h4><b style={{ color: "#004aad"}}>Contactez moi!</b></h4>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}> 
          <FaPhone style={{marginRight: '10px', fontSize: "25px", color: "#004aad"}} />
          <h5>{item.telephone}</h5>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"700px",height:"280px",}}>
    <div className="mt-4">
      <div>
        <h4><b style={{ color: "#004aad",marginRight:"536px" }}>Description</b></h4>
      </div>
      <hr />
      <div style={{display: 'flex', alignItems: 'center'}}> 
        <h5>{item.detail}</h5>
      </div>
    </div>
  </div>
  <div className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"700px",height:"240px",}}>
    <div className="mt-4">
      <div>
        <h4><b style={{ color: "#004aad",marginRight:"536px" }}>Qualification</b></h4>
      </div>
      <hr />
      <div style={{display: 'flex', alignItems: 'center'}}>
        <BsBriefcase style={{marginRight: '10px', fontSize: "25px", color: "#004aad"}} />
        <h5 ><b>Work Experience :</b></h5>
        <h5 style={{marginLeft: '280px'}}>{item.experience}</h5>
      </div>
      <br />
      <div style={{display: 'flex', alignItems: 'center'}}>
        <RiContactsLine style={{ marginRight: '10px', fontSize: '25px', color: '#004aad' }} />
        <h5><b >Certification :</b></h5>
        <h5 style={{marginLeft: '200px'}}>{item.certification}</h5>
      </div>
    </div>
  </div>
</Link>
 </div> 



 <div style={{marginLeft:"40px"}}>
<div className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"400px",height:"250px", gridColumn: '1', gridRow: '1' }}>
  <div>
    <h4><b style={{ color: "#004aad",textAlign:"center", }}>Donnez-nous votre avis:</b></h4>
  </div>
  <hr />
  <form onSubmit={onSubmitHandler}>
  <textarea
  style={{borderRadius:"9px",borderColor:"black"}}
          className="form-control"
          placeholder="commentaire"
          rows="3"
          name="commentaire"
          value={commentaire}
          onChange={onChangeHandler}
        />
<br />
<button type="submit" style={{ fontFamily:"cursive",border: "none", borderRadius: "13px", fontSize: "15px", outline: "none", background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))", fontFamily: "cursive",height:"44px", marginTop:"-30px",width: "33%", color: "white", cursor: "pointer", transition: ".3s", boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}> <b>Register</b></button>
</form>

</div>

<div className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"400px", gridColumn: '1', gridRow: '2' }}>
  <div>
    <h4><b style={{ color: "#004aad",marginRight:"179px",fontFamily:"times new roman" }}>Commentaires</b></h4>
  </div>
  <hr />
  <br /> 
  <div>
    {feedback?.map((commentaire) => (
      <div key={commentaire._id} style={{width:"350px",padding:"5px",backgroundColor:"#d6dadd4a",borderRadius:"2%",marginBottom:"28px",marginTop:"-18px"}}>
         <h6>  <b> par: {commentaire.userId?.username}</b> </h6>
         <p><b>{commentaire.commentaire}</b></p>
       <p><b> {new Date(commentaire.createdAt).toLocaleDateString()}</b></p>
     
      
        
        
        {commentaire.userId?.file && (
          <img style={{borderRadius:"26px",
            marginRight: "281px",
            maxWidth:"46%",
            width:"51px" ,
            marginTop: "-94px",
            height:"51px"
        }} src={"http://localhost:3000/file/imagesUser/" + commentaire.userId?.file} className="img-fluid" alt="Photo de profil" />
        )}
      </div>
    ))}
  </div>
</div>

 </div>


 
</div>

    )
  })}

 </div><Footer/>
 </div>
 </motion.div>
  )
}

export default Prestataires
