import logo from "./logo.svg";
import "./App.css";
import Home from "./Views/Home";
import Layouts from "./Views/Layouts";
import Services from "./Views/Services";
import ContactUs from "./Views/ContactUs";
import ListPrestataires from "./Views/ListPrestataires";
import LoginUser from "./Views/RegisterUser";
import RegisterUser from "./Views/RegisterUser";
import ProfileUser from "./Views/ProfileUser";
import Login from "./Views/Login";
import Réservation from "./Views/Réservation";
import ProfilePrestataire from "./Views/Prestataire"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";


function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Layouts />}></Route>
        </Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/prestataires/:id" element={<ListPrestataires />}></Route>
        <Route path="/prestataires" element={<ListPrestataires />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/Register" element={<RegisterUser />}></Route>
        <Route path="/login/:callback?" element={<Login />}></Route>
        <Route path="/reservation/:id" element={<Réservation />}></Route>
        <Route path="/presta/:id" element={<ProfilePrestataire />}></Route>
        <Route path="/profil" element={<ProfileUser />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
