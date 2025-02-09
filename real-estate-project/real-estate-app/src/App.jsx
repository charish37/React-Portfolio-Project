import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SignUP from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUP/>} />
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
