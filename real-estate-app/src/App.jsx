import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path='/about' element={About} />
        <Route path='/sign-in' element={SignIn} />
        <Route path="/sign-out" element={SignOut} />
        <Route path="/profile" element={Profile} />
      </Routes>
    </Router>
  )
}

export default App
