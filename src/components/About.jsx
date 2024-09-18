import React from 'react'
import { Outlet } from 'react-router'
import { Monial } from './Monial'

const About = () => {
  const about = {
    company_photo: 'https://plus.unsplash.com/premium_photo-1667587246381-49a4f3daab71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company_name: 'tesla',
    company_detail: ' As Gregor struggles to adapt to his new reality, his family becomes increasingly repulsed by his condition, leading to his isolation and eventual demise. Kafka uses Gregor’s physical transformation as a metaphor for the emotional and psychological alienation that people experience in modern society. The novella examines the fragile nature of human relationships and the existential crisis brought about by sudden, incomprehensible change. The Metamorphosis is both unsettling and thought-provoking, a profound reflection on the human condition.'

  };

  return (
    <div>
      <Monial about={about} />
      <Outlet />
    </div>
  )
}

export default About
