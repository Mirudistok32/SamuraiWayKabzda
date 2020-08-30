import React from 'react'

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

    const onChangeHandler = () => {
        onChange && onChange(value)
    }

    return (
        <select onChange={onChangeHandler}>
            <option>none</option>
            {
                itemsWatching
            }
        </select>
    )
}

