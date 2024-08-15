import React from 'react'
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiReact } from 'react-icons/di'

const Tech = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-2xl flex justify-center  mt-12'>Technologies I use</h1>
      <div className="mt-12 ">
        <div className="grid grid-cols-4 place-items-center">

          <DiReact size={200} />
          <DiJavascript size={200} />
          <DiMongodb size={200} />
          <DiCss3 size={200} className='animate-bounce ' />


        </div>
        <div className='grid grid-cols-3 place-items-center mt-12 '>
          <DiHtml5 size={200} />
          <DiGit size={200} />
          <DiNodejs size={200} />
        </div>
      </div>
    </div>
  )
}

export default Tech
