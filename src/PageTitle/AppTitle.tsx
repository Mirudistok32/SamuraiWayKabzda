import React from 'react';

type PropsType = {
  title: string
}

export const PageTitle = (props: PropsType) => {

  const { title } = props
  return (
    <>
      <h1>
        {
          title
        }
      </h1>
    </>
  )
}

