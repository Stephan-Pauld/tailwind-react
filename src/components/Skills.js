import React from 'react'
import ambassador from '../assets/images/skills/Ambassador.svg'
import CSA from '../assets/images/skills/CSA.svg'
import dataAnalyst from '../assets/images/skills/DataAnalyst.svg'
import penTest from '../assets/images/skills/Pentester.svg'
import RPA from '../assets/images/skills/RPAAnalyst.svg'


export default function Skills() {


  // Im quite proud of this!!
  // What this does is when someone on mobile  hovers over the badges we 
  // apply TailWind z-index to bring the badge forward so if when it expands
  // larger than the other badges it will be "on top" of them so you can 
  // read your badge on mobile devices
  const toggleIndexValue = (position, id) => {
    // instead of front/back string we could just check to see if the classlist has
    // z-40 and just apply or remove it?
    if (position === 'front') document.getElementById(`${id}`).classList.add('z-40');
    if (position === 'back') document.getElementById(`${id}`).classList.remove('z-40');
  }
  return (
    <div className="flex flex-col justify-between bg-white shadow-md rounded-md">
      <div>
        <div className="m-5 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-cardTitle">Skills</h1>
          <h5 className="text-cardSub">All</h5>
        </div>
        <div className="flex flex-wrap justify-between mt-8 mx-5">
          <img
            id="1"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={ambassador}
            alt="badge-name-here"
          />



          <img
            id="2"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={RPA}
            alt="badge-name-here"
          />

          <img
            id="3"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={CSA}
            alt="badge-name-here"
          />

          <img
            id="4"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={dataAnalyst}
            alt="badge-name-here"
          />

          <img
            id="5"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={RPA}
            alt="badge-name-here"
          />

          <img
            id="6"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={penTest}
            alt="badge-name-here"
          />

          <img
            id="7"
            onMouseEnter={e => toggleIndexValue("front", e.target.id)}
            onMouseLeave={e => toggleIndexValue("back", e.target.id)}
            className="skill-badges"
            src={RPA}
            alt="badge-name-here"
          />

        </div>
        <div className="border-b-2 mt-2 w-11/12 m-auto">

        </div>
      </div>
    </div>
  )
}
