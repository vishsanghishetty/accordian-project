import AccordionItem from './AccordionItem'
import React from 'react'

export default function Accordion({ data }) {
  const [currOpen, setCurrOpen] = React.useState(null)
  //console.log(currOpen)
 
 
  return (
      data.map((el, id) => 
        <AccordionItem key={el.id} num={id} title={el.title} currOpen={currOpen} onOpen={setCurrOpen}>
          {el.text}
        </AccordionItem>
      )
  )
}
