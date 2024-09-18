import React from 'react'
import { Outlet } from 'react-router'
import { Monial } from './Monial'

const Contact = () => {
  const person = {
    person_photo: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
    person_name: 'john doe',
    person_detail: "It’s as if you’re constantly overwhelmed, trapped in a cycle of negativity and hopelessness. Everything feels heavy, and even the smallest tasks become monumental. It’s like trying to move forward while stuck in quicksand, with no way out in sight. The things that once brought joy seem distant and out of reach, and it's hard to find any motivation or spark. It’s a state of loneliness, exhaustion, and helplessness, where it feels like nothing will change, no matter what you do."

  };
  return (
    <div>
      <Monial person={person} />
      <Outlet />
    </div>
  )
}

export default Contact
