import { StateType, reducer, TOGGLE_COLLAPSED } from "./reducer"

test('reducer should change value to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })

    // expection
    expect(newState.collapsed).toBe(true)
})

test('reducer should error', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    // action

    // expection
    expect(() => {
        reducer(state, { type: "TOGGLE_COsLLAPSED" })
    }).toThrowError()
})