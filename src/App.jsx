import React from 'react'
import Accordion from '../components/Accordion'
import questions from '../src/questions'

export default function App() {
   return (
    <div>
       <Accordion data={questions} />
    </div>
  )
}
