import AccordionItem from './AccordianItem'
import React from 'react'

export default function Accordion({ data }) {
  const [currOpen, setCurrOpen] = React.useState(null)
  console.log(currOpen)
 
 
  return (
      data.map((question) => 
        <AccordionItem key={question.id} num={question.id} title={question.title} text={question.text} currOpen={currOpen} onOpen={setCurrOpen} /> )
  )
}
