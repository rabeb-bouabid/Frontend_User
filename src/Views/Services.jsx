import React, { useEffect, useState } from 'react'
import SrvcService from '../services/Srvc.service'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
const user=JSON.parse(localStorage.getItem('userData'))
const [service,setService]=useState()
const [currentPage, setCurrentPage] = useState(0);
const rowsPerPage = 16;

const getAllServices=()=>{
    SrvcService.getAllServices().then((res)=>{
      console.log(res.data)
      setService(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllServices()
  },[])
  useEffect(()=>{AOS.init({duration:2000})})


  const totalPages = Math.ceil(service?.length / rowsPerPage);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = service?.slice(startIndex, endIndex);

  return (
    <div style={{backgroundColor:"white ",height:"1700px",}}> 
  <Header/>
  <br/><br/><br/><br/><br/><br/>
  <div data-aos="fade-right" className="text-start" style={{minHeight:"1500px"}} >
  <div class="container" style={{backgroundColor: "aliceblue",padding: "18px"}}>
    <h4 style={{color:"#146fa9", margin: "initial", width: "32%", padding: "10px"}}><b>Nos Services</b></h4>
    <nav>
      <ul style={{listStyle:"none" , padding: "0", margin:"0", margin: "initial", width: "27%", padding: "10px"}}>
        <li>
          <ul>
            <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
              <a href="/"><i class="bi bi-house-door"></i>Acceuil</a>
            </li>
            <li style={{display: "inline-block", color: "black", fontSize: "15px", fontWeight: "bold"}}>
              <a href="/services"><i class="bi bi-chevron-double-right pe-2"></i> Services</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <br/><br/><br/><br/>

  <div className="key-features container-fluid pb-5">
    <div className="container-xl">
      <div className="row key-cover d-flex justify-content-center">
        {currentPageData?.map((item, index) => {
          return (
            <div  key={item.id} className="col-md-3" style={{marginRight: "-36px",marginBottom: "80px"}}>
              <div  className="bg-white mb-3 shadow-md p-4 text-center" style={{borderRadius:"25px",width:"173px",height:"200px",background:"red !important"}}>
                <Link to={`/prestataires/${item?._id}`}>
                  <div  className="mt-4"><img style={{width:'65px',marginTop:"-39px",}} src={"http://localhost:3000/file/imagesService/" + item.file} /></div>
                  <div className="mt-3" style={{display: 'flex', flexDirection: 'column',alignItems:"center"}}>
                    <h4  style={{color:"black",fontSize:"15px"}}><b>{item.ServiceName}</b></h4> 
                    <div className="mt-4">
                      {user ? (
                        <Link to={`/reservation/${item?._id}`}>
                          <button type="submit" style={{ padding: "7px", width:"116%", borderRadius:"10px",background: "rgb(131 191 236)", color: "#fff", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", cursor: "pointer", transition: "transform 0.2s" }}
                            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                            <b style={{color:"black"}}>Réserver</b>
                          </button>
                        </Link>
                      ) : (
                        <Link to='/login'> 
                          <button type="submit" style={{ transition:"0.3s",padding: "7px", width:"116%", borderRadius:"10px",background: "rgb(131 191 236)", color: "#fff", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", cursor: "pointer", transition: "transform 0.2s" }}
                            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                            <b style={{color:"black"}}>Réserver</b>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className="row justify-content-center text-center">
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
              <li className={`page-item ${currentPage === totalPages - 1 ? "disabled" : ""}`}>
                <button  className="page-link" onClick={handleClickNext}>
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






<Footer/>
      </div>
  )
}


export default Services
