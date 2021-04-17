import {useState, useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import env from 'react-dotenv';


import Tankopedia from './components/Tankopedia';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TankView from './components/TankView';
import PlayerLookup from './components/PlayerLookup';


import './index.css';


const fs = require('fs')
const path = './.env'
const vars = API_KEY=process.env.REACT_APP_API_KEY

fs.writeFileSync(path, vars)





function App() {
  const [tanksList, setTanksList] = useState([])



  useEffect(() =>{
    let callAPI = async () => {

      await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${env.API_KEY}`)
        .then(response => response.json())
        .then(data => setTanksList([data.data][0]))
      }
    callAPI()

  }, [])





  return(
    <BrowserRouter>

      <Navbar />
      <Route exact path="/">
        <Home/>
      </Route>
      <div className="tankopedia">

        <Route path="/tankopedia">
          <Tankopedia
          tanksList={tanksList}
          />
        </Route>


        <Route path="/tankopedia/:id">
          <TankView tanksList={tanksList}/>
        </Route>

      </div>
      <Route path="/players">
        <PlayerLookup/>
      </Route>
    </BrowserRouter>
  )




}

export default App;
