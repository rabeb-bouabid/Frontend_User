import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Table, Pagination, Form, FormControl, Button } from "react-bootstrap";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import RéservationService from "../services/Réservation.service";
import loginService from "../services/login.service";
import Swal from "sweetalert2";
import {motion} from 'framer-motion'
import {  AiFillDelete, AiFillEdit, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import prestataireService from "../services/prestataire.service";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
const style = {
  position: 'absolute',

  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const initialState = {
  datedebut: '',
  heure: '',
  adresse: '',
  PrestataireId: '',
  _id: ''
}
const ProfileUser = () => {
  const [user, setUser] = useState({ user: null });
  const [paginatedData, setpaginatedData] = useState();

  const [dataAll, setDataAll] = useState([]);
  const [dataOne, setDataOne] = useState(initialState);
  const [date, setDate] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
 




  const onChangeHandler=e=>{
    const { name, value } = e.target
    setDataOne({
      ...dataOne,
      [name]: value
    })
    console.log("dataOne",dataOne) 
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

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    RéservationService.updateReservation(dataOne._id,dataOne)
    setIsOpen(false)
    setTimeout(() => {
      
      getUser()
    }, 1000);
    
    toast.success("réservation mis a jour avec succés ");

  }

  const [selectedPrestataireId, setSelectedPrestataireId] = useState(null);
  const handlePrestataireChange = (event) => {
     const selectedId = event.target.value;
     setSelectedPrestataireId(selectedId);
     setDataOne({
      ...dataOne,
      PrestataireId:selectedId
    })

    
      prestataireService.getPrestatiresById(selectedId)
        .then((res) => {
          console.log(res);
          setName(res.data.data.fullname);
        })
        .catch((err) => {
          console.log(err);
        });

   }
   
  // const formData = new FormData();
  // formData.append('datedebut', data.datedebut);
  // formData.append('heure', data.heure);
  // formData.append('adresse', data.adresse);
  // formData.append('prestataireId',selectedPrestataireId);
  // formData.append('serviceName', data.serviceName);

  const showModal = (val1,val2) => {
    setIsOpen(true);
    setDataOne({ ...dataOne,serviceId:val1})
    setDataOne({ ...dataOne,userId:val2})
    RéservationService
        .getReservationByID(val1)
        .then((res) => {
        
          //setDate((res.data.data.datedebut).toLocaleDateString())
          setDataOne(res.data.data);
          setName(res?.data?.data?.PrestataireId?.fullname)
          var created_date = new Date(res.data.data.datedebut);
          var year = created_date.getFullYear();
          const month=created_date.getMonth()+1
          const day= created_date.getDate();
          const datedb=day+'/'+month+'/'+year
          setDate(datedb)
          console.log(res.data.data)
     
        
        })
        .catch((err) => {})
  }

  const hideModal = () => {
    setIsOpen(false);

  }
const getUser=()=> {
  const user = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : false;

  if (user) {
    setUser(user);
    console.log("(user?.user?._id)",(user.user._id))
    RéservationService
      .getReservationByUserID(user.user._id)
      .then((res) => {
        console.log("res",res.data.data)
        setDataAll(res.data.data);
      
      })
      .catch((err) => {});
  }

}

  useEffect(() => {
    getUser()
   
  }, []);
  const handleInputChange = (e) => {
    console.log("+++", user, e.target.name, e.target.value);

    setUser((prevUser) => ({
      ...prevUser,
      user: {
        ...prevUser.user,
        [e.target.name]: e.target.value,
      },
    }));
  };


  const updateProfilAction = () => {
    loginService
      .updateProfil(user?.user?._id, user?.user)
      .then((res) => {
        Swal.fire({
          title: "Votre compte est mis a jour",
          showDenyButton: false,
          confirmButtonText: "D'accord",
        });
        let user = JSON.parse(localStorage.getItem("userData"));
        user.user = res.data.data;
        localStorage.setItem("userData", JSON.stringify(user));
        setUser(...user.user, res.data.data);
      })
      .catch((err) => {});
  };
  
  const deleteReservation=(id)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        RéservationService.deleteReservation(id).then((res)=>{
          
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  }

  
  return (
    
    <div>
    <motion.div initial={{ x: -100 }}
     animate={{ x: 0 }}
     exit={{ x: 100 }} 
     style={{minHeight:"1200px"}}> 
      <Header/>
      <div className="row mt-5">
  <div className="col-md-12 d-flex justify-content-center">
   
  </div>
</div>

<div className="container">
<ToastContainer />
  <div className="row justify-content-center mt-5">
    <div className="col-md-6" style={{marginTop: "-75px",marginRight:"150px"}}>
      <div className="card" style={{borderRadius: "1.25rem",marginTop:"170px",border:"4px solid #000"}}>
        <div className="card-body">
        <img
      style={{  borderRadius:"49%",width: "150px", height: "100px",marginTop:"-105px",marginRight:"90px",marginLeft:"190px"}}
      src={"http://localhost:3000/file/imagesUser/" + user?.user?.file}
      alt="Profile"
     
    />
          <h5 className="card-title" style={{color:"#156fa7"}}> <b>Profile Information</b> </h5>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{color:"black",fontSize:"16px",fontFamily:"calibri"}}>
             Votre nom d'utilisateur
            </label>
            <input
              type="text"
              value={user?.user?.username}
              className="form-control"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label" style={{color:"black",fontSize:"16px",fontFamily:"calibri"}}>
              Votre nom
            </label>
            <input
              type="text"
              value={user?.user?.nom}
              className="form-control"
              name="nom"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label" style={{color:"black",fontSize:"16px",fontFamily:"calibri"}}>
              Votre prénom
            </label>
            <input
              type="text"
              value={user?.user?.prenom}
              className="form-control"
              name="prenom"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{color:"black",fontSize:"16px",fontFamily:"calibri"}}>
              Votre email
            </label>
            <input
              type="email"
              value={user?.user?.email}
              className="form-control"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ville" className="form-label" style={{color:"black",fontSize:"16px",fontFamily:"calibri"}}>
              Votre ville
            </label>
            <input
              type="text"
              value={user?.user?.adresse}
              className="form-control"
              name="adresse"
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2" style={{width:"120px"}}>
            <button
              type="submit"
              onClick={updateProfilAction}
              className="btn btn-primary"
            >
              Mettre à jour
            </button>
          </div>
        </div>
      </div>
    </div>
  

  

    <div className="row mt-5">
  <div className="col-md-10 offset-md-1" >
    <div className="card" style={{borderRadius: "1.25rem",border:"4px solid #000"}}>
      <div className="card-body" >
        <h5 className="card-title" style={{color:"#156fa7"}}> <b>Réservations</b> </h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Référence Réservation</th>
              <th>Date Réservation</th>
              <th>Heure Réservation</th>
              <th>Adresse</th>
              <th>Prestataire Name</th>
              <th>Image Prestataire </th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataAll?.map((item, index) => (
              <tr key={item._id}>
                <td className="text-center">
                  <strong>{index + 1}</strong>
                </td>
                <td>
                  <strong>
                    {new Date(item.datedebut).toLocaleDateString()}
                  </strong>
                </td>
                <td>
                  <strong>{item.heure}</strong>
                </td>
                <td>
                  <strong>{item.adresse}</strong>
                </td>
                <td>
                  <strong>{item.PrestataireId.fullname}</strong>
                </td>
                <td className="text-center">
                  <img
                    style={{ width: '90px' }}
                    src={"http://localhost:3000/file/imagesprestataire/" + item.PrestataireId.file}
                    alt="Service"
                  />
                </td>
               
                <td className="text-center">
                
                    
         <div>

          <Modal
            open={isOpen}
            onClose={hideModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <div className='Ajouter-form'>
              <h3 style={{color:"#1c79b4"}} > <b>Update Réservation</b></h3>
              <hr />
              <form className="user" onSubmit={onSubmitHandler}>
  <div className="form-group" >
    <input type="date" className="form-control form-control-user" name='datedebut'  onChange={onChangeHandler}  value={new Date(dataOne?.datedebut).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })} style={{ color: "black", fontFamily: "cursive" }}/>
  </div>
  <div className="form-group row">
  <div className="col-sm-6">
    <input type="time" className="form-control form-control-user" name="heure" id="heure" onChange={onChangeHandler} value={dataOne?.heure} style={{ color: "black" }} />
  </div>
  <div className="col-sm-6" >
    <input type="text" className="form-control form-control-user" name="adresse"onChange={onChangeHandler} value={dataOne?.adresse} style={{ color: "black", fontFamily: "cursive" }} />
  </div>
</div>

  <div>
  <div className="col-sm-6" >
    <input type="text" disabled className="form-control form-control-user"   value={name} style={{ color: "black", fontFamily: "cursive" }} />
  </div>
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

            </Box>
          </Modal>
        </div> 

        <span display="flex" gap="1" justifyContent="center">
  <button onClick={() => showModal(item._id, user.user._id)} className="btn btn-primary">
    <i className="bi bi-pencil-fill"></i>
  </button>
  <Button onClick={() => deleteReservation(item._id)} style={{backgroundColor:'red',borderColor:"red"}} className="btn btn-danger ml-2">
    <i className="bi bi-trash-fill"></i>
  </Button>
</span>



                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</motion.div>

<Footer />
</div>


   
  )
}

export default ProfileUser
