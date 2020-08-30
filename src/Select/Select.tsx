import React, { useState, KeyboardEvent, useEffect } from 'react'
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

export const Select: React.FC<SelectPropsType> = React.memo((props) => {

    const { items, value, onChange } = props

    const [active, setActive] = useState<boolean>(false)
    const [hovered, setHovered] = useState<string>(value)


    const selectedItem = items.find(i => i.title === value)

    const showItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        onChange(value)
        showItems()
    }
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {

        switch (e.keyCode) {
            case 38: {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title === hovered) {
                        if (items[i - 1]) {
                            onChange(items[i - 1].title)
                            return;
                        } else {
                            // onChange(items[items.length - 1].title)
                            return;
                        }
                    }
                }
                break
            }
            case 40: {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title === hovered) {
                        if (items[i + 1]) {
                            onChange(items[i + 1].title)
                            return;
                        } else {
                            // onChange(items[0].title)
                            return;
                        }
                    }
                }
                break
            }
            case 13: {
                setActive(!active)
                break
            }
            case 27: {
                setActive(false)
                break
            }
            default:
                break;
        }
    }
    useEffect(() => {
        setHovered(value)
    }, [value])

    const itemsWatching = items.map(i => {
        const itemClass = [s.select__item]
        if (selectedItem?.title === i.title) itemClass.push(s.selected)
        if (hovered === i.title) itemClass.push(s.hover)

        return (
            <div
                className={itemClass.join(' ')}
                key={i.id}
                onClick={() => onItemClick(i.title)}
                onMouseEnter={() => setHovered(i.title)}
            >{i.title}
            </div>
        )
    })

    const mainClass = [s.select]
    if (active) mainClass.push(s.active)


    return (
        <>
            <div
                className={mainClass.join(' ')}
                onKeyDown={onKeyDown}
                tabIndex={0}
            >
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
})

