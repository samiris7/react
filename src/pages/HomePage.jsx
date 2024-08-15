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
import Sample1 from './Sample1'


const HomePage = () => {
  return (
    <div className="">
      <div className=" flex-col">
        <div className='flex justify-evenly mt-24'>
          <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1.2" loop autoplay></dotlottie-player>
          <div className='mr-11  text-wrap '>
            <h1 className='font-bold  text-xl underline underline-offset-4 decoration-red-800'>Hi My name is John Wick</h1>
            <h2 className='font-style italic text-fuchsia-950 text-lg font-bold'>(Full Stack Web Developer, JavaScript Lover, Tech Enthusiast)</h2>
            <p className=' text-wrap'>
              John Wick is a 2014 American action thriller film directed by Chad Stahelski and written by Derek Kolstad. Keanu Reeves stars as John Wick, a legendary hitman who comes out of retirement to seek revenge against the men who killed his dog, a final gift from his recently deceased wife. The film also stars Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe.

              Kolstad's script drew on his interest in action, revenge, and neo noir films. Producer Basil Iwanyk purchased the rights as his first independent film production. Reeves, whose career was declining, liked the script and recommended that the experienced stunt choreographers Stahelski and David Leitch direct the action scenes; Stahelski and Leitch successfully lobbied to co-direct the project. Principal photography began in October 2013, on a $20–$30 million budget, and concluded that December. Stahelski and Leitch focused on highly choreographed and long single takes to convey action, eschewing the rapid cuts and closeup shots of contemporary action films.
            </p></div>

        </div>
        <p className='mx-5'>

          Iwanyk struggled to secure theatrical distributors because industry executives were dismissive of an action film by first-time directors, and Reeves's recent films had underperformed. Lionsgate Films purchased the distribution rights to the film two months before its release date on October 24, 2014. Following a successful marketing campaign that changed its perception from disposable entertainment to a prestige event helmed by an affable leading actor, John Wick exceeded box-office projections and became a modest success, grossing $86 million worldwide. It received generally positive reviews for its style and action sequences. Critics hailed John Wick as a comeback for Reeves, in a role that played to his acting strengths. The film's mythology of a criminal underworld with rituals and rules was praised as its most distinctive and interesting feature.

          John Wick began a successful franchise which includes three sequels (John Wick: Chapter 2 (2017), John Wick: Chapter 3 – Parabellum (2019), and John Wick: Chapter 4 (2023)), the prequel television series The Continental: From the World of John Wick (2023), the spin-off film John Wick Presents: Ballerina (2025), as well as video games and comic books. Some retrospective assessments have identified John Wick to be among the best action films made; it is seen as having revitalized the genre and popularized long single takes with choreographed, detailed action.
          Plot

          In New York City, John Wick is grieving the death of his wife Helen, who had arranged for him to receive a beagle puppy to help cope with his loss. A few days later, a group of Russian gangsters led by Iosef Tarasov accost John at a gas station and fail to intimidate him into selling them his 1969 Boss 429 Mustang.[ii] That night, they break into John's home, assault him, kill the puppy, and steal the car. Iosef takes the Mustang to a chop shop to remove its identifying details, but the shop owner, Aurelio, recognizes it and refuses service. Aurelio informs John that Iosef is the son of Viggo Tarasov, the boss of New York City's Russian mafia.

          Upon learning of his son's actions, Viggo berates Iosef for incurring John's wrath. He reveals John was once a hitman in his employ, and was renowned and feared in the criminal underworld as the Baba Yaga, a ruthless, relentless "man of focus, commitment, and sheer will". After John fell in love with Helen, a civilian, Viggo gave him a seemingly impossible task to earn his freedom; he succeeded.

          John recovers a concealed stash from his former career that includes weapons and gold coins. He rejects Viggo's attempt to make amends and kills the hit squad subsequently sent to his home. Viggo puts a $2 million bounty on John and enlists John's former mentor, Marcus, to kill him. John lodges at the Continental, a luxurious hotel that serves as neutral ground for the underworld and where conducting criminal business is forbidden. Winston, the hotel's owner and John's old friend, informs him that Iosef is at a nightclub called Red Circle. John infiltrates Red Circle and confronts Iosef, but he is attacked by Viggo's henchman Kirill and forced to retreat to the Continental for medical attention. .</p>


      </div>
      <Tech />
      <Who />
      <Sample1 />
    </div >

  )
}

export default HomePage
