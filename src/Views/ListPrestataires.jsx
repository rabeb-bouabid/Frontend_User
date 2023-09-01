import React, { useEffect, useState } from 'react'
import prestataireService from '../services/prestataire.service'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import Rating from 'react-rating'
import SrvcService from '../services/Srvc.service'
import {motion} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const ListPrestataires = () => {
  const [service,setService]=useState()
  const {id} = useParams()
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 12;

  const getAllServices=()=>{
    SrvcService.getAllServices().then((res)=>{
      console.log(res)
      setService(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllServices()
  },[])

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = service?.filter((el) => {
    if (inputText === '') {
        return el;
    } else {
        return el.ServiceName.toLowerCase().includes(inputText)
    }
})
  const [prestataire,setPrestataires]=useState()
  const getAllPrestataires=()=>{
    prestataireService.getAllPrestataires().then((res)=>{
      console.log(res)
      setPrestataires(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllPrestataires()
  },[])
 const getPrestatiresByService=()=>{
    prestataireService.getPrestatiresByService(id).then((res)=>{
      console.log(res)
      setPrestataires(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getPrestatiresByService()
  },[])
  useEffect(()=>{AOS.init({duration:2000})})


  //pagination
const totalPages = Math.ceil(prestataire?.length / rowsPerPage);
const handleClickNext = () => {
  setCurrentPage(currentPage + 1);
};

const handleClickPrev = () => {
  setCurrentPage(currentPage - 1);
};

const startIndex = currentPage * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const currentPageData = prestataire?.slice(startIndex, endIndex);
  return (
   
    <motion.div initial={{ x: -100 }}
     animate={{ x: 0 }}
     exit={{ x: 100 }} 
     style={{backgroundColor:"white ",height:"1700px"}}> 
    
  <Header/>
  <br/><br/><br/><br/><br/><br/>
  <div data-aos="fade-right" className="pb-5 kycc" style={{minHeight:"1500px",}} >
  <div data-aos="fade-right" class="container" style={{backgroundColor: "aliceblue",padding: "18px"}}>
  <h4 style={{color:"#146fa9", display: "inline-block", margin: "initial", width: "32%", padding: "10px", whiteSpace: "nowrap"}}><b>Nos prestataires sur la zone de Gouvernorat Tunis</b></h4>
  <nav>
    <ul style={{display: "flex",listStyle:"none" , padding: "0", margin:"0", margin: "initial", width: "27%", padding: "10px"}}>
      <ul>
        <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
          <a href="/"><i class="bi bi-house-door"></i>Acceuil</a>
        </li>
        <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
          <a href="/services"><i class="bi bi-chevron-double-right pe-2"></i>Prestataires</a>
        </li>
      </ul>
    </ul>
  </nav>
</div>

<div className="filter-container" style={{ position: "relative" }}>
  <div className="bg-white mb-3 shadow-md p-4 filter-box" style={{ width: "334px", height: "609px", overflow: "auto", backgroundColor: "lightblue", width: "334px", height: "609px", overflow: "auto", marginLeft: "135px" }}>
    <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#146fa9" }}><b>Filtres de recherche</b></h2>
    <div style={{ display: "flex", alignItems: "center", marginRight: "20px", marginBottom: "5px" }}>
      <div style={{ position: "relative" }}>
        <input type="text" onChange={inputHandler} placeholder='ServiceName' style={{ flex: "1", marginRight: "61px", padding: "12px", borderRadius: "8px" }} />
        <i className="fa fa-search" style={{ cursor: "pointer", color: "#fff", fontSize: "2.2em", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", height: "50px", border: "1px solid #ccc", borderRadius: "7px", backgroundColor: "#336ebd", boxShadow: "0px 0px 5px #aaa", position: "absolute", top: 0, right: 0, bottom: 0, margin: "auto", padding: "5px" }}></i>
      </div>
    </div>
    <div>
      <table className="table table-hover">
        <tbody>
          {filteredData?.map((item, index) => {
            return (
              <tr id={`trow_${index}`} key={index}>
                <td className="text-center" style={{ display: "flex", justifyContent: "center" }}>
                  <img style={{ width: '50px' }} src={"http://localhost:3000/file/imagesService/" + item.file} />
                </td>
                <td>
                  <strong>
                    <Link to={`/services`}>{item.ServiceName}</Link>
                  </strong>
                </td>
                <td className="text-center">
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>





    <br/><br/><br/><br/>

    <div className="key-features container-fluid pb-5" style={{marginLeft:"325px"}}>
  <div className="container-xl" style={{maxWidth:"1443px"}}>
 
    <div className="row key-cover d-flex justify-content-center" style={{width:"990px",marginTop:"-697px",marginLeft:"25px",display:"flex",maxWidth:"100%",maxHeight:"1339px"}}>
    {currentPageData?.map((item, index) => {
        return (
          <div key={item.id} style={{width:"350px",marginRight:"10px"}}>
               <Link to={`/presta/${item?._id}`}>
               <div className="bg-white mb-3 shadow-md p-4 text-center" style={{ borderRadius: "1rem", height: "164px", backgroundColor: "#ccc", marginTop: "-4px" }}>
               <div className="mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img alt={item.fullname} style={{ width: '96px', height: '89px', borderRadius: '7px', marginRight: '17px',marginTop: "-6px" }} src={'http://localhost:3000/file/imagesPrestataire/' + item.file} />
      <div>
        <h5 style={{ color: '#336ebd', textAlign: 'center' }}>{item.fullname}</h5>
        <h6 style={{ color: 'black', textAlign: 'center' ,marginRight:"42px"}}>{item.servicename}</h6>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaMapMarkerAlt style={{ marginRight: '5px',fontSize:"21px",marginTop: "-7px" }} />
          <h6 style={{ color: 'black', textAlign: 'center' }}>{item.adresse}</h6>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</Link>
</div> 
        )
      })}
<div className="row justify-content-center pagination-container">
  <div className="col-md-8">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <button className="page-link" onClick={handleClickPrev}>
            Prev
          </button>
        </li>
        {totalPages > 0 &&
          Array.from(Array(totalPages).keys()).map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            </li>
          ))}
        <li
          className={`page-item ${
            currentPage === totalPages - 1 ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={handleClickNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</div>

    </div>
  </div>
</div>



 </div> <Footer/> 
 </motion.div>

  )
}

export default ListPrestataires
