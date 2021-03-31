import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
export default function Statistics() {

  const [progress, setProgress] = useState(50)
  return (
    <div>
      <div className="flex flex-col justify-between bg-cardBg h-96 shadow-md rounded-t-md">
        <div className="flex justify-between items-center">
          <h3 className="m-5 text-xl font-semibold text-cardTitle">Statistics</h3>
          <h5 className="m-5 text-cardSub">More</h5>
        </div>
        <div className="flex justify-center items-center w-52 m-auto">
          <CircularProgressbar
            value={progress}
            text={''}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',

              // Text size
              textSize: '16px',

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: "#147D64",
              trailColor: '#BCCCDC'
            })}
          />
        </div>
        <div className="flex justify-around items-end mb-10">
          <div>
            <div className="flex items-center justify-start">
              <div className="w-3 h-3 bg-wyBlue rounded-xl mt-1 mr-3" />
              <h4 className="font-semibold text-cardTitle">25%</h4>
            </div>
            <h6 className="text-cardSub">completed</h6>
          </div>
          <div>
            <div className="flex items-center justify-start">
              <div className="w-3 h-3 bg-wyLtBlue rounded-xl mt-1 mr-3" />
              <h4 className="font-semibold text-cardTitle">25%</h4>
            </div>
            <h6 className="text-cardSub">in progress</h6>
          </div>
          <div>
            <div className="flex items-center justify-start">
              <div className="w-3 h-3 bg-wyLtGreen rounded-xl mt-1 mr-3" />
              <h4 className="font-semibold text-cardTitle">50%</h4>
            </div>
            <h6 className="text-cardSub">remaining</h6>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between bg-gray-100 p-5 rounded-b-md">
        <button onClick={() => setProgress(35)} className="bg-gray-500 w-40 rounded-md text-white py-2 font-semibold" >Click For 35%</button>

        <button onClick={() => setProgress(75)} className="bg-gray-500 w-40 rounded-md text-white py-2 font-semibold" >Click For 75%</button>

        <button onClick={() => setProgress(5)} className="bg-gray-500 w-40 rounded-md text-white py-2 font-semibold" >Click For 5%</button>
      </div>
    </div>
  )
}
