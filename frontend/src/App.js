
import './App.css';


import { useState } from "react";
import{  BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navbar,{NavbarPhone} from './components/Navbar';
import Create from './components/Create';
// import Read from './components/Read';
import Read2 from './components/Read2';
// import Update from './components/Update';
import Update2 from './components/Update2';
import Table from './components/Table';
import Create2 from './components/Create2';



function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  // console.log(menuOpen);
 
  return (

    <div className="App">

      <Router>
           <NavbarPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
           <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

          <Routes>
             <Route path="/" element={<Create />} />
             <Route path="/2" element={<Create2 />} />
             {/* <Route path="/:id" element={<Update />} /> */}
             <Route path="/:id" element={<Update2 />} />    
             {/* <Route path="/all" element={<Read />} />     */}
             <Route path="/all" element={<Read2 />} />    
             <Route path="/table" element={<Table />} />     
          </Routes>


      </Router>
      </div>
   
  );
}

export default App;
