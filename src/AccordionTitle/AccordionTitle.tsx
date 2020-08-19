import React from 'react';

type PropsType = {
  title: string
}

export const AccordionTitle = (props: PropsType) => {

  const { title } = props
  return (
    <>
      <h3>{title}</h3>
    </>
  )
}

