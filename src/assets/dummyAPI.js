export default {
    all: () => Promise.resolve([
        {
            id: 1,
            name: 'Ryan Gosling',
            photo: 'https://picsum.photos/200'
        },
        {
            id: 2,
            name: 'Brian Gosling',
            photo: 'https://picsum.photos/200'
        }
    ]),
    person: {
        id: 3,
        name: 'abc',
        photo: 'https://picsum.photos/200'
    }
}