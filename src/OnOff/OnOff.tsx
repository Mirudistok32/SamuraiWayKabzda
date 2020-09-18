import React from 'react';
import s from './OnOff.module.scss'

type PropsType = {
  active: boolean
  onChangeActive?: (active: boolean) => void
}

export const OnOff =  React.memo((props: PropsType) => {

  const { active, onChangeActive } = props



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

  const onActiveHandler = () => {
    onChangeActive && onChangeActive(true)
  }
  
  const onUnactiveHandler = () => {
    onChangeActive && onChangeActive(false)
  }

  return (
    <>
      <div className={s.OnOff}>
        <span className={activeClassnames} onClick={onActiveHandler} >On</span>
        <span className={inactiveClassnames} onClick={onUnactiveHandler}>Off</span>
        <span className={indicatorClassnames}></span>
      </div>
    </>
  )
})

