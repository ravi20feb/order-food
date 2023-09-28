import React from "react"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import RestaurantNavBar from "./header/RestaurantNavBar"
import RestaurantMain from "./body/RestaurantMain"
import { Outlet } from "react-router-dom"
import HomeDishShimer from "./HomeDishShimer"


// import useData from "../utils/useData"



export default function Restaurnat(){

  // const[restaurant,setRestaurant] = useState('')
  const lat = localStorage.getItem('lat')
  const lng = localStorage.getItem('lng')
  const localAddress = JSON.parse(localStorage.getItem('address'));
  if (localAddress!==null) {
    const {address2} = localAddress
    console.log( address2)
    
  }
  console.log(lat,lng)

   // console.log(address1)

  
if(lat == null) {
  return <Navigate to={'/'} />
}
  
  const selector = useSelector(store=>store.lat.coor)

  console.log(selector)

  
  return (
    <>
   <div className="restaurnat-hero-wrapper relative min-h-[100%] flex flex-col min-w-[77.5rem] md:min-w-[auto] md:max-w-[100vw]">
      <RestaurantNavBar />
     <Outlet />

    </div>:
      
        
    </>
  )
}
