
import person from "../../assets/dummyAPI"
export const ADD = 'person/ADD'
export const INIT = 'person/INIT'

function mockCreatePerson(person) {
    return Promise.resolve(person)
}

export const getAllPerson = () => dispatch => {
    person.all().then(persons => dispatch({ type: INIT, payload: persons }))
}

export const addPerson = person => dispatch => {
    mockCreatePerson(person).then(person => dispatch({ type: ADD, payload: person }))
}