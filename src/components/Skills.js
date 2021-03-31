import React from 'react'
import ambassador from '../assets/images/skills/Ambassador.svg'
import CSA from '../assets/images/skills/CSA.svg'
import dataAnalyst from '../assets/images/skills/DataAnalyst.svg'
import penTest from '../assets/images/skills/Pentester.svg'
import RPA from '../assets/images/skills/RPAAnalyst.svg'
export default function Skills() {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md rounded-md">
      <div>
        <div className="m-5 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-cardTitle">Skills</h1>
          <h5 className="text-cardSub">All</h5>
        </div>
        <div className="flex justify-between mt-8 ml-5 mr-5">
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={ambassador} alt="" />
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={RPA} alt="" />
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={CSA} alt="" />
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={dataAnalyst} alt="" />
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={RPA} alt="" />
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={penTest} alt="" />
          <img className="w-14 transition duration-500 ease-in-out transform hover:scale-150" src={RPA} alt="" />
        </div>
        <div className="border-b-2 mt-2 w-11/12 m-auto">

        </div>
      </div>
    </div>
  )
}
