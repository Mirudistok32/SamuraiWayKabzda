import React from 'react'

export type ItemsSelectType = {
    title: string,
    id: string
}

type SelectPropsType = {
    items: Array<ItemsSelectType>
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const { items } = props

    const itemsWatching = items.map(i => {
        return (
            <option
                key={i.id}
                value={i.title} >{i.title}
            </option>
        )
    })

    return (
        <select>
            <option>none</option>
            {
                itemsWatching
            }
        </select>
    )
}

