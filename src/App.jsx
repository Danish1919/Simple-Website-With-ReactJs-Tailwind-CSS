import Home from "/components/Home"
import Header from "/components/Header"
import { Routes, Route } from "react-router-dom";
import About from "/components/About";
import ContactUs from "/components/ContactUs";
import Blog from "/components/Blog";
import Reviews from "/components/Reviews";
import Footer from  "/components/Footer";


function App() {


  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Reviews" element={<Reviews />}></Route>

        </Routes>
        <Footer />
      </div>


    </>
  )
}

export default App
