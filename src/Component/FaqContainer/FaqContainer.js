import React from 'react'
import AccordionWrapper from '../AccordionWrapper/AccordionWrapper'
import style from './FaqContainer.module.scss'

const FaqContainer = () => {
  const {faq_container,faq_title} = style
  return (
    <div className={faq_container}>
        <h1 className={faq_title}>FAQ</h1>
        <AccordionWrapper />
    </div>
  )
}

export default FaqContainer