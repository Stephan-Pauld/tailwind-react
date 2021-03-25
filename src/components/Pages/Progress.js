import React from 'react'
import Statistics from '../Statistics'
import Skills from '../Skills'
import Awards from '../Awards'
import TopBar from '../TopBar'
import ProgressCourses from '../ProgressCourses'


export default function Progress() {
  return (
    <>
      <div className="w-full">
        <TopBar />
        <div>
          <div className="md:flex mt-10 2xl:ml-52 xl:ml-40">
            <div className="m-2">
              <div>
                <h1 className="text-4xl mb-0 mb-9 font-extrabold text-cardTitle">Progress</h1>
              </div>
              <Statistics />
            </div>

            <div className="mt-20">
              <Skills />
              <Awards />
            </div>
          </div>
          <ProgressCourses />
        </div>
      </div>
    </>
  )
}
