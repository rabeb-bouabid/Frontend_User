import React, { useEffect, useState ,useRef  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SrvcService from '../services/Srvc.service'
import ReactPlayer from 'react-player';
import {motion} from 'framer-motion'
import AOS from 'aos'
import Slider from 'react-slick'
import { FaArrowRight } from "react-icons/fa"
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
const Layouts = () => {
  const [service,setService]=useState()
  const [connecte,setConnecte]=useState(true)
  const getAllServices=async()=>{
    const array=[]
    SrvcService.getAllServices().then((res)=>{
      //console.log('e',res.data.data)
      setService(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })

   

  }
  useEffect(()=>{
    getAllServices()
  },[])
  useEffect(()=>{AOS.init({duration:2000})})

console.log("service",service)
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => (
    <div className={props.className} style={{ ...props.style, display: 'block', background: 'blue', borderRadius: '50%', paddingTop: '1px' }} onClick={props.onClick} />
  );
  
  const CustomNextArrow = (props) => (
    <div className={props.className} style={{ ...props.style, display: 'block', background: 'blue', borderRadius: '50%', paddingTop: '1px' }} onClick={props.onClick} />
  );
   
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Défilement automatique toutes les 3 secondes
    arrows: true,
    prevArrow: <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />,
    nextArrow: <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />,
  };
  
  
  

  return (
    
    
    <div>
<div>
<motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    exit={{ x: 100 }}
    >
  <Slider ref={sliderRef} {...settings} >
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="assets/images/slider/slide-01.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none pb-5 mb-5 d-md-block">
            <h5 className="text-white fw-bold fs-12 bounceInDown" data-aos="fade-down">Une équipe efficace,fiable et souriante</h5>
           
              <Link to="/prestataires">
              <div
        className="btn mx-auto w-auto fw-bolder px-5 py-3 btn-primary fs-5 bounceInUp"
        style={{
          fontFamily: "cursive",
          border: "none",
          borderRadius: "13px",
          fontSize: "15px",
          height: "57px",
          outline: "none",
          width: "75%",
          background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))",
          color: "white",
          cursor: "pointer",
          transition: ".3s",
          boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
       Voir Plus <i className="bi bi-arrow-right" />
      </div>
  </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/premium-photo/indoor-shot-woman-with-brown-hair-plays-with-baby-room-mother-holding-baby-s-hands-teaching-her-clap-hands-expressing-happiness-motherhood-childhood_176532-22878.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.2.1842048219.1679562959&semt=ais" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none pb-5 mb-5 d-md-block">
            <h5 className="text-white fw-bold fs-12 bounceInDown">Une équipe efficace,fiable et souriante</h5>
            <div className="row text-center mt-3 vbh">
          
            <Link to="/prestataires">
              <div
        className="btn mx-auto w-auto fw-bolder px-5 py-3 btn-primary fs-5 bounceInUp"
        style={{
          fontFamily: "cursive",
          border: "none",
          borderRadius: "13px",
          fontSize: "15px",
          height: "57px",
          outline: "none",
          width: "75%",
          background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))",
          color: "white",
          cursor: "pointer",
          transition: ".3s",
          boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Voir Plus
      </div>
  </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-photo/young-craftsman-building-house_1303-27969.jpg?w=996&t=st=1687605436~exp=1687606036~hmac=3dc0e9876829b0245afce7f37d5cb7fd5a49c6966d047eb0967e89b9f682bdb2" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none pb-5 mb-5 d-md-block">
            <h5 className="text-white fw-bold fs-12 bounceInDown">Une équipe efficace,fiable et souriante</h5>
            <div className="row text-center mt-3 vbh">
          
            <Link to="/prestataires">
              <div
        className="btn mx-auto w-auto fw-bolder px-5 py-3 btn-primary fs-5 bounceInUp"
        style={{
          fontFamily: "cursive",
          border: "none",
          borderRadius: "13px",
          fontSize: "15px",
          height: "57px",
          outline: "none",
          width: "75%",
          background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))",
          color: "white",
          cursor: "pointer",
          transition: ".3s",
          boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Voir Plus
      </div>
  </Link>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{color:"black"}} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </Slider>
  {/* ##################### Slider Starts Here #################### */}
  <div className="pb-5 kycc" >
    <div className="key-features container-fluid pb-5" >
      <div className="container-xl">
        <div className="row key-cover">
          <div className="col-md-3" >

          <div className="bg-white mb-3 shadow-md p-4 text-center " >
              <div className="mt-4"> <img src="https://cdn-icons-png.flaticon.com/512/3843/3843544.png"style={{width:"45px"}} /></div>
              <h5 className="mt-5" style={{color:"rgba(35,35,35,.9)"}}><b>COMMUNICATION FACILE</b></h5>
              <p>La communication en ligne vous permet de rester facilement en contact avec nous !</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white mb-3 shadow-md p-4 text-center">
              <div className="mt-4"><img src='https://play-lh.googleusercontent.com/w7IqEoCT-xHyTrouw0IJrAQ6GRH5awuF2h2iTShhQ-Hs5FOI7JIxaNwPolkEbbDyduFw' style={{width:"47px"}} /></div>
              <h5 className="mt-5" style={{color:"rgba(35,35,35,.9)"}}><b>FIABLE</b></h5>
              <p>Nous examinons rigoureusement tous nos nettoyeurs. Votre maison est entre de bonnes mains.</p>
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white mb-3 shadow-md p-4 text-center">
              <div className="mt-4"><img src='https://cdn-icons-png.flaticon.com/512/889/889140.png'style={{width:"45px"}}  /></div>
              <h5 className="mt-5" style={{color:"rgba(35,35,35,.9)"}}><b>NETTOYAGE DE QUALITÉ</b></h5>
              <p>Nos professionnels qualifiés vont au-delà de chaque tâche. Les nettoyeurs sont évalués et examinés.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white mb-3 shadow-md p-4 text-center">
              <div className="mt-4"><img src='data:image/png;base64,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' style={{width:"51px"}} /></div>
              <h4 className="mt-5" style={{color:"rgba(35,35,35,.9)"}} ><b>PAIEMENT</b></h4>
              <p>Votre Carte est débitée automatiquement après chaque nettoyage. C'est super facile !</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  {/*  ************************* About US Start Here ************************** */}     
  <section className="about-us big-padding bg-white container-fluid">
    <div className="container-xl">
      <div className="row section-title">
       
        <h2 style={{color:'#156fa7',fontFamily:"#156fa7"}}><b>À propos Domestiques Expert</b></h2>
      </div>
      <div className="row">
        <div className="col-md-6 p-4">
          <img src="assets/images/about-1.jpg" alt />
        </div>
        <div className="col-md-6 align-self-center">
          <h3 className="fs-13 fw-bold" style={{fontFamily:'times new roman',color:"#000"}}>Bienvenue chez "Domestiques Expert" </h3>
          <p style={{color:"black"}} className="fs-6">
    Bienvenue dans le monde des services domestiques professionnels offerts par <b style={{color:"#156fa7"}}>Domestique Expert</b>. Avec plus de 30 ans d'expérience dans le secteur du nettoyage, nous sommes fiers d'être une entreprise leader dans le domaine des services de nettoyage en Tunisie. Nous sommes une société du groupe XL Service Companies, ce qui nous confère une expertise solide et une parfaite maîtrise de notre métier. Nous offrons une vaste gamme de services de nettoyage pour les particuliers et les entreprises, y compris les Titres-Services, qui sont disponibles dans toute la Tunisie. Nous sommes passionnés par notre travail et nous nous efforçons toujours de fournir des services de haute qualité à nos clients, en utilisant des produits et des équipements professionnels de pointe. Nous sommes fiers de notre réputation et de la satisfaction de nos clients, et nous sommes prêts à relever tous les défis de nettoyage qui se présentent à nous. Contactez-nous dès maintenant pour découvrir comment nous pouvons vous aider à obtenir un environnement propre et sain à la maison ou au bureau.</p>
        </div>
      </div>
    </div>
  </section>   
  {/*  ************************* Our Services Start Here ************************** */}     
  <section className="about-us oserv big-padding bg-light container-fluid">
    <div className="container-xl">
      <div className="row section-title">
        <h2  style={{fontFamily:"#156fa7",color:"#156fa7"}}><b>Nos Services</b> </h2> 
      </div>
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="row">
            <div className="col-md-3 p-3">
              <img src="assets/images/services/s1.png" alt />
            </div>
            <div className="col-md-9 align-self-center">
              <h5 className="fw-bolder" style={{color:"black"}}>Nettoyage des Sols</h5>
              
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="row">
            <div className="col-md-3 p-3">
              <img src="assets/images/services/s2.png" alt />
            </div>
            <div className="col-md-9 align-self-center">
              <h5 className="fw-bolder" style={{color:"black"}}>Le Nettoyage des Vitres</h5>
             
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="row">
            <div className="col-md-3 p-3">
              <img src="assets/images/services/s3.png" alt />
            </div>
            <div className="col-md-9 align-self-center">
              <h5 className="fw-bolder"  style={{color:"black"}}>Repassage de Vêtements</h5>
            
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="row">
            <div className="col-md-3 p-3">
              <img src="assets/images/services/s4.png" alt />
            </div>
            <div className="col-md-9 align-self-center">
              <h5 className="fw-bolder"  style={{color:"black"}}>Traitement des Déchets</h5>
           
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="row">
            <div className="col-md-3 p-3">
              <img src="assets/images/services/s5.png" alt />
            </div>
            <div className="col-md-9 align-self-center">
              <h5 className="fw-bolder"  style={{color:"black"}}>Aide Ménagère</h5>
         
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="row">
            <div className="col-md-3 p-3">
              <img src="assets/images/services/s6.png" alt />
            </div>
            <div className="col-md-9 align-self-center">
              <h5 className="fw-bolder"  style={{color:"black"}}>Lavage de Voitures</h5>
             
            </div>
            <Link to="/services" style={{marginLeft:"-290px",
    marginTop:"25px"}}>
              <div
        className="btn mx-auto w-auto fw-bolder px-5 py-3 btn-primary fs-5 bounceInUp"
        style={{
          fontFamily: "cursive",
          border: "none",
          borderRadius: "13px",
          fontSize: "15px",
          height: "57px",
          outline: "none",
          width: "75%",
          background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))",
          color: "white",
          cursor: "pointer",
          transition: ".3s",
          boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Voir Plus <i className="bi bi-arrow-right" />
      </div>
  </Link>
          </div>
        </div>
      </div>
    </div>
  </section> 
  <section className="row section-title" style={{ backgroundColor: "aliceblue" }}>
  <div className="container-xl">
    <div className="row">
      <div className="col-md-6 p-4">
        <img style={{ borderRadius: "2rem" }} src="https://img.freepik.com/photos-gratuite/portrait-jeune-homme-publicite-nouveau-smartphone-montrant-appareil-photo-fond-bleu_93675-134707.jpg?size=626&ext=jpg&ga=GA1.1.1842048219.1679562959&semt=ais" alt="" />
      </div>
      <div className="col-md-6 align-self-center">
        <h2 className="fw-bolder" style={{fontFamily:"#156fa7",color:"#156fa7"}}>
          <b>Créez un compte et boostez votre activité</b>
        </h2>
        <p className="fs-6 mb-3">
          Vous êtes un prestataire de services ? Rejoignez-nous, la plateforme incontournable pour trouver de nouveaux clients et augmenter votre visibilité en ligne. Créez votre compte gratuitement dès maintenant et gagnez en visibilité et en notoriété grâce à notre communauté d'utilisateurs à la recherche de services à domicile et de prestataires qualifiés.
          <Link to="/contact">booster votre activité !</Link>
        </p>
      </div>
    </div>
  </div>
</section>

  {/*  ************************* Testimonial Start Here ************************** */}    
   
  {/*  ************************* Blog  Start Here ************************** */}    
  <div id="blog" className="service container-fluid px-4 bg-white py-5">
    <div className="container">
      <div className="section-title row mb-3">
        <h2 className="fw-bolder" style={{fontFamily:"#156fa7",color:"#156fa7"}}> <b>Nos Prestataires</b> </h2>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="serv-cove rounded bg-white p-2">
            <img src="https://img.freepik.com/free-photo/young-beautiful-girl-apron-holding-bucket-with-cleaning-tools-pointing-with-index-finger-it-smiling-confident_141793-28487.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.2.1842048219.1679562959&semt=ais" alt />
            <div className="p-2">
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="serv-cove rounded bg-white p-2">
            <img src="https://img.freepik.com/free-photo/happy-young-male-watering-domestic-plant-leaves-indoor_496169-1382.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.1.1842048219.1679562959&semt=ais" alt />
            <div className="p-2">
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="serv-cove rounded bg-white p-2">
            <img src="https://img.freepik.com/premium-photo/happy-plumber-holding-wrench-sitting-sink_13339-253882.jpg?size=626&ext=jpg&uid=R70365387&ga=GA1.1.1842048219.1679562959&semt=ais" alt />
            <div className="p-2">
             
            </div>
          </div>
        </div>
        <Link to="/prestataires" style={{marginLeft:"480px",
    marginTop:"25px"}}>
              <div
        className="btn mx-auto w-auto fw-bolder px-5 py-3 btn-primary fs-5 bounceInUp"
        style={{
          fontFamily: "cursive",
          border: "none",
          borderRadius: "13px",
          fontSize: "15px",
          height: "57px",
          outline: "none",
          width: "75%",
          background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))",
          color: "white",
          cursor: "pointer",
          transition: ".3s",
          boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Voir Plus <i className="bi bi-arrow-right" />
      </div>
  </Link>
      </div>
    </div>
  </div> 
  </motion.div> 
</div>


  


  

    </div>
  )
}

export default Layouts
