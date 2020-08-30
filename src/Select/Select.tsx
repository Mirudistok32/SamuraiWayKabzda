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
    const onItemClick = (value: any) => {
        onChange(value)
        showItems()
    }

    const itemsWatching = items.map(i => {
        const itemClass = [s.select__item]
        if(selectedItem?.title === i.title) itemClass.push(s.selected)

        return (
            <div
                className={itemClass.join(' ')}
                key={i.id}
                onClick={() => onItemClick(i.title)}
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

