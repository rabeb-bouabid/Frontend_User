import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import loginService from '../services/login.service';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import "./Image.css"

const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [Image, setImage] = useState({});
  const [errors, setErrors] = useState({});
  const onChangeHandlerImage = (e) => {
    e.preventDefault();
    setImage(e.target.files);
  };

  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // Ajout de la variable isRegistered

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const formData = new FormData();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    formData.append('username', data.username);
    formData.append('nom', data.nom);
    formData.append('prenom', data.prenom);
    formData.append('email', data.email);
    formData.append('adresse', data.adresse);
    formData.append('password', data.password);
    for (let i = 0; i < Image.length; i++) {
      formData.append('file', Image[i]);
    }

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vous inscrire ?',
      showDenyButton: true,
      confirmButtonText: 'Oui',
      denyButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        loginService.signup(formData)
          .then((res) => {
            console.log(res);
            navigate('/login');
    
            Swal.fire({
              title: 'Inscription réussie',
              text: 'Inscription effectuée avec succès',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((err) => {
            console.error(err);
            // Gérer l'erreur de l'inscription
          });
      } else if (result.isDenied) {
        // L'utilisateur a choisi de ne pas s'inscrire
      }
    });
  }    

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!data.username) {
      errors.username = "Le nom d'utilisateur est obligatoire";
      isValid = false;
    }

    if (!data.nom) {
      errors.nom = "Le nom est obligatoire";
      isValid = false;
    }

    if (!data.prenom) {
      errors.prenom = "Le prénom est obligatoire";
      isValid = false;
    }

    if (!data.email) {
      errors.email = "L'adresse email est obligatoire";
      isValid = false;
    }

    if (!data.password) {
      errors.password = "Le mot de passe est obligatoire";
      isValid = false;
    }

    if (!data.adresse) {
      errors.adresse = "L'adresse est obligatoire";
      isValid = false;
    }

    if (!Image.length) {
      errors.file = "Votre photo est obligatoire";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: 100 }}>
      <Header />
      <div
        className="body"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/blonde-hair-young-cleaner-woman-holding-spray-bottle-napkin-blue-surface_23-2148222317.jpg?size=626&ext=jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ToastContainer /> {/* Ajout du composant ToastContainer */}
        {isRegistered ? (
          <div className="success-message">
            <p>Votre inscription a été effectuée avec succès!</p>
            <p>Vous pouvez maintenant vous connecter.</p>
            <Link to="/Login">Se connecter</Link>
          </div>
        ) : (
          <div
            className="box"
            style={{
              marginTop: "101px",
              width: "540px",
              height: "547px",
              padding: "21px",
              background: "rgba(125, 199, 222, 0.5)",
              borderRadius: "10px",
              marginLeft: "-824px",
            }}
          >
            <div className="top-header">
              <br />
              <header
                style={{
                  fontFamily: "times new roman",
                  fontSize: "45px",
                  color: "rgb(23, 111, 168)",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 0",
                }}
              >
                <b>Sign Up</b>
              </header>
            </div>
            <form className="user" onSubmit={onSubmitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  name="username"
                  placeholder="Votre nom d'utilisateur (*)"
                  onChange={onChangeHandler}
                />
                {errors.username && (
                  <div style={{ color: "red" }}>{errors.username}</div>
                )}
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    name="nom"
                    placeholder="Votre nom"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    name="prenom"
                    placeholder="Votre prénom"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  name="email"
                  placeholder=" Votre adresse email (*)"
                  onChange={onChangeHandler}
                />
                {errors.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control form-control-user"
                      name="password"
                      placeholder="Mot de Passe (*)"
                      onChange={onChangeHandler}
                    />
                   <div style={{ position: "relative" }}>
  <FontAwesomeIcon
    icon={showPassword ? faEyeSlash : faEye}
    className="position-absolute top-50 start-2 translate-middle-y"
    style={{ cursor: "pointer", zIndex: "1", marginLeft: "90%", marginTop: "-39px" }}
    onClick={() => setShowPassword(!showPassword)}
  />
</div></div>
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>
                <div className="col-sm-6">
                  <input
                    type="Text"
                    className="form-control form-control-user"
                    name="adresse"
                    placeholder=" Votre adresse"
                    onChange={onChangeHandler}
                  />
                  {errors.adresse && (
                    <div style={{ color: "red" }}>{errors.adresse}</div>
                  )}
                  <br />
                </div>
              </div>
              <label
                className="label-cat"
                style={{ color: "#176fa8", marginLeft: "70px" }}
              >
                {" "}
                Image :{" "}
              </label>
              <input
                className="input-cat"
                type="file"
                name="file"
                onChange={onChangeHandlerImage}
             
              />
              {errors.file && (
                <div style={{ color: "red" }}>{errors.file}</div>
              )}
              <br />
              <br />
              <div
                className="input-field"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "15px",
                  marginLeft: "78px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    fontFamily: "cursive",
                    border: "none",
                    borderRadius: "13px",
                    fontSize: "15px",
                    height: "45px",
                    outline: "none",
                    width: "75%",
                    background:
                      "linear-gradient(to right, rgb(23, 111, 168), rgb(59, 183, 253))",
                    fontFamily: "cursive",
                    color: "white",
                    cursor: "pointer",
                    transition: ".3s",
                    boxShadow: "1px 5px 7px 1px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Inscription
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "#176fa8",
                }}
              >
                Vous avez déjà un compte?{" "}
                <Link
                  to="/Login"
                  style={{
                    textDecoration: "none",
                    color: "#176fa8",
                    fontWeight: "bold",
                  }}
                >
                  Connectez-vous
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default RegisterUser;