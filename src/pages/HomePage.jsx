// import React from 'react'
// import CardCompo from '../components/CardCompo'
// const HomePage = () => {
//   return (
//     <div className='flex justify-center mt-20'>

//       <CardCompo title={'Introduction'} url={['https://images.unsplash.com/photo-1722929606674-73c6e0bf7b17?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']} about={"My name is millie, I'm from North London and my favourite football team is TOttenham Hotspurs eventhough we haven't won a single trophy in over a decade"} title1={'Introduction'} url1={'https://images.unsplash.com/photo-1721332155484-5aa73a54c6d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} about1={"My name is Sarah, I'm from West London and my favourite football team is Arsenal eventhough we haven't won a single trophy in over a decade"} title2={"Introduction"} url2={'https://images.unsplash.com/photo-1722925541916-3c4544ae2f33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} about2={"My name is william , I'm from Manchester and I am big fan of Manchester united. They won't even win a thing though"} title3={'Introduction'} about3={"My name is Sarah, I'm from West London and my favourite football team is Arsenal eventhough we haven't won a single trophy in over a decade"} url3={"https://images.unsplash.com/photo-1722205165567-1c0f8221f7ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
//       />

//     </div>
//   )
// }

// export default HomePage
import React from 'react'
import Header from '../components/Header'
import Contact from './Contact'
import { NavLink, Outlet } from 'react-router-dom'
import Tech from './Tech'
import Who from './Who'


const HomePage = () => {
  return (
    <div className="">
      <div className=' flex space-x-40'>
        <div className='ml-8 mt-8 rounded-full h-96 w-96'>
          <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>
        <div className='mr-11 mt-24 text-wrap w-[600px]'
        > <h1 className='font-bold  text-xl'>Hi My name is John Wick.</h1>
          <h2 className='font-style italic text-red-700 text-lg'>Full Stack Web Developer, JavaScript Lover, Tech Enthusiast</h2>
          <p>Jonathan "John" Wick is a fictional character created by American screenwriter Derek Kolstad and portrayed by Canadian actor Keanu Reeves. He is the titular protagonist of the neo-noir media franchise John Wick.

            John is introduced as a legendary hitman who is thrust back into the criminal underworld after Russian-American mobsters assault him, kill his puppy, and steal his car. The attack sets John on a path of revenge, returning him to the violent lifestyle that he had left behind and eventually bringing him into conflict with the international organization of assassins</p></div>
      </div>
      <Tech />
      <Who />

    </div >
  )
}

export default HomePage
