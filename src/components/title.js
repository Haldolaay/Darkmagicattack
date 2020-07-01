import React from 'react'
import logo from './pic/yugiohlogo.png'
import puzzle from './pic/puzzle.png'
import puzzle2 from './pic/puzzle2.png'
import puzzle3 from './pic/puzzle3.png'
import puzzle4 from './pic/puzzle4.png'
import './title.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import { FaBeer } from 'react-icons/fa';
export default function Title(){

    return(
        <div style = {{backgroundColor: "##95cded"}}>
            <div className = "container">
                <button>
        <img src ={logo} />
        </button>
        <button>
        <img src = {puzzle}/>
          Home
        </button>
        <button>
        <img src = {puzzle2}/>
          Login
        </button>
        <button>
        <img src = {puzzle3}/>
          Deck
        </button>
        <button>
        <img src = {puzzle4}/>
          about
        </button>
        </div>   
         </div>
    )

}