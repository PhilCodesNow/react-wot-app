import {useState, useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";


import Tankopedia from './components/Tankopedia';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TankView from './components/TankView';

import './index.css';





const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [tanksList, setTanksList] = useState([])



  useEffect(() =>{
    let callAPI = async () => {

      await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${API_KEY}`)
        .then(response => response.json())
        .then(data => setTanksList([data.data][0]))
      }
    callAPI()

  }, [])




  return(
    <BrowserRouter>

      <Navbar/>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/tankopedia">
        <Tankopedia
        tanksList={tanksList}
        />
      </Route>

      <Route path="/tankopedia/:id">
        <TankView tanksList={tanksList}/>
      </Route>

    </BrowserRouter>
  )




}

export default App;
