import style from './AccordionItem.module.scss'
import arrow_img from '../../images/icon-arrow-down.svg'
import classnames from 'classnames'


const AccordionItem = ({faq,onToggle,active}) => {
  const {accordion_item,question_btn,question_title,answer,open_answer,open_question,arrow}=style

  return (
    <li className={accordion_item}>
      <button className={classnames([question_btn],{[open_question]:active})} onClick={onToggle} >
        <p className={question_title}>{faq.question}</p>
        <span className={arrow}><img src={arrow_img} alt='+'/></span>
      </button>
      <div className={classnames([answer],{[open_answer]:active})}>
        <p>{faq.answer}</p>
      </div>
    </li>
  )
}

export default AccordionItem