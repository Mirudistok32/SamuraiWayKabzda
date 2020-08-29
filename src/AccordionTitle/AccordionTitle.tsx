import React from 'react';
import s from './AccordionTitle.module.scss'

type PropsType = {
  title: string
  onClick?: () => void
}

export const AccordionTitle = (props: PropsType) => {

  const { title, onClick } = props

  const onClickHandler = () => {
    onClick && onClick()
  }

  const mainClass = [s.title]

  return (
    <>
      <h3 className={mainClass.join(' ')} onClick={onClickHandler}>{title}</h3>
    </>
  )
}

