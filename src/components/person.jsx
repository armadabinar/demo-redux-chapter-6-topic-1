import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Person extends Component {
    render() {
        const { name, photo } = this.props
        return (
            <div>
                <h1>{name}</h1>
                <img src={photo} />
            </div>
        )
    }
}

export default Person