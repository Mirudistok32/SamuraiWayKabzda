import React from 'react';
import s from './OnOff.module.scss'

type PropsType = {
  active: boolean
  onClick?: () => void
}

export const OnOff = (props: PropsType) => {

  const { active, onClick } = props



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

  const onClickHandler = () => {
    onClick && onClick()
  }

  return (
    <>
      <div className={s.OnOff}>
        <span className={activeClassnames} onClick={onClickHandler}>On</span>
        <span className={inactiveClassnames} onClick={onClickHandler}>Off</span>
        <span className={indicatorClassnames}></span>
      </div>
    </>
  )
}

