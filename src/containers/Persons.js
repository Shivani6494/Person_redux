import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'

class Persons extends Component {
  state = {
    personsName : '',
    personAge : ''
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

  onAddPerson = () => {
    if (this.state.personsName && this.state.personAge){
      this.props.onAdd(this.state.personsName,this.state.personAge)
    }
  }
//   handleChange = (eventName) => {
//     this.setState({ personsName: eventName.target.value })
//     this.setState({ personAge: eventName.target.value })
// }

  render() {
    return (
      <div>
        <AddPerson personAdded={()=>{this.props.onAdd(this.state.personsName,this.state.personAge)}} />
        {console.log(this.props.per)}
        <input placeholder='Add Person Name'  name = 'personname' value = {this.state.personsName} onChange = {(e)=>{this.setState({personsName : e.target.value})}} /> &nbsp;&nbsp;
        <input placeholder='Add Person Age'  name = 'personage' value = {this.state.personAge} onChange = {(e)=>{this.setState({personAge : e.target.value})}} />
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
        {console.log(this.props.per)}
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
   
    onAdd: (name,age) => dispatch({ type: "ADD_PERSON", value: {
      id: Math.random(), // not realy unique but good enough here
      name: name,
      age: age
    } }),

    onRemove: (personId) =>  dispatch({ type: "REMOVE_PERSON", value: personId
   }),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);