import React from 'react';
import s from './OnOff.module.scss'

type PropsType = {
  active: boolean
}

export const OnOff = (props: PropsType) => {


  const { active } = props

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
        <span className={activeClassnames}>On</span>
        <span className={inactiveClassnames}>Off</span>
        <span className={indicatorClassnames}></span>
      </div>
    </>
  )
}

