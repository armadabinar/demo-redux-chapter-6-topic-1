import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import dummyAPI from '../assets/dummyAPI';
import { getAllPerson, INIT, addPerson } from '../redux/actions';
import Person from './person';

class PersonContainer extends Component {
    componentDidMount() {
        console.log('data dr redux store');
        console.log(`data ${JSON.stringify(this.props.data)}`);
    }

    loadData() {
        this.props.getAllPerson()
        // dummyAPI.all().then(result => {

        // })
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

const mapDispatchToProps = dispatch => {
    return {
        getAllPerson: dispatch(getAllPerson()),
        addPerson: addPerson
    };
};


const mapStateToProps = state => {

    console.log(state)
    return {
        data: state.person
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer)