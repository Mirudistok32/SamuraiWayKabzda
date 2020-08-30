import React, { useState } from 'react'
import { Select } from './Select';
import { Meta } from '@storybook/react/types-6-0';
import { v4 } from 'uuid';


export default {
    title: 'My Components/Select',
    component: Select,
    argTypes: {

    },
} as Meta;


export const WithValue = () => {

    const [value, setValue] = useState('storybook')

    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                { title: 'react', id: v4() },
                { title: 'redux', id: v4() },
                { title: 'storybook', id: v4() },
                { title: 'thunk', id: v4() },
                { title: 'rest api', id: v4() },
                { title: 'css-modules', id: v4() },
                { title: 'typescript', id: v4() },
                { title: 'formik', id: v4() },
                { title: 'pure function', id: v4() },
                { title: 'hooks', id: v4() },
            ]}
        />
    )
}
export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                { title: 'react', id: v4() },
                { title: 'redux', id: v4() },
                { title: 'storybook', id: v4() },
                { title: 'thunk', id: v4() },
                { title: 'rest api', id: v4() },
                { title: 'css-modules', id: v4() },
                { title: 'typescript', id: v4() },
                { title: 'formik', id: v4() },
                { title: 'pure function', id: v4() },
                { title: 'hooks', id: v4() },
            ]}
        />
    )
}