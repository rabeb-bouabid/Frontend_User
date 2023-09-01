import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LoginUserService from '../services/login.service'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Swal from "sweetalert2";
import loginService from '../services/login.service'
import 'boxicons/css/boxicons.min.css'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { callback } = useParams();
  console.log("params", callback);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const [data,setData]=useState({})
    const onChangeHandler=(e)=>{
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
      console.log(data)
    }
    const onSubmitHandler = (event) => {
      event.preventDefault();
      loginService.signin(data)
        .then((result) => {
          console.log(result);
          if (result.data !== '') {
            localStorage.setItem("userData", JSON.stringify(result.data));
            Swal.fire({
              title: 'Connexion réussie',
              text: 'Vous êtes connecté avec succès',
              icon: 'success',
            }).then(() => {
              navigate('/');
            });
          } else {
            Swal.fire({
              title: 'Erreur de connexion',
              text: 'Nom d\'utilisateur ou mot de passe incorrect',
              icon: 'error',
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: 'Erreur de connexion',
            text: 'Nom d\'utilisateur ou mot de passe incorrect',
            icon: 'error',
          });
        });
    };
      
  return (
    
    <motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    exit={{ x: 100 }}
   >
    <Header/>
    <div className="body" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-young-woman-holding-plastic-wiper-standing-front-blue-surface_23-2148222335.jpg?w=1060&t=st=1686184831~exp=1686185431~hmac=4bcc9eb07a472df9576f795f7c69a8bea73dc866fd50e9f3d579115f4ce8088b')", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <ToastContainer />
  <div className='box' style={{ marginTop: "91px", width: "460px", height: "430px", padding: "21px", background: "rgb(125, 199, 222, 0.5)", borderRadius: "10px", marginLeft: "-550px" }}>
    <div className='top-header'><br />
      <header style={{ fontFamily: 'times new roman', fontSize: "45px", color: "rgb(23, 111, 168)", display: "flex", justifyContent: "center", padding: "10px 0" }}><b>Login</b></header>
    </div>
    <form method="post" onSubmit={onSubmitHandler}>
      <div className='input-field' style={{ fontSize: "17px", marginRight: "-24px", display: "flex", flexDirection: "column", marginBottom: "15px", marginLeft: "25px" }}>
        <input type="text" name='username' placeholder="Username" required style={{ height: "50px", width: "85%", border: "none", outline: "none", color: "black", borderRadius: "30px", padding: "0 0 0 42px", background: "white", transition: "box-shadow 0.3s" }} onChange={onChangeHandler} onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #176fa8"} onBlur={(e) => e.target.style.boxShadow = "none"} />
        <i className='bx bx-user' style={{ position: "relative", top: "-39px", left: "17px", color: "black", fontSize: "25px" }}></i>
      </div>
      <div className='input-field' style={{ fontSize: "17px", marginRight: "-24px", display: "flex", flexDirection: "column", marginBottom: "15px", marginLeft: "25px" }}>
        <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" required style={{ height: "50px", width: "85%", border: "none", outline: "none", borderRadius: "30px", color: "black", padding: "0 0 0 42px", background: "white", transition: "box-shadow 0.3s" }} onChange={onChangeHandler} onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #176fa8"} onBlur={(e) => e.target.style.boxShadow = "none"} />
        <i className='bx bx-lock-alt' style={{ position: "relative", top: "-39px", left: "17px", color: "black", fontSize: "25px" }}></i>
      </div>
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className="position-absolute top-50 start-2 translate-middle-y"
        style={{ cursor: "pointer", zIndex: "1", marginLeft: "330px", marginTop: "121px", marginLeft: "335px" }}
        onClick={() => setShowPassword(!showPassword)}
      />
      <div className='left' style={{ display: "flex", marginTop: "-19px", marginLeft: "42px" }}>
        <input type="checkbox" />
        <label htmlFor="check" style={{ color: "#176fa8", textDecoration: "none" }}>Remember Me</label>
      </div>
      <br />
      <div className='input-field' style={{ display: "flex", flexDirection: "column", marginBottom: "15px", marginLeft: "78px" }}>
        <button type="submit" style={{ border: "none", borderRadius: "30px", fontSize: "15px", height: "45px", outline: "none", width: "75%", background: "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))", fontFamily: "cursive", color: "white", cursor: "pointer", transition: ".3s", boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}> <b>login</b></button>
      </div>
    </form>
    <div type="submit" className="bottom" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "small", marginTop: "10px" }}>
    </div>
    <div className="text-center">
      <a className="small" href="/Register"><ul>Create an Account? SignUp!</ul></a>
    </div>
  </div>
</div>








        
</motion.div>



  )

  }
export default Login
