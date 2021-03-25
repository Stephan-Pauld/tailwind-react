import React from 'react'

export default function ProgressCourses() {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-0 2xl:ml-56 xl:ml-40 mt-12 mb-9 font-extrabold text-cardTitle">My Courses</h1>
      </div>
      <div className="flex 2xl:ml-52 xl:ml-40">
        <div className="flex flex-col justify-between bg-white w-80 h-80 shadow-md rounded m-2 rounded-md mr-16">

          <div className="flex items-center justify-between ml-4 mr-4 mt-3">
            <h4 className="text-2xl font-semibold text-cardTitle">Regular<br/> Expressions</h4>
          <h6 className="text-buttonText bg-buttonBg w-20 text-center rounded-xl ">Start</h6>
        </div>
        <div className="flex flex-col items-end">
          <img className="w-20 mr-4 mb-4" src="https://www.flaticon.com/svg/vstatic/svg/559/559136.svg?token=exp=1616694213~hmac=8ed33eefc33d865db992b4a866e49e1f" alt="" />
          <div className=" w-11/12 bg-gray-400 m-auto rounded">
            <div className="h-2 w-8 bg-buttonBg rounded"></div>
          </div>
        </div>
        <div className="flex justify-between mr-5 ml-5 mb-5">

          <div className="flex items-center">
            <img className="w-5 mr-1" src="https://www.flaticon.com/svg/vstatic/svg/4349/4349474.svg?token=exp=1616694459~hmac=5250939d793aea5717028add15dc7373" alt="" />
            <h6>11 Videos</h6>
          </div>

          <div className="flex items-center">
            <img className="w-5 mr-1" src="https://www.flaticon.com/svg/vstatic/svg/1001/1001371.svg?token=exp=1616694713~hmac=b5ca9bd7787052bbb86075fa2b866c65" alt="" />
            <h6>11 Lessons</h6>
          </div>


          <h6>5%</h6>


        </div>
      </div>

      <div className="flex flex-col justify-between bg-white w-80 h-80 shadow-md rounded m-2 rounded-md mr-16 ml-7">

        <div className="flex items-center justify-between ml-4 mr-4 mt-3">
          <h4 className="text-2xl font-semibold text-cardTitle" >Password <br/> Hashing</h4>
          <h6 className="text-buttonText bg-buttonBg w-20 text-center rounded-xl">Start</h6>
        </div>
        <div className="flex flex-col items-end">
          <img className="w-20 mr-4 mb-4" src="https://www.flaticon.com/svg/vstatic/svg/559/559134.svg?token=exp=1616694213~hmac=596ae4cf7124ccecf29dbe737d2c39b9" alt="" />
          <div className=" w-11/12 bg-gray-400 m-auto rounded">
            <div className="h-2 w-2/4 bg-buttonBg rounded"></div>
          </div>
        </div>
        <div className="flex justify-between mr-5 ml-5 mb-5">

          <div className="flex items-center">
            <img className="w-5 mr-1" src="https://www.flaticon.com/svg/vstatic/svg/4349/4349474.svg?token=exp=1616694459~hmac=5250939d793aea5717028add15dc7373" alt="" />
            <h6>21 Videos</h6>
          </div>

          <div className="flex items-center">
            <img className="w-5 mr-1" src="https://www.flaticon.com/svg/vstatic/svg/1001/1001371.svg?token=exp=1616694713~hmac=b5ca9bd7787052bbb86075fa2b866c65" alt="" />
            <h6>2 Lessons</h6>
          </div>


          <h6>50%</h6>


        </div>

      </div>
      <div className="flex flex-col justify-between bg-white w-80 h-80 shadow-md rounded m-2 rounded-md ml-5">


        <div className="flex items-center justify-between ml-4 mr-4 mt-3">
          <h4 className="text-2xl font-semibold text-cardTitle">SQL<br/> Injections</h4>
          <h6 className="text-buttonText bg-buttonBg w-20 text-center rounded-xl">Start</h6>
        </div>
        <div className="flex flex-col items-end">
          <img className="w-20 mr-4 mb-4" src="https://www.flaticon.com/svg/vstatic/svg/559/559124.svg?token=exp=1616694213~hmac=9db47c7e1c3e99c2adec01e4c19c5d18" alt="" />
          <div className=" w-11/12 bg-gray-400 m-auto rounded">
            <div className="h-2 w-3/12 bg-buttonBg rounded"></div>
          </div>
        </div>

        <div className="flex justify-between mr-5 ml-5 mb-5">

          <div className="flex items-center">
            <img className="w-5 mr-1" src="https://www.flaticon.com/svg/vstatic/svg/4349/4349474.svg?token=exp=1616694459~hmac=5250939d793aea5717028add15dc7373" alt="" />
            <h6>10 Videos</h6>
          </div>

          <div className="flex items-center">
            <img className="w-5 mr-1" src="https://www.flaticon.com/svg/vstatic/svg/1001/1001371.svg?token=exp=1616694713~hmac=b5ca9bd7787052bbb86075fa2b866c65" alt="" />
            <h6>6 Lessons</h6>
          </div>


          <h6>25%</h6>


        </div>
      </div>
    </div>
    </>
  )
}
