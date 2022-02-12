import { React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Children from "./components/pages/Children";
import Contact from "./components/pages/Contact";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Product from "./components/Product";
import SideNav from "./components/SideNav";

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
      setShowModal(prev => !prev)
  }

  const [click, setClick] = useState(false)

  const handleClick = () => {
      setClick(!click)
  }

  const finalCheckout = () => {
    setCounter(0)
    console.log(count)
  }
 


  let [count, setCounter] = useState(0)

    const CounterInc = () => {
        setCounter(count + 1)
        
    }
    const CounterDec = () => {
    setCounter(count - 1)
}
  return (

   <>
     <BrowserRouter>
     <SideNav click={click} />
     
     <Nav click={click} setClick={setClick} 
     handleModal={handleModal} handleClick={handleClick}
     showModal={showModal} setShowModal={setShowModal} count={count} setCounter={setCounter} />
     <Routes>
     <Route path='/' exact element={<Product finalCheckout={finalCheckout} count={count} setCounter={setCounter} CounterDec={CounterDec} CounterInc={CounterInc} /> } />
     <Route path='/men' exact element={<Men /> } />
     <Route path='/women' exact element={<Women /> } />
     <Route path='/about' exact element={<About /> } />
     <Route path='/contact' exact element={<Contact /> } />
     <Route path='/children' exact element={<Children /> } />

       
      </Routes>
     </BrowserRouter>
   </>
  
  );
};
export default App;
