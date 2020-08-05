import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'

class Persons extends Component {
  state = {
    persons: []
  }

  // personAddedHandler = () => {
  //   const newPerson = {
  //     id: Math.random(), // not realy unique but good enough here
  //     name: 'John',
  //     age: Math.floor(Math.random() * 40)
  //   }
  //   this.setState((prevState) => {
  //     return { persons: prevState.persons.concat(newPerson) }
  //   })
  // }

  // personDeleteHandler = (personId) => {
  //   this.setState((prevState) => {
  //     return { persons: prevState.persons.filter(person => personId !== person.id) }
  //   })
  // }

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAdd} />
        {console.log(this.props.per)}
        {
          this.props.per.map(person => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              clicked={() => { this.props.onRemove(person.id) }}
            />
          ))
        }
        <input placeholder='Add Person Name' text='Name' /> &nbsp;&nbsp;
        <input placeholder='Add Person Age' text='Age' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    per : state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
   
    onAdd: () => dispatch({ type: "ADD_PERSON", value: {
      id: Math.random(), // not realy unique but good enough here
      name: 'John',
      age: Math.floor(Math.random() * 40)
    } }),

    onRemove: (personId) =>  dispatch({ type: "REMOVE_PERSON", value: personId
   }),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);