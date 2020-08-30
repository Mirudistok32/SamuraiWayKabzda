import React, { ChangeEvent } from 'react'
import s from './Select.module.scss'


export type ItemsSelectType = {
    title: string,
    id: string
}

type SelectPropsType = {
    value?: any
    onChange?: (value: any) => void
    items: Array<ItemsSelectType>
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const { items, value, onChange } = props

    const itemsWatching = items.map(i => {
        return (
            <option
                key={i.id}
                value={i.title} >{i.title}
            </option>
        )
    })

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
        onChange && onChange(value)
    }

    const mainClass = [s.select]


    return (
        <select
            className={mainClass.join(' ')}
            onChange={onChangeHandler}
            value={value}
        >
            <option>none</option>
            {
                itemsWatching
            }
        </select>
    )
}

