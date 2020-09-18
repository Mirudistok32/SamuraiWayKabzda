import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react'

export default {
    title: 'React.memo memo',

} as Meta;

const NewMessagesCounter = React.memo((props: { count: number }) => {
    console.log("NewMessagesCounter");


    return (<div>{props.count}</div>)
})

const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users");

    return (<div>{props.users.map((u, i) => (<div key={u + i}>{u}</div>))}</div>)
})

export const Example1 = () => {
    console.log('Example1');

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Stas", "Agesilaus", "Mirudistok"])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, `Newusers${users.length+1}`])}>add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}


// const Template: Story<RatingProps> = (args) => <Rating {...args} />;
// export const EmptyRating = Template.bind({});
// EmptyRating.args = {
//   value: 0
// }
// export const Rating1 = Template.bind({})
// Rating1.args = {
//   value: 1
// }
// export const Rating2 = Template.bind({})
// Rating2.args = {
//   value: 2
// }
// export const Rating3 = Template.bind({})
// Rating3.args = {
//   value: 3
// }
// export const Rating4 = Template.bind({})
// Rating4.args = {
//   value: 4
// }
// export const Rating5 = Template.bind({})
// Rating5.args = {
//   value: 5
// }
