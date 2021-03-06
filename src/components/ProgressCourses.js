import React from 'react'
import homeWork from '../assets/images/skills/homework.svg'
import struggle from '../assets/images/skills/struggle.svg'
import presentation from '../assets/images/skills/presentation.svg'
import videoImg from '../assets/images/skills/youtube.svg'
import lessonImg from '../assets/images/skills/writing.svg'

export default function ProgressCourses() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white shadow-md rounded rounded-md">

        <div className="flex items-center justify-between ml-4 mr-4 mt-3">
          <h4 className="text-2xl font-semibold text-cardTitle">Regular<br /> Expressions</h4>
          <h6 className=" text-white transition duration-700 ease-in-out bg-gray-500 w-20 text-center rounded-md p-0.5 hover:bg-gray-400 cursor-pointer">Start</h6>
        </div>
        <div className="flex flex-col items-end">
          <img className="w-20 mr-4 mb-4" src={struggle} alt="" />
          <div className=" w-11/12 bg-gray-400 m-auto rounded">
            <div className="h-2 w-8 bg-buttonBg rounded"></div>
          </div>
        </div>
        <div className="flex justify-between mr-5 ml-5 mb-5">

          <div className="flex items-center">
            <img className="w-5 mr-1" src={videoImg} alt="" />
            <h6>11 Videos</h6>
          </div>

          <div className="flex items-center">
            <img className="w-5 mr-1" src={lessonImg} alt="" />
            <h6>11 Lessons</h6>
          </div>


          <h6>5%</h6>


        </div>
      </div>

      <div className="flex flex-col justify-between bg-white shadow-md rounded rounded-md">

        <div className="flex items-center justify-between ml-4 mr-4 mt-3">
          <h4 className="text-2xl font-semibold text-cardTitle" >Password <br /> Hashing</h4>
          <h6 className=" text-white transition duration-700 ease-in-out bg-gray-500 w-20 text-center rounded-md p-0.5 hover:bg-gray-400 cursor-pointer">Start</h6>
        </div>
        <div className="flex flex-col items-end">
          <img className="w-20 mr-4 mb-4" src={homeWork} alt="" />
          <div className=" w-11/12 bg-gray-400 m-auto rounded">
            <div className="h-2 w-2/4 bg-buttonBg rounded"></div>
          </div>
        </div>
        <div className="flex justify-between mr-5 ml-5 mb-5">

          <div className="flex items-center">
            <img className="w-5 mr-1" src={videoImg} alt="" />
            <h6>21 Videos</h6>
          </div>

          <div className="flex items-center">
            <img className="w-5 mr-1" src={lessonImg} alt="" />
            <h6>2 Lessons</h6>
          </div>


          <h6>50%</h6>


        </div>

      </div>
      <div className="flex flex-col justify-between bg-white shadow-md rounded rounded-md">


        <div className="flex items-center justify-between ml-4 mr-4 mt-3">
          <h4 className="text-2xl font-semibold text-cardTitle">SQL<br /> Injections</h4>
          <h6 className=" text-white transition duration-700 ease-in-out bg-gray-500 w-20 text-center rounded-md p-0.5 hover:bg-gray-400 cursor-pointer">Start</h6>
        </div>
        <div className="flex flex-col items-end">
          <img className="w-20 mr-4 mb-4" src={presentation} alt="" />
          <div className=" w-11/12 bg-gray-400 m-auto rounded">
            <div className="h-2 w-3/12 bg-buttonBg rounded"></div>
          </div>
        </div>

        <div className="flex justify-between mr-5 ml-5 mb-5">

          <div className="flex items-center">
            <img className="w-5 mr-1" src={videoImg} alt="" />
            <h6>10 Videos</h6>
          </div>

          <div className="flex items-center">
            <img className="w-5 mr-1" src={lessonImg} alt="" />
            <h6>6 Lessons</h6>
          </div>


          <h6>25%</h6>


        </div>
      </div>
    </>
  )
}
