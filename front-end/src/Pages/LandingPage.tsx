
import { NavLink } from "react-router-dom"
import { useState } from "react";
import Card from "../Components/Card"
export default function LandingPage() {

const [isOpen, Open] = useState(false);
const menuHandler = () =>{
    if(isOpen){
        Open(false)
       
       
    } else {

        Open(true)
        
    }
}



  return (
    <div className = "h-full absolute w-full">

        <div className="fixed top-0 bg-blue-400 z-30 w-full">
          

                    <div className="cursor-pointer fixed ml-2">
                        <svg onClick = {menuHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-full object-center ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    <div className="font-mono text-3xl tracking-tighter text-gray-900 w-full text-center">Title</div>
        </div>



    <div className = {`${isOpen ?'transition duration-150 ease-in-out -translate-x-full' : 'transition duration-150 ease-in-out translate-x-0'} fixed left-0 top-0 bg-blue-400 h-full w-1/4 z-30`}>

                     <div className="cursor-pointer fixed ml-2">
                        <svg onClick = {menuHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-full object-center ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
        </div>
        
       
        
            <div className="grid md:grid-cols-3 z-10 place-content-center h-full absolute w-full">
                <Card img_path='./img/prog.jpg' topic='Programming'/>
                <Card img_path='./img/E-sport.jpg' topic='E-Sports'/>
                <Card img_path='./img/different_sports.jpg' topic='Sports'/>
            </div>
                        
     
  
    </div>
    
  )
}
