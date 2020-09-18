import { Meta } from '@storybook/react/types-6-0';
import React, { useMemo, useState } from 'react'

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

export const ReactMemoExample = () => {
    console.log('Example1');

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Stas", "Agesilaus", "Mirudistok"])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, `Newusers${users.length + 1}`])}>add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}

export const UseMemoExample = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)


    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempValue = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempValue *= i
        }
        return tempValue
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)} />
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)} />
        <hr />
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo');

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Stas", "Agesilaus", "Mirudistok"])

    const filterUsers = useMemo(() => users.filter(u=>u.toLowerCase().includes('u')), [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={filterUsers} />
    </>
}
