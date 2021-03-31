import React from 'react'
import Statistics from '../Statistics'
import Skills from '../Skills'
import Awards from '../Awards'
import TopBar from '../TopBar'
import ProgressCourses from '../ProgressCourses'


export default function Progress() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div>
          <TopBar />
        </div>
        <div className="container mx-auto">
          <div>
            <h1 className="text-4xl my-9 font-extrabold text-cardTitle">Progress</h1>
          </div>
          <div className="grid  md:grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-4">
            <Statistics />
            <div className="grid  grid-cols-1 grid-rows-2 gap-4">
              <Skills />
              <Awards />
            </div>
          </div>
          <div>
              <h1 className="text-4xl my-9 font-extrabold text-cardTitle">My Courses</h1>
            </div>
          <div className="grid  lg:grid-cols-3 grid-cols-1 grid-rows-1 gap-5 mt-10">
            <ProgressCourses />
          </div>
        </div>

      </div>
    </>
  )
}
