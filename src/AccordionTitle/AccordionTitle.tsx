import React from 'react';

type PropsType = {
  title: string
  onClick?: () => void
}

export const AccordionTitle = (props: PropsType) => {

  const { title, onClick } = props

  const onClickHandler = () => {
    onClick && onClick()
  }

  return (
    <>
      <h3 onClick={onClickHandler}>{title}</h3>
    </>
  )
}

