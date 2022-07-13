// import Topbar from "/components/topbar/Topbar";
import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
// import Portfolio from "./components/portfolio/Portfolio"
import Portfolio from "./components/Portfolio/Portfolio.jsx";
// import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
// import Contact from "./components/contact/Contact";
import Contact from "./components/Contact/Contact.jsx";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";

// import Menu from "./components/menu/Menu";
// import Menu from "./components/men"



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
      <div className="app">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <Intro/>
            <Portfolio/>
            {/* <Works/> */}
            <Testimonials/>
            {/* <div style={containerStyles}>
              <Slider slides={slides} />
            </div> */}

            <Contact/>
          </div>
      </div>
  );
}

export default App;