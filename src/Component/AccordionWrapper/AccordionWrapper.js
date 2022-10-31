import style from './AccordionWrapper.module.scss'
import { useState } from 'react'
import AccordionItem from '../AccordionItem/AccordionItem'
import { faqData } from '../../faqData'

const AccordionWrapper = () => {
    const {accordion_wrapper} = style

    const [clicked,setClicked]= useState(0)
    const handleToggle = (id)=>{
      if(clicked === id){
        return setClicked('0')
      }else{
        return setClicked(id)
      }
      }

  return (
    <ul className={accordion_wrapper}>
      {faqData.map((faq) => {
        return <AccordionItem faq={faq} key={faq.id} onToggle={()=>handleToggle(faq.id)} active={clicked === faq.id}/>
      })}
    </ul>
  )
}

export default AccordionWrapper