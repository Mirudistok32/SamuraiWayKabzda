import React, { useState } from 'react';
import s from './UncontrolledOnOff.module.scss'

type PropsType = {
  defaultOn?: boolean,
  onChange?: (on: boolean) => void
}

export const UncontrolledOnOff =  React.memo((props: PropsType) => {

  const { defaultOn, onChange } = props

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

  const onActiveHandler = () => {
    setActive(true)
    onChange && onChange(true)
  }

  const onUnactiveHandler = () => {
    setActive(false)
    onChange && onChange(false)
  }

  return (
    <>
      <div className={s.OnOff}>
        <span className={activeClassnames} onClick={onActiveHandler}>On</span>
        <span className={inactiveClassnames} onClick={onUnactiveHandler}>Off</span>
        <span className={indicatorClassnames}></span>
      </div>
    </>
  )
})

