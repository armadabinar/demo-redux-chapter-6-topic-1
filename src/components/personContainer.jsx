import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import dummyAPI from '../assets/dummyAPI';
import { INIT } from '../redux/actions';
import Person from './person';

class PersonContainer extends Component {
    componentDidMount() {
        console.log('data dr redux store');
        console.log(`data ${JSON.stringify(this.props.data)}`);
    }

    loadData() {
        dummyAPI.all().then(result => {
            this.props.dispatch({
                type: INIT,
                payload: result
            })
        })
    }

    render() {
        return (<div>{
            this.props.data.map(d => {
                console.log(JSON.stringify(d))
                return (
                    <Person
                        name={d.name}
                        photo={d.photo}
                    />
                )
            })

        }
            <button onClick={this.loadData.bind(this)}>LOAD DATA</button>
        </div>)
    }
}

const mapStateToProps = state => {

    console.log(state)
    return {
        data: state.person
    }
}
export default connect(mapStateToProps)(PersonContainer)