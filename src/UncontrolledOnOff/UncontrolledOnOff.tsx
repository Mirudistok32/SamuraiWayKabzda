import React, { useState } from 'react';
import s from './UncontrolledOnOff.module.scss'

type PropsType = {
  defaultOn?: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {

  const { defaultOn } = props

  const [active, setActive] = useState<boolean>(defaultOn ? defaultOn : false)

  let activeClassnames = s.OnOff__btns
  let inactiveClassnames = s.OnOff__btns
  let indicatorClassnames = s.OnOff__indicator

  if (active) {
    activeClassnames += ' ' + s.active
    indicatorClassnames += ' ' + s.active

  } else {
    indicatorClassnames += ' ' + s.inactive
    inactiveClassnames += ' ' + s.inactive
  }


  return (
    <>
      <div className={s.OnOff}>
        <span className={activeClassnames} onClick={() => setActive(true)}>On</span>
        <span className={inactiveClassnames} onClick={() => setActive(false)}>Off</span>
        <span className={indicatorClassnames}></span>
      </div>
    </>
  )
}

