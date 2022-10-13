/* eslint-disable import/no-anonymous-default-export */
import { ADD, INIT } from "../actions";

const initialState = [{
    id: 1,
    name: 'Ryan Gosling',
    photo: 'https://picsum.photos/200'
}]

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        case INIT:
            return action.payload
        default:
            return state
    }
}