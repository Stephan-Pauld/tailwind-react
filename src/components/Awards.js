import React from 'react'
import awardBanner from '../assets/images/skills/awardBanner.png'

export default function Awards() {
  return (
    <>

      <div className="flex flex-col bg-white shadow-md rounded rounded-md">
        <div>
          <div className="flex justify-between items-center ml-5 mr-5 mt-4 mb-3">
            <h1 className="text-xl font-semibold text-cardTitle">Awards</h1>
            <h5 className="text-cardSub">All</h5>
          </div>
          <div className="flex justify-evenly">
            <div className="flex items-center">
              <div>
                <img className="w-28" src={awardBanner} alt="" />
              </div>

              <div className="flex flex-col w-80 ml-12">
                <h4 className="text-xl font-semibold text-cardTitle mb-2">Be <span className="text-red-800 border-b-2 border-red-900">Fierce!</span></h4>
                <p className="text-cardSub">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptates nulla officiis.</p>
                <div className=" w-11/12 bg-gray-400 rounded">
                  <div className="h-2 w-52 bg-buttonBg rounded">

                  </div>

                </div>

              </div>



            </div>
            <div className="flex items-end">
              <h6 className="text-cardSub">75%</h6>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
