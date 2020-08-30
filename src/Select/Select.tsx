import React, { useState } from 'react'
import s from './Select.module.scss'


export type ItemsSelectType = {
    title: string,
    id: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemsSelectType>
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const { items, value, onChange } = props

    const [active, setActive] = useState<boolean>(false)


    const selectedItem = items.find(i => i.title === value)

    const showItems = () => setActive(!active)

    const itemsWatching = items.map(i => {
        return (
            <div
                className={s.select__item}
                key={i.id}
                onClick={() => onChange(i.title)}
            >{i.title}
            </div>
        )
    })

    const mainClass = [s.select]
    if (active) mainClass.push(s.active)

    return (
        <>
            <div className={mainClass.join(' ')}>
                <span
                    className={s.title}
                    onClick={showItems}
                >{selectedItem?.title ? selectedItem.title : "None"}
                </span>
                <div className={s.select__items}>
                    {
                        itemsWatching
                    }
                </div>
            </div>
        </>
    )
}

